"""Harness didáctico. El simulador NO es un modelo de IA.

Ejecutar: python formacion-ai-engineering-v2/laboratorio/starter.py I-01
Sustituir ScriptedSimulator por un adaptador a un modelo autorizado en M03.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any, Protocol


BASE = Path(__file__).resolve().parent
SECCIONES = {"POL-1", "POL-2", "POL-3"}
CATEGORIAS = {"interfaz", "api", "datos", "acceso", "desconocido"}
PRIORIDADES = {"P1", "P2", "P3", "por_confirmar"}
CLAVES_SALIDA = {
    "id", "categoria", "prioridad", "fundamento", "fuentes_politica",
    "version_politica", "requiere_revision",
}
TOOL_SPECS = {
    "buscar_politica": {"efecto": "lectura", "argumentos": {"seccion": sorted(SECCIONES)}},
    "crear_borrador_simulado": {"efecto": "escritura_simulada", "argumentos": {"id": "I-00", "contenido": "texto"}},
}


class ModelAdapter(Protocol):
    """Contrato neutral: el proveedor concreto traduce sus tool calls a este formato."""

    def propose(self, case: dict[str, Any], observations: list[dict[str, Any]],
                tools: dict[str, Any]) -> dict[str, Any]: ...


class ScriptedSimulator:
    """Secuencia fija para probar el harness, sin razonamiento ni clasificación real."""

    def propose(self, case: dict[str, Any], observations: list[dict[str, Any]],
                tools: dict[str, Any]) -> dict[str, Any]:
        if not observations:
            return {"type": "tool", "name": "buscar_politica", "args": {"seccion": "POL-3"}}
        if len(observations) == 1:
            return {"type": "tool", "name": "crear_borrador_simulado",
                    "args": {"id": case["id"], "contenido": "Solicitar evidencia adicional."}}
        return {"type": "final", "answer": {
            "id": case["id"], "categoria": "desconocido", "prioridad": "por_confirmar",
            "fundamento": "El simulador siempre se abstiene; debe conectarse un modelo autorizado.",
            "fuentes_politica": ["POL-3"], "version_politica": 2,
            "requiere_revision": True,
        }}


def load_case(case_id: str) -> dict[str, Any]:
    for line in (BASE / "casos.jsonl").read_text(encoding="utf-8").splitlines():
        case = json.loads(line)
        if case["id"] == case_id:
            return case
    raise ValueError(f"Caso no encontrado: {case_id}")


def buscar_politica(seccion: str) -> dict[str, Any]:
    if seccion not in SECCIONES:
        raise ValueError("Sección no permitida")
    lines = (BASE / "politica-vigente.md").read_text(encoding="utf-8").splitlines()
    start = next(i for i, line in enumerate(lines) if line.startswith(f"## {seccion} "))
    end = next((i for i in range(start + 1, len(lines)) if lines[i].startswith("## ")), len(lines))
    return {"seccion": seccion, "version": 2, "texto": "\n".join(lines[start:end]).strip()}


def validate_answer(answer: Any, case_id: str) -> None:
    if not isinstance(answer, dict) or set(answer) != CLAVES_SALIDA:
        raise ValueError("Contrato de salida incompleto o con campos extra")
    if answer["id"] != case_id or not isinstance(answer["categoria"], str) or answer["categoria"] not in CATEGORIAS:
        raise ValueError("ID o categoría inválidos")
    if not isinstance(answer["prioridad"], str) or answer["prioridad"] not in PRIORIDADES or answer["version_politica"] != 2:
        raise ValueError("Prioridad o versión de política inválidas")
    if not isinstance(answer["fundamento"], str) or not answer["fundamento"].strip():
        raise ValueError("Falta fundamento")
    if (not isinstance(answer["fuentes_politica"], list) or
            not answer["fuentes_politica"] or
            any(not isinstance(section, str) or section not in SECCIONES
                for section in answer["fuentes_politica"])):
        raise ValueError("Fuentes de política inválidas")
    if not isinstance(answer["requiere_revision"], bool):
        raise ValueError("El indicador de revisión debe ser booleano")
    if answer["categoria"] == "desconocido" and (
            answer["prioridad"] != "por_confirmar" or not answer["requiere_revision"]):
        raise ValueError("La abstención exige prioridad por confirmar y revisión")


def run_agent(model: ModelAdapter, case: dict[str, Any], *, max_steps: int = 4,
              allow_draft: bool = False) -> dict[str, Any]:
    if max_steps < 1:
        raise ValueError("max_steps debe ser positivo")
    observations: list[dict[str, Any]] = []
    trace: list[dict[str, Any]] = []
    drafts: list[str] = []

    for step in range(1, max_steps + 1):
        proposal = model.propose(case, observations, TOOL_SPECS)
        if not isinstance(proposal, dict):
            raise ValueError("Propuesta inválida")
        if proposal.get("type") == "final":
            validate_answer(proposal.get("answer"), case["id"])
            trace.append({"paso": step, "tipo": "final", "estado": "validado"})
            return {"status": "completado", "answer": proposal["answer"],
                    "trace": trace, "drafts_in_memory": drafts}
        if proposal.get("type") != "tool":
            raise ValueError("Tipo de propuesta desconocido")

        name, args = proposal.get("name"), proposal.get("args")
        if not isinstance(name, str) or name not in TOOL_SPECS or not isinstance(args, dict):
            result = {"error": "tool_no_permitida"}
            status = "bloqueada"
        elif name == "buscar_politica" and set(args) == {"seccion"} and (
                isinstance(args["seccion"], str) and args["seccion"] in SECCIONES):
            result = buscar_politica(args["seccion"])
            status = "ejecutada"
        elif name == "crear_borrador_simulado" and set(args) == {"id", "contenido"} and (
                args["id"] == case["id"] and isinstance(args["contenido"], str) and
                0 < len(args["contenido"]) <= 500):
            if allow_draft:
                drafts.append(args["contenido"])
                result, status = {"borrador": "solo_memoria"}, "ejecutada"
            else:
                result, status = {"error": "aprobacion_requerida"}, "bloqueada"
        else:
            result, status = {"error": "argumentos_invalidos"}, "bloqueada"

        observations.append({"tool": name, "result": result})
        # La traza pública omite contenido del caso, argumentos y texto recuperado.
        trace.append({"paso": step, "tipo": "tool", "nombre": name, "estado": status})

    return {"status": "detenido", "reason": "max_steps", "trace": trace,
            "drafts_in_memory": drafts}


def main() -> None:
    parser = argparse.ArgumentParser(description="Harness didáctico con modelo simulado")
    parser.add_argument("case_id", help="ID de caso, por ejemplo I-01")
    parser.add_argument("--max-steps", type=int, default=4)
    parser.add_argument("--approve-draft", action="store_true",
                        help="Autoriza solo un borrador en memoria; no envía nada")
    args = parser.parse_args()
    result = run_agent(ScriptedSimulator(), load_case(args.case_id),
                       max_steps=args.max_steps, allow_draft=args.approve_draft)
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

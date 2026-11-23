# Guía docente · 16 sesiones de 2 horas

## Preparación de la cohorte

1. Confirmar herramienta y modelo **autorizados**, plan, sistema operativo, permisos de terminal/MCP y política de datos. Registrar fecha y versión; no suponer que una función aparece igual para todos.
2. Clonar o copiar el [laboratorio ficticio](laboratorio/README.md) y comprobar que no contiene datos reales. Disponer de una ruta alternativa con simulador si falla el acceso al proveedor.
3. Preparar una comparación justa: mismo conjunto de casos y mismo criterio de aceptación para regla, flujo fijo y agente. Conservar entradas, salidas, tiempo, costo y errores.
4. No usar conectores de escritura real en clase. La primera tool de escritura es simulada; una integración real requiere revisión de propietario y entorno aislado.

## Cadencia sugerida

| Sesiones | Módulo | Sesión A | Sesión B | Punto de control |
|---|---|---|---|---|
| 1–2 | 00 | Caso, alternativas y primer resultado visible | Arquitectura, baseline y criterios | Ficha aprobada antes de elegir herramienta |
| 3–4 | 01 | Modelo, tokens, incertidumbre y ejemplos | Esquema, dataset, validación | 8 casos con errores anotados |
| 5–6 | 02 | Contexto, procedencia, instrucciones | Skill y entrada hostil | Regla de negocio no alterada por documento |
| 7–8 | 03 | API/CLI/MCP y contrato de tools | Bucle acotado, permisos, simulación | Ninguna escritura sin aprobación |
| 9–10 | 04 | Workflow, agente y subagentes | Estado, handoff, loops y stop | Decisión de arquitectura con evidencia |
| 11–12 | 05 | Búsqueda, RAG y citas | Permisos, vigencia y memoria | Respuesta con cita o abstención |
| 13–14 | 06 | Dataset, evals y regresiones | Injection, threat model, revisión QA | Gates de calidad y seguridad |
| 15–16 | 07 | Integración, logs, costo, runbook | Demo, defensa y retro | Rúbrica y decisión continuar/retrabajar |

**Distribución por sesión:** 15 min de recapitulación y pregunta guía, 25 min de concepto con demo, 60 min de laboratorio, 15 min de revisión por parejas y 5 min de evidencia/estado. Ajustar según experiencia sin eliminar la revisión del entregable.

## Método de enseñanza

- Mostrar un resultado pequeño en la primera sesión. Después abrir la caja del sistema: entrada → contexto → modelo → decisión → herramienta → observación → verificador → persona.
- Mantener un **caso transversal**. Cada módulo añade una capa; si se cambia de ejemplo en cada clase, se pierde la relación entre arquitectura y evidencia.
- Para cada herramienta responder: ¿qué problema resuelve?, ¿quién le da permiso?, ¿qué dato ve?, ¿cómo falla?, ¿cómo se prueba?, ¿cómo se detiene?
- Pedir predicción antes de ejecutar: salida esperada, fallo posible y evidencia que distinguirá ambos. Documentar también resultados negativos.
- Un participante que no dispone de API aprobada puede demostrar contratos y control con un simulador, pero el informe debe etiquetar la ejecución como simulada.

## Fallos que el docente debe provocar

1. Salida JSON malformada o semánticamente incorrecta: el validador la rechaza y pide revisión.
2. Documento que ordena ignorar instrucciones: el agente lo trata como dato, no como autoridad.
3. Tool de escritura solicitada sin autorización: el harness la bloquea y registra el evento.
4. Búsqueda que devuelve dos políticas contradictorias: se usa vigencia/procedencia o se abstiene.
5. Test que pasa tras debilitar una aserción: se rechaza el cambio y se clasifica la causa raíz.
6. Bucle que no converge: se detiene por pasos, tiempo o costo y entrega un reporte de fallo.

## Cierre de cada módulo

El equipo entrega artefacto, comando o secuencia de reproducción, resultados de casos normales y adversariales, decisiones pendientes y límite conocido. El docente marca **aprobado**, **requiere corrección** o **no evaluado**; no infiere un resultado exitoso por una demo fluida.

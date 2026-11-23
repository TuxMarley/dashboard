# Rúbrica del proyecto integrador

**Producto:** un agente o solución con IA que triage incidencias ficticias del [laboratorio](laboratorio/README.md), o un caso equivalente autorizado. Debe poder reproducirse desde una copia limpia y quedar bajo supervisión humana. La nota es orientativa; los gates de seguridad prevalecen sobre cualquier suma.

| Criterio | Puntos | Evidencia mínima |
|---|---:|---|
| Problema, baseline y alcance | 10 | Usuario, alternativa sin IA, criterio de éxito y condición de abandono |
| Arquitectura y contratos | 15 | Diagrama de modelo/harness/tools/estado/verificador, esquema de entrada/salida y decisión de integración |
| Implementación acotada | 20 | Flujo ejecutable, tool de lectura, escritura simulada o aprobada, límite de pasos, errores y trazas |
| Contexto y conocimiento | 10 | Procedencia, vigencia, citas y control de acceso; abstención cuando falte sustento |
| Evaluación | 20 | Dataset fijo con casos normales, límite y adversariales; comparación con baseline y análisis de fallos |
| Seguridad y privacidad | 15 | Threat model, mínimo privilegio, protección de secretos, aprobación y prueba de prompt injection |
| Operación y comunicación | 10 | README de reproducción, costo/latencia observados, runbook, rollback y demo honesta |
| **Total** | **100** | |

## Gates obligatorios

El trabajo **no aprueba** si ocurre cualquiera de estos casos:

- expone datos reales, credenciales o documentos no autorizados;
- ejecuta una acción externa o destructiva sin aprobación y control técnico;
- cambia un test o criterio para ocultar un defecto;
- no permite reproducir ni inspeccionar el resultado;
- no tiene condición de parada o presupuesto para el agente;
- presenta como medición real una cifra simulada o sin línea base.

## Escala de evaluación

- **90–100:** funciona en los casos acordados, fallos bien explicados y controles comprobados.
- **75–89:** cumple lo esencial; quedan mejoras menores documentadas.
- **60–74:** prototipo parcial; requiere corregir evaluación, arquitectura o reproducción.
- **<60:** aprendizaje insuficiente para afirmar que se implementó una solución verificable.

Cada criterio se puntúa con evidencia, no con intención. Una demo exitosa de un solo caso no sustituye el dataset ni la revisión de trayectorias.

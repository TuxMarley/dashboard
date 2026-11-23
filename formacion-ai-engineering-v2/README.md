# AI Engineering aplicado · edición 2.0

**Duración base:** 32 horas, en 8 módulos de 4 horas (16 sesiones de 2 horas).

**Público:** profesionales de QA, automatización y desarrollo con manejo básico de Git, terminal, HTTP y JSON.

**Resultado verificable:** un agente o flujo con IA para un problema acotado, con herramientas de mínimo privilegio, pruebas, evaluación, trazas y un punto de revisión humana.

Esta edición es una **ruta compacta del piloto de 32 horas**. No afirma sustituir un programa avanzado de mayor duración ni certificar operación autónoma en producción. Usa un caso sintético que crece módulo a módulo. Las demostraciones pueden hacerse con un agente de código autorizado (Claude Code, GitHub Copilot, Codex u otro) y, desde el módulo 3, con una API/SDK aprobada. Las capacidades y permisos se comprueban en el entorno de cada cohorte; ninguna cuenta o licencia concreta es requisito universal.

## Decisión de diseño

El curso de referencia [«Claude Code: de tu primera web a un equipo de agentes»](https://bencorde.com/cursos/claude-code/) tiene 17 módulos numerados 00–16 y un bonus: empieza con un proyecto visible, después introduce contexto, permisos, skills, MCP y subagentes, y termina en automatización y proyecto final. Adoptamos **esa progresión de aprendizaje**, no sus proyectos, nombres propios ni instrucciones de producto. Aquí se necesitan más horas por bloque para explicar la arquitectura y comprobar resultados. Ocho módulos evitan convertir los 32 horas en 17 lecciones superficiales.

Se adelantan desde el inicio los criterios de éxito, la evaluación y los límites de permisos. La seguridad se practica en todos los módulos, con una sesión específica antes de aceptar una integración real. La versión 2.0 evita cifras de productividad sin línea base y separa conceptos estables de comandos e interfaces sujetos a cambios.

## Lo que podrá hacer una persona al terminar

1. Elegir con criterio entre regla, búsqueda, flujo determinista, asistente y agente.
2. Explicar la relación entre modelo, contexto, harness, estado, herramientas, políticas, verificador y supervisión humana.
3. Construir un agente mínimo con un bucle acotado y una herramienta de lectura; simular y controlar una acción de escritura.
4. Elegir API/SDK, CLI o MCP según el sistema, el contrato y el riesgo.
5. Diseñar instrucciones, skills y recuperación de información sin confundir una carpeta de archivos con RAG.
6. Evaluar resultados y trayectorias con casos normales, límites y entradas adversariales.
7. Entregar un prototipo reproducible con trazas, presupuesto, riesgos, criterio de parada y guía de operación.

## Recorrido de 32 horas

| Módulo | Horas | Pregunta central | Evidencia que produce |
|---|---:|---|---|
| [00 · El problema y el sistema](modulos/M00-problema-y-sistema.md) | 4 | ¿Cuándo conviene IA y qué compone un agente? | Ficha de caso, baseline y mapa de arquitectura |
| [01 · Modelos y contratos](modulos/M01-modelos-y-contratos.md) | 4 | ¿Cómo convertir una salida probabilística en un contrato comprobable? | Esquema, dataset inicial y comparación con baseline |
| [02 · Contexto e instrucciones](modulos/M02-contexto-e-instrucciones.md) | 4 | ¿Qué debe saber el agente y de dónde viene? | Instrucciones y skill versionadas, prueba de contexto hostil |
| [03 · Herramientas e integración](modulos/M03-herramientas-e-integracion.md) | 4 | ¿Cómo actúa con herramientas sin permisos excesivos? | Agente mínimo con tool de lectura y escritura simulada |
| [04 · Arquitectura y orquestación](modulos/M04-arquitectura-y-orquestacion.md) | 4 | ¿Qué grado de autonomía necesita el caso? | Comparación workflow/agente y contrato de bucle |
| [05 · Recuperación y memoria](modulos/M05-recuperacion-y-memoria.md) | 4 | ¿Cómo fundamenta respuestas en conocimiento vigente? | Recuperador pequeño con citas, permisos y evaluación |
| [06 · Calidad y seguridad](modulos/M06-calidad-y-seguridad.md) | 4 | ¿Cómo detectar fallos, abuso y regresiones? | Suite de evaluación, threat model y revisión de trazas |
| [07 · Proyecto y operación](modulos/M07-proyecto-y-operacion.md) | 4 | ¿Cómo entregar un sistema útil y mantenible? | Demo, informe de evaluación, runbook y decisión de continuidad |
| **Total** | **32** | | |

Cada módulo contiene objetivos, dos sesiones de dos horas, explicación, práctica, artefacto y criterios de salida. La [guía docente](GUIA_DOCENTE.md) coordina las sesiones; el [laboratorio](laboratorio/README.md) aporta datos ficticios; la [rúbrica](RUBRICA.md) sirve para evaluar el proyecto. La [auditoría](AUDITORIA.md) documenta qué se conserva, qué se corrige y qué no está demostrado. Las [fuentes](FUENTES.md) se revisaron el **23 de noviembre de 2026**.

## Ajuste de duración

- **32 horas, ruta base:** un agente supervisado y evaluado sobre datos sintéticos o autorizados.
- **40 horas, extensión opcional:** 4 horas de API/SDK y tool calling real; 4 horas de despliegue controlado, observabilidad y evaluación ampliada. Añadirlas solo cuando existan acceso, datos y entorno aprobados.
- **24 horas, ruta de familiarización:** omitir módulos 05 y 07 como implementación; el resultado pasa a ser un diseño y una demostración guiada, no la competencia de construir y operar un agente.

## Condiciones de uso

Los ejemplos son ficticios. No se deben copiar credenciales, datos de clientes ni documentos internos al laboratorio, a servicios de IA o a un repositorio público. Para casos reales se exige autorización del propietario de datos, revisión de permisos y una política de uso del proveedor. Si una persona no tiene acceso a un modelo aprobado, puede diseñar y probar el harness con un simulador de decisiones, pero **no se declara implementado un agente con IA** hasta conectarlo y evaluarlo con un modelo autorizado.

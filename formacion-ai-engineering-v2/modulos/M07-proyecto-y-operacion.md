# M07 · Proyecto integrador y operación responsable (4 h)

**Pregunta guía:** ¿cómo entregar una solución que otra persona pueda revisar, reproducir y detener?

**Salida:** prototipo, evaluación, demo y decisión de continuidad.

## Sesión A · 2 h: integración y preparación

Integrar los artefactos de M00–M06. El proyecto puede ser un triage de incidencias sintéticas, una ayuda de QA o un caso equivalente con autorización. Debe incorporar: contrato de entrada/salida, modelo aprobado, tool de lectura, acción simulada o controlada, contexto con procedencia, límite de pasos, aprobación para impacto, trazas y suite de evaluación. Un **workflow fijo con un paso de IA** puede ser la arquitectura elegida si supera al agente en el criterio acordado. Si el caso se resuelve mejor sin IA, documentar esa decisión y construir aparte un prototipo pequeño con IA para acreditar la competencia técnica; no forzar autonomía en el caso real.

Preparar un runbook de una página:

- cómo iniciar y detener el sistema;
- dónde están versiones de modelo, instrucciones, tools, política y dataset;
- qué hacer ante salida inválida, límite de gasto, documento obsoleto o tool caída;
- cómo volver a una versión previa y a operación manual;
- a quién escalar si una acción necesita aprobación.

Registrar la latencia y costo observados en el laboratorio junto con condiciones de medición. No convertir esa cifra en promesa de ahorro. En producción se necesitarían observabilidad continua, secretos gestionados, pruebas en entorno aislado, monitoreo, respuesta a incidentes y autorización organizacional. [OpenAI: prácticas de producción](https://developers.openai.com/api/docs/guides/production-best-practices), [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework).

## Sesión B · 2 h: demo y defensa

La demostración reproduce desde una copia limpia:

1. un caso normal con cita y clasificación correcta;
2. un caso incompleto que acaba en abstención o revisión;
3. un caso adversarial que no altera permisos ni prioridad;
4. una tool bloqueada y un loop que se detiene;
5. una regresión detectada por la suite.

La persona explica arquitectura, alternativa sin IA, por qué eligió sus tools, límites de contexto, resultados de evaluación, costo y riesgo residual. Otra persona revisa la traza y puede repetir al menos un caso sin ayuda del autor. Aplicar la [rúbrica](../RUBRICA.md) y decidir: **continuar con piloto controlado**, **retrabajar** o **retirar**. No hay pase directo a producción por aprobar la formación.

### Entrega final

Repositorio o paquete sin datos reales con README, instrucciones de ejecución, diagrama, configuración de permisos, ejemplos de entrada/salida, tests/evals, reporte de resultados y runbook. Documentar las partes simuladas. Registrar la fecha de revisión de fuentes y productos usados.

### Criterio de salida

La demo es reproducible, la traza no contiene secretos, los gates de seguridad pasan y las limitaciones son explícitas. Si el acceso al modelo falló, el proyecto puede demostrar arquitectura con simulador, pero queda **pendiente la evaluación con IA real**.

**Lecturas primarias:** [producción](https://developers.openai.com/api/docs/guides/production-best-practices), [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), [evaluación de agentes](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators).

# M06 · Evaluación, QA y seguridad (4 h)

**Pregunta guía:** ¿qué evidencia indica que la solución funciona y dónde puede fallar peligrosamente?

**Salida:** suite de evaluación, threat model y reporte de regresión.

## Sesión A · 2 h: evaluar resultado y proceso

La calidad de una respuesta no se decide por lo convincente de la demo. Definir antes de ajustar: dataset fijo, oráculo, casos adversariales, umbrales y costo aceptable. Medir por separado **resultado** (categoría, prioridad, justificación, cita) y **trayectoria** (tools elegidas, argumentos, permisos, reintentos, parada). Un evaluador automático basado en otro modelo puede ayudar, pero requiere calibración humana y no reemplaza reglas deterministas donde existen. [Microsoft: agent evaluators](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators).

Para la tarea de QA opcional, un agente puede ayudar a explorar UI y proponer tests. Un locator por rol/nombre accesible suele ser preferible a uno atado a estructura, pero puede romperse; nunca es «100 % resiliente». El healer de Playwright puede aprobar **o saltar** un test, por lo que se revisan aserciones, pruebas omitidas y causa raíz antes de aceptar un cambio. Un test verde no demuestra por sí solo el requisito funcional. [Locators](https://playwright.dev/docs/locators), [test agents](https://playwright.dev/docs/test-agents).

### Ejercicio de evaluación

Versionar el conjunto de ocho casos y añadir tres variaciones: descripción incompleta, política contradictoria e instrucción maliciosa. Ejecutar baseline y versión nueva con igual entorno. Reportar, sin esconder fallos: validez de esquema, acierto de categoría/prioridad, groundedness de citas, intentos de tool bloqueados, pasos, latencia y costo observable. Si la muestra es pequeña, mostrar conteos además de porcentajes.

## Sesión B · 2 h: threat model y fallos

Mapear activos (casos, política, credenciales), entradas (usuario, documentos, tools), límites de confianza y acciones. Probar prompt injection indirecta: I-07 contiene una orden dentro de una descripción. Comprobar que no se ejecuta ni cambia el criterio. Probar una tool de escritura solicitada sin permiso y una fuente obsoleta. Los controles deben existir **fuera** del prompt: validación, scopes, sandbox, aprobación, logs, límite de gasto y parada. [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/), [excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).

### Registro de hallazgos

Para cada fallo: caso, severidad, causa probable (modelo/contexto/tool/datos/verificador), evidencia, corrección, prueba de regresión y riesgo residual. No resolver un defecto funcional eliminando una aserción o cambiando la referencia para que «pase». Las salidas de código generado también requieren revisión humana y tests. [GitHub: revisión de código generado](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code).

### Criterio de salida

La suite puede detectar una regresión introducida a propósito y bloquear una acción no autorizada. Hay una clasificación de fallos y al menos un caso que requiere revisión humana. Se conoce el límite de la muestra; no se anuncian mejoras porcentuales sin baseline y periodo comparables.

**Lecturas primarias:** [agent evaluators](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators), [OWASP](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), [Playwright](https://playwright.dev/docs/best-practices).

# M01 · Modelos y contratos comprobables (4 h)

**Pregunta guía:** ¿cómo usar un modelo probabilístico sin convertir su salida en una verdad automática?

**Salida:** contrato JSON, conjunto de evaluación inicial y reporte de errores.

## Sesión A · 2 h: lo suficiente del modelo para diseñar bien

Un token es una unidad de procesamiento del modelo, no una palabra fija. El límite de contexto define cuánta información puede entrar en una interacción; el contexto también puede perder relevancia por longitud, contradicciones o compresión. Los parámetros de generación, como temperatura, varían entre modelos y proveedores. Un valor bajo puede reducir variación en ciertos casos, pero **no garantiza respuestas idénticas ni correctas**. El modelo puede inventar detalles cuando faltan datos, y puede interpretar como instrucción texto que solo debía tratar como evidencia. [Contexto de Claude Code](https://code.claude.com/docs/en/context-window).

Se enseña la diferencia entre **formato válido** y **afirmación verdadera**. Un JSON puede respetar el esquema y, aun así, atribuir una prioridad equivocada. El programa debe validar estructura; los casos de prueba y la política vigente evalúan la decisión.

### Ejemplo de salida propuesta

```json
{
  "id": "I-01",
  "categoria": "interfaz",
  "prioridad": "P1",
  "fundamento": "El flujo crítico de reserva está bloqueado en producción para todos los usuarios descritos.",
  "fuentes_politica": ["POL-1", "POL-2"],
  "version_politica": 2,
  "requiere_revision": true
}
```

Este bloque muestra un **ejemplo de objeto**, no un esquema JSON formal. Los valores permitidos de `categoria` son `interfaz`, `api`, `datos`, `acceso` y `desconocido`; los de `prioridad`, `P1`, `P2`, `P3` y `por_confirmar`. El grupo define un JSON Schema real: campos requeridos, enumeraciones, longitud máxima de `fundamento` y prohibición de campos extra. Añade una regla de consistencia en código: `desconocido` implica `por_confirmar` y revisión. No incluir razonamiento interno del modelo; pedir justificación breve y auditable.

## Sesión B · 2 h: medir antes de optimizar

Separar [entradas](../laboratorio/casos.jsonl) de [respuestas de referencia](../laboratorio/oraculo.jsonl). Ejecutar el mismo conjunto con la regla base y el modelo. Registrar por caso: salida bruta, validez de esquema, clasificación, prioridad, cita, tiempo, costo observable y fallo. Una salida inválida se rechaza o se reintenta dentro de un límite; no se rellena silenciosamente con una prioridad inventada.

### Ejercicio

1. Implementar o describir el validador de entrada y salida.
2. Clasificar los ocho casos sin entregar el oráculo al modelo.
3. Calcular tasa de esquema válido y coincidencia de categoría/prioridad. Marcar los casos ambiguos para revisión humana.
4. Cambiar **una** variable (instrucción, contexto o modelo) y repetir todo el dataset, no solo un ejemplo exitoso.
5. Escribir dos errores observados y una hipótesis de mejora para cada uno.

### Criterio de salida

El reporte conserva la salida real y distingue fallo de formato, fallo de decisión y falta de evidencia. Explica el tamaño de la muestra; no extrapola porcentajes del laboratorio a productividad o calidad de producción. El grupo puede mostrar un caso donde el esquema pasa y la respuesta está equivocada.

**Lecturas primarias:** [function calling y contratos de herramientas](https://developers.openai.com/api/docs/guides/function-calling), [evaluación de agentes](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators).

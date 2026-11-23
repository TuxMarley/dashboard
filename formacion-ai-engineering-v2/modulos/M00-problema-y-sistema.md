# M00 · El problema y el sistema (4 h)

**Pregunta guía:** ¿cuándo conviene IA y qué hace que una solución sea un agente?

**Salida:** ficha de caso, primer resultado visible, baseline y mapa de arquitectura.

## Sesión A · 2 h: elegir antes de construir

Un LLM genera o selecciona respuestas a partir de contexto; por sí solo no sabe si la respuesta es correcta ni ejecuta una acción externa. Un **workflow** fija de antemano la secuencia principal. Un **agente** permite que el modelo elija pasos o herramientas durante la ejecución dentro de límites definidos por un programa, llamado aquí *harness*. La autonomía es una decisión de diseño, no un objetivo en sí mismo. Un formulario con reglas puede resolver mejor un problema estable y de bajo cambio. [Patrones de Anthropic](https://www.anthropic.com/engineering/building-effective-agents).

Para el caso transversal, usaremos incidencias ficticias de una aplicación de reservas. El resultado deseado no es «usar un agente»: es clasificar una incidencia, justificar la clasificación con la política vigente y preparar un borrador de respuesta que una persona pueda aprobar. El baseline es una regla simple por palabras clave y una revisión manual de una muestra fija. Se registra dónde falla cada alternativa.

**Primer resultado en 45 minutos:** abrir tres casos del [laboratorio](../laboratorio/README.md), redactar una instrucción con objetivo, formato y prohibición de escritura, y pedir una clasificación a un modelo autorizado. El docente compara contra el oráculo **después de conservar la primera salida**; el oráculo nunca se pasa al modelo. Si no hay modelo aprobado, hacer la secuencia con decisiones simuladas y marcarla como tal. Se muestra el resultado y un error; no se presenta como sistema terminado.

## Sesión B · 2 h: abrir la caja del agente

```text
Usuario/caso → entrada validada → contexto seleccionado → modelo
                                                  ↓ propuesta de acción
Persona ← resultado + evidencia ← verificador ← harness → tool autorizada
                                      ↑              ↓
                                política y logs ← estado/observación
```

- **Modelo:** propone texto, estructura o una acción; no recibe autorización implícita para ejecutarla.
- **Contexto:** instrucciones, caso, documentos recuperados y resultados de tools; cada pieza tiene procedencia y nivel de confianza.
- **Harness:** programa que valida entradas, expone tools, aplica permisos, limita pasos, mantiene estado y registra observaciones.
- **Tool:** operación con contrato concreto, por ejemplo `buscar_politica` o `crear_borrador_simulado`.
- **Verificador:** comprueba esquema, reglas, tests o evaluación humana. Una respuesta plausible no es evidencia suficiente.
- **Persona:** aprueba acciones de impacto y decide ante ambigüedad o riesgo residual.

### Ejercicio

Para tres alternativas —regla fija, workflow y agente— anotar: entradas, decisiones, datos vistos, acciones permitidas, error esperado, costo y prueba de éxito. Elegir una con una tabla de decisión; la solución más sencilla que supere el criterio gana. Redactar una ficha de una página con: usuario, problema, resultado, alternativa sin IA, baseline, datos necesarios, permisos, métrica, riesgos y condición de abandono.

### Criterio de salida

La ficha nombra una tarea concreta y un baseline reproducible. El mapa identifica modelo, harness, tools, verificador y aprobación. La primera demo declara qué casos pasó y cuáles falló. Nadie afirma que «agente» signifique acceso pleno, memoria permanente o internet automático.

**Lectura primaria:** [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents).

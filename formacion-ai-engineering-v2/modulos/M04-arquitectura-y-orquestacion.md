# M04 · Arquitectura, estado y orquestación (4 h)

**Pregunta guía:** ¿cuánta autonomía y coordinación justifica el problema?

**Salida:** decisión de arquitectura, diagrama y contrato de un loop acotado.

## Sesión A · 2 h: comparar tres diseños

Resolver la clasificación de incidencias de tres maneras con el **mismo dataset**:

| Diseño | Quién decide el siguiente paso | Ventaja | Riesgo principal |
|---|---|---|---|
| Regla/workflow fijo | Código | Fácil de probar y auditar | Menor flexibilidad ante casos nuevos |
| Agente único con tools | Modelo dentro del harness | Puede elegir búsqueda y herramienta | Variación, costo y uso indebido de tools |
| Varios agentes especializados | Orquestador y agentes | Paralelismo o aislamiento de subtareas | Handoffs, resultados contradictorios y mayor consumo |

Un sistema multiagente no es automáticamente más capaz. Para el laboratorio, un agente único debería ser el baseline. Se añade un agente revisor únicamente si una prueba demuestra que detecta fallos que el verificador o una revisión simple no detectan a costo aceptable. Los subagentes pueden tener contexto y herramientas distintos y consumen recursos adicionales. [Anthropic: patrones](https://www.anthropic.com/engineering/building-effective-agents), [Claude Code: subagentes](https://code.claude.com/docs/en/sub-agents).

### Diagrama de decisión

```text
Caso recibido
  ├─ ¿Regla fiable y suficiente? → workflow fijo
  └─ ¿Hace falta elegir pasos con evidencia? → agente único
       └─ ¿Subtareas independientes mejoran un criterio medido? → delegación acotada
```

Justificar cada flecha con resultados, no con preferencia por una herramienta.

## Sesión B · 2 h: estado, loops y handoff

Una secuencia de llamadas al modelo necesita **estado mínimo**: caso, política consultada, decisiones, acciones ya ejecutadas, presupuesto restante y resultado del verificador. La memoria persistente solo se añade si el caso la requiere y existe política de retención. Un loop de reparación o investigación debe declarar: objetivo, observación, herramienta, verificador, máximo de pasos/tiempo/costo, condición de éxito, condición de abandono y persona que recibe el escalamiento.

Ejemplo de contrato: «Para I-06, consultar como máximo dos fuentes; si falta ambiente o reproducción, clasificar `desconocido`, crear un borrador de pregunta y detenerse. Nunca inventar el ambiente». Una tarea programada es otro mecanismo: su disponibilidad y permanencia dependen del producto; no se enseña como capacidad inherente del agente. [Claude Code: tareas programadas](https://code.claude.com/docs/en/scheduled-tasks).

### Ejercicio

Diseñar un router para `interfaz`, `api`, `datos` y `acceso`. Comparar la variante con reglas, agente único y dos agentes. Ejecutar al menos un caso que provoca handoff y otro donde los resultados discrepan. Registrar costos y errores. El grupo debe poder elegir **no** desplegar la variante multiagente.

### Criterio de salida

Hay un diagrama de estado y un contrato de loop verificable. Los handoffs especifican formato, propietario y manejo de contradicciones. El diseño elegido supera o iguala el baseline en un criterio declarado; si no, se conserva la solución más simple.

**Lecturas primarias:** [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), [subagents](https://code.claude.com/docs/en/sub-agents).

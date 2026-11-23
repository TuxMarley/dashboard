# Laboratorio transversal · triage de incidencias ficticias

Una aplicación imaginaria de reservas recibe incidencias. El equipo debe clasificar la categoría y prioridad, explicar la decisión con una sección de política vigente y preparar, solo si procede, un borrador de respuesta **sin enviar nada**. No hay nombres de clientes, usuarios reales ni sistemas externos.

## Archivos

| Archivo | Uso |
|---|---|
| [casos.jsonl](casos.jsonl) | Entradas sintéticas; cada línea es un objeto JSON independiente |
| [oraculo.jsonl](oraculo.jsonl) | Referencia para el docente/evaluador; no se pasa al modelo |
| [politica-vigente.md](politica-vigente.md) | Fuente aprobada para categorías, prioridades y abstención |
| [politica-obsoleta.md](politica-obsoleta.md) | Ejemplo de fuente caducada que el recuperador debe excluir |
| [nota-restringida.md](nota-restringida.md) | Documento ficticio con acceso `docente` para probar filtrado de permisos |
| [starter.py](starter.py) | Harness ejecutable con modelo simulado y tools de laboratorio |
| [test_starter.py](test_starter.py) | Pruebas del harness y de los límites |
| [plantilla-entrega.md](plantilla-entrega.md) | Informe final y decisiones de arquitectura |

## Secuencia del proyecto

1. **M00:** definir problema, baseline manual y alternativa de reglas. Obtener un primer resultado visible con tres casos.
2. **M01:** redactar esquema de salida; ejecutar los ocho casos; separar salida de modelo y referencia.
3. **M02:** versionar instrucciones y skill; probar la instrucción maliciosa de I-07.
4. **M03:** construir un loop con tool de búsqueda y otra de borrador simulado; probar bloqueo de permisos.
5. **M04:** comparar workflow, agente único y posible delegación con el mismo dataset.
6. **M05:** recuperar secciones pertinentes, citar versión y abstenerse ante falta de evidencia.
7. **M06:** añadir casos adversariales y evaluar salida, trayectorias, seguridad y regresiones.
8. **M07:** integrar, documentar, reproducir y defender la decisión de continuidad.

## Reglas del laboratorio

- Mantener `oraculo.jsonl` fuera del contexto del modelo. El docente puede entregarlo después de la primera medición. El oráculo contiene **etiquetas y secciones de referencia**, no una justificación completa: el fundamento se revisa contra la política y el caso.
- No conectar tools de escritura real ni credenciales de trabajo. La acción `crear_borrador_simulado` no debe enviar correo ni abrir tickets.
- Registrar si una ejecución usa modelo real autorizado o simulador. Son evidencias diferentes.
- Toda salida debe indicar ID de caso, categoría, prioridad, fundamento, sección/version de política y si requiere revisión.
- Un error de política, una clasificación incierta o una falta de datos da lugar a revisión o abstención. No completar datos ausentes por intuición.
- Cambiar una sola variable por comparación y repetir el dataset completo.

## Inicio reproducible del M03

Desde la raíz del repositorio:

```bash
python formacion-ai-engineering-v2/laboratorio/starter.py I-01
python formacion-ai-engineering-v2/laboratorio/starter.py I-01 --max-steps 2
python formacion-ai-engineering-v2/laboratorio/starter.py I-01 --approve-draft
python -m unittest discover -s formacion-ai-engineering-v2/laboratorio -p "test_*.py"
```

`starter.py` usa `ScriptedSimulator`: propone una lectura, intenta un borrador y termina en abstención. **No es IA** ni clasifica correctamente; sirve para observar el harness, los permisos y la parada sin credenciales. El borrador aprobado vive solo en memoria. Para conectarlo a un modelo autorizado, implementar `ModelAdapter.propose(case, observations, tools)`, traducir la respuesta del proveedor al formato `tool`/`final` y mantener toda validación/ejecución dentro de `run_agent`. Pasar al modelo solo el caso y el contexto permitido; nunca `oraculo.jsonl`. Repetir los tests y agregar casos de salida inválida, tool desconocida, timeout, costo y prompt injection. Registrar proveedor, modelo y versión usados en la cohorte.

## Condición de éxito del prototipo

El sistema respeta el esquema, procesa los ocho casos sin efectos externos, bloquea escrituras no autorizadas, ignora la orden incrustada en I-07, no se deja llevar por el texto «P1» de I-08, se abstiene en I-06 y cita la política vigente. Además entrega un reporte de errores y limitaciones; una muestra de ocho casos no acredita rendimiento de producción.

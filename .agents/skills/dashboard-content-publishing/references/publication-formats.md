# Formatos de publicación por sección

Lee solo el bloque de la sección que vas a modificar.

## Datos mínimos universales

Solicita o confirma:

| Campo | Cuándo es obligatorio |
|---|---|
| Sección destino | Siempre. |
| Título | Siempre. |
| Resumen factual | Siempre. |
| Estado | Cuando la tarjeta representa avance o disponibilidad. |
| Fecha o periodo | Si el usuario quiere situar temporalmente el hito. |
| Resultado o siguiente paso | Si existe y el usuario lo entregó. |
| Captura | Solo si aporta evidencia útil y puede ser pública. |
| Caption | Si existe captura; puede derivarse de lo visible sin inventar contexto. |

Si la publicación menciona cifras, personas, clientes, sistemas o conclusiones de desempeño, solicita confirmación explícita de que esos datos pueden ser públicos.

## AvanGrid

**Destino:** src/pages/AvanGrid.jsx, src/components/WeeklyProgress.jsx y, para tareas diarias, public/task_history.json.

### Publicación editorial

Usa una tarjeta de hito o bloque de resumen cuando el contenido sea una iniciativa, avance, resultado o evidencia curada.

Orden:

1. Kicker de contexto.
2. Título orientado al resultado.
3. Resumen factual.
4. KPIs o puntos concretos si fueron proporcionados.
5. Evidencia visual opcional.

### Tareas diarias

No agregues tareas manualmente a JSX. Usa el contrato actual:

~~~json
{
  "date": "YYYY-MM-DD",
  "sheet": "Área o módulo",
  "key": "Identificador público aprobado",
  "name": "Descripción factual",
  "assigned": "Responsable autorizado",
  "status": "Estado opcional"
}
~~~

El historial usa task_history.json y daily_tasks.json es el fallback de la última actualización. Cuando la fuente sea una hoja, ejecuta update_dashboard_tasks.py con una ruta local autorizada.

## Studio QA

**Destino:** src/pages/StudioQA.jsx.

Cada formación o iniciativa usa una tarjeta con:

1. Título de grupo y tag de estado.
2. Ícono relacionado.
3. Título del programa, sesión o actividad.
4. Fecha/periodo y otros metadatos solo si el usuario los entregó.
5. Descripción de 2 a 4 frases.
6. Dos o tres resultados, temas o capacidades.
7. Una o dos evidencias visuales.

Para una captura doble, usa una grilla de evidencias; para una sola, usa figure y figcaption. No añadas una lista de asistentes o instructor si no fue entregada y autorizada.

## Asesorías QA

**Destino:** src/pages/Innovacion.jsx.

Cada asesoría o iniciativa debe indicar:

1. Categoría técnica o tipo de asesoría.
2. Título del trabajo.
3. Estado o tag.
4. Fecha y participantes solo si son públicos.
5. Problema abordado, alcance y resultado entregado.
6. Próximo paso o riesgo únicamente si el usuario lo especificó.
7. Evidencia opcional.

No presentes una propuesta, conversación o evaluación como implementación completada. Distingue claramente "Pendiente", "En análisis" y "Completada".

## Inteligencia Artificial

**Destino:** src/pages/InteligenciaArtificial.jsx.

Cada hito debe tener:

1. Tipo de hito: herramienta, evento, automatización, comunidad o sesión.
2. Título orientado a la entrega.
3. Descripción factual de qué hace o qué ocurrió.
4. Fecha o estado cuando sea relevante.
5. Dos puntos de funcionamiento, alcance o resultado verificados.
6. Evidencia opcional.

No declares que una herramienta está en producción, es autónoma, tiene una frecuencia fija, consulta fuentes concretas o genera un impacto medido sin datos proporcionados por el usuario.

## MetLife

**Destino:** src/pages/MetLife.jsx y public/metlife_task_history.json.

### Registros diarios

La vista es una bitácora, no una tarjeta editorial. Cada entrada debe respetar:

~~~json
{
  "id": "YYYY-MM-DD-secuencia",
  "date": "YYYY-MM-DD",
  "type": "Tipo de actividad",
  "title": "Actividad factual",
  "hours": 0
}
~~~

- hours es un número finito mayor o igual que cero.
- La fecha se toma de la clave del día en el historial.
- Registros con fecha, tarea u horas incompletas no se publican.
- Usa update_metlife_tasks.py cuando el origen sea el libro autorizado y local.

### Comentario o análisis

No añadas análisis interpretativo a cada jornada. El resumen de días, tareas, horas y foco principal se calcula automáticamente. Si el usuario pide una conclusión, publícala solo como bloque editorial separado y etiqueta claramente que es un análisis.

## Mapa de Talento

**Destino:** src/pages/CareerPath.jsx.

Este módulo requiere precaución adicional porque puede contener apreciaciones de desempeño.

Para agregar evidencia:

1. Identifica el hecho verificable, fuente y fecha.
2. Distingue evidencia, inferencia y objetivo.
3. Redacta conclusiones como evaluación o recomendación, no como resolución formal.
4. No publiques evaluación de otras personas.
5. No cambies nivel, categoría, competencias, métricas o conclusión sin instrucción explícita y evidencia aportada.

Estructura recomendada:

- Título de evidencia.
- Descripción factual.
- Estado: Evidencia sólida, Parcial o Por consolidar.
- Fuente resumida, si es apta para publicación.

## Capturas y assets

### Nombre de archivo para nuevos assets

Usa minúsculas, guiones y una fecha cuando ayude a ordenar:

~~~text
<seccion>-<aaaa-mm-dd>-<resumen-corto>.png
~~~

Ejemplos de estructura, no datos reales:

~~~text
studio-qa-2026-08-25-sesion-practica.png
ia-2026-08-25-evidencia-herramienta.png
~~~

Guarda los assets en public/ para referencias con ruta absoluta de Vite, por ejemplo:

~~~jsx
<img src="/studio-qa-2026-08-25-sesion-practica.png" alt="Descripción concreta de lo visible" />
~~~

No cambies ni elimines un asset existente si otra publicación todavía lo referencia. Antes de retirar uno, usa rg para localizar todas sus referencias.

### Checklist de revisión

- [ ] Aporta evidencia útil para la publicación.
- [ ] Se ve nítida a tamaño de tarjeta.
- [ ] No contiene datos sensibles ni no autorizados.
- [ ] Tiene nombre descriptivo y estable.
- [ ] Tiene alt que describe lo visible.
- [ ] Tiene caption contextual, no redundante.
- [ ] Se revisó su presentación en desktop y móvil.

## Respuesta de cierre

Al terminar una publicación, entrega:

~~~text
Sección: <sección>
Publicación: <título>
Contenido publicado: <resumen breve>
Evidencia: <archivo o "sin captura">
Verificación: <comandos y resultado>
Despliegue: <commit y push a origin/main>
~~~

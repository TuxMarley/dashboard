---
name: dashboard-content-publishing
description: Actualiza publicaciones, hitos, tareas y evidencias del Dashboard por sección, con formatos consistentes, revisión de privacidad, verificación y despliegue a GitHub/Netlify. Úsala al añadir o editar contenido visible del dashboard; no para cambios técnicos sin contenido.
---

# Dashboard Content Publishing

Usa esta skill cuando el usuario pida publicar, registrar, actualizar, corregir o retirar contenido visible de AvanGrid, Studio QA, Asesorías QA, Inteligencia Artificial, MetLife o Mapa de Talento.

No la uses para refactors, cambios de infraestructura, dependencias, estilos globales sin contenido o arreglos técnicos sin efecto editorial.

## Antes de editar

1. Lee AGENTS.md y revisa el estado del repositorio.
2. Identifica la sección y abre su componente, los estilos relacionados y la fuente de datos si existe.
3. Lee [los formatos por sección](references/publication-formats.md).
4. Determina si el dato es:
   - Una publicación editorial estática en JSX.
   - Una tarea o jornada que debe ingresar por JSON y su script de exportación.
   - Un cambio de contenido sensible que requiere evidencia o confirmación adicional.

No inventes nombres, fechas, métricas, estados, resultados, participantes, enlaces, análisis ni captions. Si falta un dato material, pide al usuario exactamente ese dato antes de publicar.

## Flujo de publicación

1. Confirma el destino, el formato y los datos mínimos.
2. Si el usuario adjuntó una captura, inspecciónala antes de utilizarla.
3. Revisa la captura con el checklist de privacidad y calidad de la referencia.
4. Añade la imagen solo si es apta para el repositorio público; utiliza un nombre descriptivo y estable dentro de public/.
5. Implementa la publicación con la estructura y orden visual del módulo correspondiente.
6. Asegura un título concreto, un texto factual y una explicación breve de resultado o impacto cuando el usuario lo haya proporcionado.
7. Añade texto alternativo descriptivo y un caption que explique qué evidencia muestra la captura, no solo su nombre de archivo.
8. Si la publicación cambia datos dinámicos, usa el contrato JSON y el exportador correspondiente; no alteres a mano los archivos fuente privados.
9. Ejecuta las verificaciones y revisa desktop y móvil cuando cambie UI o una imagen.
10. Sigue AGENTS.md para revisar el diff, crear un commit atómico y hacer push a origin/main.

## Reglas de evidencia visual

- Una captura debe probar o ilustrar la publicación; no se añade solo como decoración.
- El alt debe describir el contenido visible y su relación con el hito.
- El caption debe aportar contexto útil sin repetir literalmente el alt.
- No usar capturas borrosas, recortadas de forma que oculten el resultado, con texto ilegible o con espacios irrelevantes predominantes.
- No subir imágenes con datos personales, correos, tokens, URLs privadas, nombres de clientes no autorizados, IDs internos, pestañas ajenas o información confidencial.
- Si hay duda sobre si una captura es pública, no la subas: explica el riesgo y solicita una versión sanitizada o autorización explícita.
- No alteres la evidencia de modo que cambie su significado. Se permite un recorte técnico para eliminar bordes vacíos o información no autorizada, siempre que conserve el contexto necesario.
- Mantén la proporción original salvo que el componente requiera object-fit; no fuerces una altura que vuelva ilegible la evidencia.

## Redacción y análisis

- Escribe en español claro, concreto y profesional.
- Empieza por qué se realizó o entregó; continúa con cómo aporta valor solo si está respaldado por el usuario.
- Prefiere un párrafo de 2 a 4 frases y 2 o 3 puntos de resultado.
- Usa un tag/estado consistente: Completada, En curso, Pendiente, Hito reciente o equivalente solicitado por el usuario.
- Separa hechos, interpretación y próximos pasos. Las conclusiones sobre carrera, desempeño o impacto requieren evidencia explícita y no deben presentarse como hechos confirmados.
- No conviertas una publicación puntual en una afirmación global sobre una persona, cliente o producto.

## Verificación y despliegue

- Ejecuta npm run check si modificas JSX, CSS, JSON, utilidades o configuración.
- Si modificas una captura o layout, revisa como mínimo escritorio y móvil, y comprueba que no exista overflow horizontal.
- Si modificas AvanGrid o MetLife, prueba carga, error, vacío y datos válidos cuando corresponda.
- Para una actualización exclusivamente documental, valida enlaces, rutas y codificación UTF-8.
- No hagas push si una verificación falla, si detectas un riesgo de privacidad o si el usuario pidió no desplegar.

Al finalizar, informa: sección actualizada, datos publicados, asset añadido o reemplazado, validaciones ejecutadas, commit y resultado del push.

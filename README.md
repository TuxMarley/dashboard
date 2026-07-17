# Radar de trabajo de Jimmy

Dashboard personal para visualizar avances de automatización QA, formaciones, iniciativas de IA y mapa de talento.

## Desarrollo

Requiere Node.js 22 o superior.

```bash
npm ci
npm run dev
```

Comandos disponibles:

- `npm run lint`: revisa el código con Oxlint.
- `npm run test`: ejecuta pruebas de lógica con el runner nativo de Node.
- `npm run build`: genera la versión de producción en `dist`.
- `npm run check`: ejecuta lint, pruebas y build; es la verificación usada por CI.

## Actualización de tareas diarias

El dashboard conserva cada ejecución en `public/task_history.json` y muestra por defecto la fecha más reciente. `public/daily_tasks.json` se mantiene como una vista compatible de esa última actualización.

Para regenerar las tareas desde el libro de AvanGrid:

```bash
python -m pip install -r requirements.txt
python update_dashboard_tasks.py
```

También se puede ejecutar una fecha o rutas específicas:

```bash
python update_dashboard_tasks.py --date 2026-07-17
python update_dashboard_tasks.py --excel "ruta/al/libro.xlsx" --output "public/daily_tasks.json"
```

Al procesar una fecha que ya existe, se reemplaza solamente el registro de ese día; las fechas anteriores se conservan. En el dashboard se puede seleccionar cualquier día disponible desde el bloque **Tareas finalizadas**.

## Despliegue

Netlify ejecuta `npm run build` y publica `dist`. Las redirecciones configuradas en `netlify.toml` permiten abrir directamente cada ruta de React.

Cada push a `main` también ejecuta lint, pruebas y build mediante GitHub Actions.

## Privacidad

El sitio de Netlify y el repositorio actual son públicos. No subas datos sensibles, credenciales, información de clientes, archivos internos ni evidencias que no puedan compartirse públicamente.

Los documentos internos deben mantenerse fuera del repositorio público. Si alguno ya fue publicado, eliminarlo en un commit nuevo no borra el historial: revisa primero si el repositorio debe pasar a privado y si corresponde limpiar el historial de Git.

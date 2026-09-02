---
version: 1
slug: "src-pages-metlife-jsx"
primary_target: "src/pages/MetLife.jsx"
related_targets: []
---

## Scope and mode

Ruta `/metlife`. Modo Operate dentro del dashboard personal existente.

## Audience and job

Jimmy necesita revisar la actividad de MetLife por día, confirmar el tiempo dedicado y volver a fechas anteriores sin abrir el libro de control; además, necesita explicar de forma segura las prácticas agénticas de pruebas y desarrollo.

## Content and constraints

La bitácora usa la hoja `Registro`: solo publica fecha, tipo de actividad, tarea y horas. El mes más reciente es el período activo y los meses anteriores se conservan como historial expandible. Dos pestañas editoriales describen, sin métricas, capturas, nombres internos ni datos de repositorio, la automatización agéntica de pruebas y el desarrollo agéntico. La vista debe incluir carga, error y ausencia de datos para la bitácora; ser usable con teclado; y reorganizarse para móvil.

## Direction

Bitácora diaria discreta como pestaña inicial: una banda de resumen del período activo, sus fechas compactas y un detalle plano del día seleccionado. Las otras pestañas son guías breves de proceso con una secuencia o capacidades concretas. Los períodos cerrados se consultan en un historial separado. El acento verde identifica MetLife, mientras la estructura y los controles heredan el sistema visual global del dashboard.

## Memorable moment

La jornada más reciente se abre dentro del período activo, mientras las capacidades agénticas se pueden consultar sin contaminar las horas ni las tareas del presente.

## Unresolved decisions

Ninguna para esta iteración.

---
version: 1
slug: "src-pages-metlife-jsx"
primary_target: "src/pages/MetLife.jsx"
related_targets: []
---

## Scope and mode

Ruta `/metlife`. Modo Operate dentro del dashboard personal existente.

## Audience and job

Jimmy necesita revisar la actividad de MetLife por día, confirmar el tiempo dedicado y volver a fechas anteriores sin abrir el libro de control.

## Content and constraints

La fuente es la hoja `Registro`. Solo se publican fecha, tipo de actividad, tarea y horas. El mes más reciente es el período activo: sus métricas, fechas y detalle se muestran primero. Los meses anteriores se conservan como historial expandible. La vista debe incluir carga, error y ausencia de datos; ser usable con teclado; y reorganizarse para móvil.

## Direction

Bitácora diaria discreta: una banda de resumen del período activo, sus fechas compactas y un detalle plano del día seleccionado. Los períodos cerrados se consultan en un historial separado. El acento verde identifica MetLife, mientras la estructura y los controles heredan el sistema visual global del dashboard.

## Memorable moment

La jornada más reciente se abre dentro del período activo, mientras el historial mantiene los meses cerrados disponibles sin contaminar las horas ni las tareas del presente.

## Unresolved decisions

Ninguna para esta iteración.

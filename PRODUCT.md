# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El usuario principal es Jimmy, que consulta su actividad profesional desde un dashboard personal y necesita revisar avances actuales e históricos sin releer documentos de trabajo completos.

## Product Purpose

Centralizar en una sola vista el seguimiento de tareas de QA, automatización, inteligencia artificial, asesorías y proyectos. El producto tiene éxito cuando permite entender rápidamente qué se hizo, cuándo se hizo y cuál fue el esfuerzo asociado.

## Positioning

El dashboard combina evidencias y registros operativos reales de distintas iniciativas profesionales en una vista personal, navegable y orientada al seguimiento diario.

## Operating Context

La información se alimenta desde documentos de trabajo existentes. Para MetLife, la hoja `Registro` del libro `Control_Horas_Proyecto_MetLife.xlsx` contiene una fila por actividad con fecha, tipo, tarea y horas empleadas.

## Capabilities and Constraints

- Aplicación React desplegada como sitio web.
- Navegación por iniciativas mediante rutas independientes.
- La sección MetLife debe mostrar tareas diarias y permitir consultar el historial por fecha.
- Los documentos internos permanecen fuera del repositorio; el dashboard consume únicamente un extracto JSON con los campos necesarios.
- La interfaz está en español y debe funcionar en escritorio y móvil.

## Brand Commitments

Se conserva la identidad del dashboard de NTT DATA: fondo azul profundo, tipografía Noto, navegación lateral y uso contenido de los acentos corporativos.

## Evidence on Hand

- Implementación actual del dashboard en `src/`.
- Libro de control de horas de MetLife proporcionado por el usuario fuera del repositorio.
- Datos confirmados en la hoja `Registro`; no deben inventarse tareas, fechas ni horas.

## Product Principles

- Mostrar primero el estado más reciente y mantener accesible el historial.
- Resumir sin ocultar el detalle que permite auditar cada día.
- Minimizar la exposición de información interna a los campos necesarios.
- Mantener una experiencia discreta, legible y consistente con el resto del dashboard.

## Accessibility & Inclusion

Los controles deben ser utilizables con teclado, conservar foco visible, comunicar selección y estados de carga/error, y reorganizarse de forma legible en pantallas pequeñas.

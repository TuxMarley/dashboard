---
name: arquitectura
description: Plantilla de contexto de arquitectura del proyecto para Claude Code. Define el stack, la estructura de carpetas, el flujo de datos y lo que NO existe — para que Claude no se invente cosas que no están. Rellena una vez al arrancar el proyecto y actualiza solo cuando cambie la estructura real.
---

# Arquitectura

> Para que Claude no se invente la estructura del proyecto.

## En una frase

[Qué es el proyecto y qué hace, sin marketing. Una oración, máximo dos.]

## Stack

- Lenguaje / runtime: [...]
- Framework principal: [...]
- Base de datos: [...]
- ORM / query layer: [...]
- Servicios externos: [...]
- Hosting / deploy target: [...]

## Mapa de carpetas

```
src/[...]      → [qué vive aquí]
src/[...]      → [qué vive aquí]
[...]          → [qué vive aquí]
```

Explica el propósito de cada carpeta de primer nivel, no una lista de archivos.

## Flujo de datos

[De dónde entra una petición, por dónde pasa, dónde acaba. 3-5 líneas máximo. Ejemplos: "El usuario llega a /dashboard → Next.js carga el layout → Server Component consulta la DB directamente → devuelve HTML al cliente. No hay API intermedia."]

## Integraciones activas

| Servicio | Para qué se usa | Credencial en |
|---|---|---|
| [...] | [...] | .env → [...] |

## Lo que NO existe (y no hay que crear)

- [Ej: no hay capa de caché, no usamos ORM, no hay API REST propia]
- [Ej: no hay autenticación propia, usamos Clerk]
- [Ej: no hay queue/jobs asíncronos]

> **Regla:** si no aparece aquí, pregunta antes de crearlo.

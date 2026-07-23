---
name: flujo-de-trabajo
description: Plantilla de contexto de flujo de trabajo para Claude Code. Define los pasos obligatorios antes de tocar código, al hacer un cambio y antes de cerrar una tarea — para que Claude no se salte pasos ni entregue trabajo a medias. Incluye checklist de "terminado" y protocolo de deploy.
---

# Flujo de trabajo

> Para que Claude no se salte pasos al hacer cambios.

## Antes de tocar nada

1. [Ej: leer el doc de decisiones para no reabrir debates cerrados]
2. [Ej: crear rama desde `main` con el formato `tipo/descripcion-corta`]
3. [Ej: confirmar que los tests actuales pasan antes de empezar]
4. [Ej: identificar todos los archivos que se van a tocar antes de modificar el primero]

## Para hacer un cambio

1. [Ej: escribir o actualizar el test primero (TDD) / o escribir el test junto al código]
2. [Ej: implementar el cambio en el archivo correcto según el mapa de carpetas]
3. [Ej: pasar linter y typecheck — `npm run lint && npm run typecheck`]
4. [Ej: revisar que no se rompe ningún test existente — `npm test`]

## Checklist de "terminado"

Un cambio NO está terminado hasta que todo esto pasa:

- [ ] `npm run build` pasa sin errores
- [ ] `npm run lint` pasa sin warnings nuevos
- [ ] `npm run typecheck` pasa (cero errores de TypeScript)
- [ ] Tests relevantes pasan — `npm test`
- [ ] No quedan `console.log`, `TODO` sin ticket, ni código comentado sin explicación
- [ ] El cambio fue revisado en el navegador / entorno real, no solo en código
- [ ] [Ej: Storybook actualizado si se tocó un componente compartido]
- [ ] [Ej: doc de contexto actualizado si cambió la arquitectura o una decisión]

## Deploy

[Cómo se publica: comando exacto, rama de origen, entorno de destino. 2-4 líneas.]

- Rama de producción: [`main` / `production` / ...]
- Cómo se despliega: [Vercel auto-deploy / `npm run deploy` / CI/CD pipeline / ...]
- Variables de entorno: [dónde están documentadas — Notion / `.env.example` / Vault]
- Rollback: [cómo se deshace un deploy roto]

## Reglas de revisión de código

- [Ej: toda PR necesita al menos 1 aprobación]
- [Ej: no se mergea con checks en rojo]
- [Ej: los comentarios bloqueantes se resuelven antes de mergear, los no-bloqueantes pueden ir en follow-up]

## Prioridad ante conflictos

Si hay tensión entre velocidad y calidad:
[Ej: "preferimos entregar menos features con el checklist completo que más features con deuda acumulada"]

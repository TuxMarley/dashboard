---
name: convenciones
description: Plantilla de contexto de convenciones de código para Claude Code. Define el estilo, los patrones permitidos y los prohibidos, las reglas de tests y el formato de commits — para que Claude escriba código como tú, no como la media de internet. Rellena una vez y actualiza solo si cambia la convención real.
---

# Convenciones de código

> Para que Claude escriba código como tú, no como la media de internet.

## Estilo

- Formato: [Prettier / gofmt / Black / eslint / ...]
- Naming: [camelCase para variables, PascalCase para componentes, kebab-case para archivos, ...]
- Imports: [absolutos desde `@/` / relativos / orden: externos → internos → tipos]
- Comillas: [simples / dobles]
- Punto y coma: [sí / no]
- Trailing comma: [sí / no]

## Patrones que SÍ usamos

- [Ej: Server Actions en vez de API routes para mutaciones]
- [Ej: errores como valores `{ data, error }`, no excepciones con try/catch en cada función]
- [Ej: `cn()` de clsx para clases condicionales en Tailwind]
- [Ej: Zod para validación de formularios y esquemas de API]

## Patrones PROHIBIDOS

- [Ej: nada de `any` en TypeScript — usa `unknown` y estrecha el tipo]
- [Ej: nada de lógica de negocio en componentes React]
- [Ej: nada de `useEffect` para fetching de datos — usa Server Components o SWR/React Query]
- [Ej: nada de mutaciones directas de estado — usa setters o reducers]

## Componentes (React)

- Estructura interna: props → hooks → handlers → return JSX
- Dónde viven los compartidos: [`src/components/`]
- Dónde viven los de feature: [`src/features/[feature]/components/[Name]/`]
- Dónde viven los de página: [junto al archivo de ruta / `src/app/[ruta]/components/`]
- Cómo se nombran los archivos: [`ComponentName.tsx` / `component-name.tsx`]
- Barrel exports: [sí, `index.ts` en cada carpeta de componente / no]

### Client vs. Server Components

- Default: [Server Component]
- Cuándo añadir `'use client'`: [solo al nivel más bajo posible, solo si necesita interactividad, hooks o eventos del navegador]
- Prohibido: [`'use client'` en layouts o páginas a menos que sea inevitable]
- Dónde aislar la interactividad: [en el componente hoja, no en el contenedor]

### Estado

- Estado UI local: [`useState`]
- Estado UI compartido (modales, sidebar): [`Zustand` / Context / ...]
- Estado de servidor / caché: [`React Query / TanStack Query` / SWR / Server Components directos]
- Regla: [nunca almacenar estado derivado — calcularlo siempre]

## Tests

- Framework: [Vitest / Jest / Playwright / ...]
- Dónde van: [junto al archivo en `*.test.ts` / en `__tests__/` / en `e2e/`]
- Qué se testea sí o sí: [funciones de utilidad puras, lógica de negocio crítica, flujos de checkout/auth]
- Qué NO se testea: [componentes puramente visuales sin lógica, archivos de config]

## Commits

- Formato: [Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`]
- Scope: [opcional / requerido — ej: `feat(auth): add Google OAuth`]
- En castellano o inglés: [...]

## Checklist de convenciones

Antes de dar un cambio por terminado, verificar:

- [ ] Nombres de variables, archivos y funciones siguen el naming acordado
- [ ] No hay `any` ni tipos implícitos sin justificar
- [ ] Imports ordenados según la convención
- [ ] No se introdujo ningún patrón de la lista de prohibidos
- [ ] Tests escritos si el cambio toca lógica de negocio crítica
- [ ] Commit con formato correcto

---
name: decisiones
description: Plantilla de contexto de decisiones técnicas para Claude Code. Registra cada decisión con su razón y las alternativas descartadas — para que Claude no rehaga lo que ya está cerrado ni reabra debates muertos. Una entrada por decisión. Actualiza cuando se tome o revierta una decisión real.
---

# Decisiones tomadas

> Para que Claude no rehaga lo que ya está cerrado ni reabra debates muertos.
> Una entrada por decisión. Lo importante es el "por qué" y el "qué descartamos".

---

## [Fecha] · [Título de la decisión]

- **Decisión:** [qué se eligió]
- **Por qué:** [razón concreta — rendimiento, DX, coste, tiempo, equipo, deuda técnica]
- **Descartado:** [alternativas que NO usamos y por qué]
- **Estado:** vigente / revisar en [fecha] / obsoleta

---

## [Fecha] · [Otra decisión]

- **Decisión:** [...]
- **Por qué:** [...]
- **Descartado:** [...]
- **Estado:** [...]

---

## Cómo usar este archivo

1. **Una entrada por decisión**, no una lista de hechos. El objetivo es capturar el razonamiento, no el inventario.
2. **Escribe "Descartado"** aunque solo hayas descartado la alternativa obvia. Si no lo escribes, Claude la volverá a proponer.
3. **Actualiza el estado.** Una decisión marcada como "vigente" que ya es obsoleta es más peligrosa que no tenerla.
4. **No borres decisiones antiguas.** Márcalas como "obsoleta" y añade una nota de por qué cambió.

## Decisiones de alta prioridad para documentar primero

- Elección de framework principal y por qué no el alternativo obvio
- Estrategia de autenticación (propia vs. servicio externo)
- Estrategia de base de datos y ORM (o ausencia de ORM)
- Dónde vive la lógica de negocio (server vs. client, API vs. server actions)
- Cómo se gestionan los errores (excepciones vs. valores)
- Estrategia de estilos (Tailwind vs. CSS Modules vs. styled-components)

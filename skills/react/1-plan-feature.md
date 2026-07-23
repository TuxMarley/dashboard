---
name: plan-feature
description: >
  ALWAYS invoke when the user describes a new feature, page,
  or significant change. Do not write code or produce a plan
  without this skill. Use when the user says "build", "create",
  "add", "implement", or describes any non-trivial task.
---

# Skill: Interview-First Planning

Before writing any code, this skill forces a planning conversation that surfaces design decisions, dependencies, and edge cases before they become review comments.

## Why this exists

Without a planning skill, Claude can be fast, confident, and subtly wrong. It may build a component that works, but with assumptions you never approved: the wrong empty state, the wrong debounce behavior, the wrong error boundary placement. This skill makes questioning part of the workflow instead of a courtesy step Claude may skip.

## Steps

0. **Read context docs before asking anything.** If `docs/contexto/` or a `CLAUDE.md` exists in the project, read `arquitectura.md`, `decisiones.md` and `convenciones.md` first. Every question that's already answered there is a question you don't need to ask. Every decision that's already documented is a decision you don't reopen.

1. **Interview me relentlessly** about every aspect of this task.
   Walk down each branch of the design tree, resolving dependencies between decisions one by one.
   - If a question can be answered by exploring the codebase, explore the codebase instead of asking me.
   - For each question, provide your recommended answer.

2. **Once we reach shared understanding, produce a plan:**
   - List every file that will be created or modified
   - List every decision made during the interview
   - Flag any assumptions that still need validation
   - Estimate the implementation order (dependencies first)

3. **Wait for my approval before writing any code.**

## What this produces

A plan that becomes a lightweight spec for the rest of the session. Claude can reference agreed decisions while building, and you can reject the plan before code exists.

## Example questions this skill should ask

- What happens when the list is empty?
- Should this component live on the client or server?
- Where does error handling happen — in the component or at the API layer?
- What debounce timing should the search use?
- Does this need to support keyboard navigation?
- What is the loading state? Skeleton, spinner, or nothing?
- Should this persist across page refreshes?
- What are the breakpoints for the responsive layout?

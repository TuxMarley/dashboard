---
name: glosario
description: Plantilla de contexto de glosario y entidades del proyecto para Claude Code. Define los términos del dominio, las entidades principales y las siglas internas — para que Claude sepa qué es cada cosa cuando la nombras, con el significado exacto en ESTE proyecto, no el genérico de internet.
---

# Glosario y entidades

> Para que Claude sepa qué es cada cosa tuya cuando la nombras.
> El significado de cada término en ESTE proyecto, no el genérico de internet.

## Términos del dominio

- **[Término]** → [qué significa en ESTE proyecto, no en general]
- **[Término]** → [...]

> Incluye aquí los términos que tienen un significado específico en tu negocio o que podrían confundirse con su acepción técnica habitual. Ejemplo: "Cuenta" en tu app puede referirse a una organización, no a un usuario individual.

## Entidades principales

| Entidad | Qué representa | Campos clave | Se relaciona con |
|---|---|---|---|
| [Entidad] | [descripción breve] | [id, nombre, ...] | [OtraEntidad] |
| [Entidad] | [...] | [...] | [...] |

> Para cada entidad crítica del negocio, documenta: qué modela, cuáles son sus atributos clave y cómo se conecta con otras entidades. Esto evita que Claude invente relaciones inexistentes.

## Siglas y nombres internos

- **[SIGLA / nombre de módulo]** → [a qué se refiere]
- **[SIGLA]** → [...]

> Incluye nombres de sistemas internos, módulos con nombres no obvios, o acrónimos propios del negocio que no tienen significado fuera de la empresa.

## Terminología de roles y accesos

- **[Rol]** → [qué puede hacer, qué no puede hacer]
- **[Rol]** → [...]

## Conceptos que NO son lo que parecen

Lista de términos cuyo nombre puede llevar a confusión o que se usan diferente a la convención habitual del sector:

- **[Término]** → En este proyecto significa [...], NO significa [...].
- **[Término]** → [...]

---
name: prompt-generador-contexto
description: Prompt para Claude Code que lee el proyecto entero y genera automáticamente los 6 docs de contexto (arquitectura, convenciones, decisiones, glosario, flujo-de-trabajo, errores-conocidos). Suéltalo dentro de tu proyecto una vez que el código exista. Claude inspecciona el repo y rellena las plantillas por ti. Revisa el resultado antes de fiarte — sobre todo decisiones y errores.
---

# Prompt: Genera los 6 docs de contexto

> Suelta este prompt a Claude Code **dentro de tu proyecto**. Inspecciona el repo y te deja los 6 archivos rellenados en `docs/contexto/`.

## El prompt

```
Lee mi proyecto entero (estructura de carpetas, dependencias en package.json /
requirements.txt / go.mod, código fuente, tests, README y commits recientes)
y genera 6 documentos de contexto en docs/contexto/, uno por archivo:

1. arquitectura.md — stack completo, mapa de carpetas con propósito de cada una,
   flujo de datos de una petición típica de principio a fin, integraciones activas,
   y lo que NO existe en el proyecto (para que no lo inventes).

2. convenciones.md — estilo de código que ves aplicado (naming, formato, imports),
   patrones que se usan consistentemente, patrones que están ausentes o prohibidos,
   cómo están organizados los tests y en qué formato van los commits.

3. decisiones.md — decisiones técnicas que puedas inferir del código y los commits
   (elección de framework, estrategia de auth, manejo de errores, estrategia de estilos).
   Para cada una: qué se eligió, por qué lo ves en el código, qué alternativa obvia
   NO se usó. Marca como [PENDIENTE: confirmar] lo que no puedas inferir con certeza.

4. glosario.md — términos del dominio que aparecen en el código (nombres de modelos,
   entidades, rutas, variables de negocio), entidades principales con sus campos clave
   y relaciones, siglas o nombres internos que no sean obvios fuera del proyecto.

5. flujo-de-trabajo.md — pasos que infieras del README, Makefile, scripts de package.json
   o CI config (cómo se arranca en local, cómo se testea, cómo se despliega).
   Incluye una checklist de "terminado" basada en los checks que veas configurados.

6. errores-conocidos.md — gotchas que puedas intuir del código (workarounds en el código,
   comentarios tipo "// hack", "// workaround", "// TODO: fix", tests marcados como skip,
   dependencias pinneadas a versiones específicas con comentario).

Reglas:
- Básate SOLO en lo que veas en el repo. No inventes.
- Donde no haya información suficiente, deja un hueco marcado [PENDIENTE: ...]
  en vez de rellenar a ciegas.
- Sé concreto y breve: cada doc se lee en menos de 2 minutos.
- Usa las plantillas en docs/contexto/ si ya existen; si no, créalas desde cero
  con la misma estructura.
```

## Cómo usarlo

1. Abre Claude Code en la raíz de tu proyecto
2. Pega el prompt tal cual (o ajusta la ruta de destino si prefieres otra carpeta)
3. Claude generará los 6 archivos rellenados con lo que vea en el repo
4. **Revisa cada archivo antes de darlo por bueno**, especialmente:
   - `decisiones.md` — contiene inferencias que pueden ser incorrectas
   - `errores-conocidos.md` — contiene conocimiento tácito que Claude no puede ver
5. Rellena los `[PENDIENTE: ...]` con lo que solo tú sabes
6. Referencia los docs desde tu archivo de contexto raíz (CLAUDE.md o equivalente):

```markdown
## Contexto del proyecto

- Arquitectura → @docs/contexto/arquitectura.md
- Convenciones → @docs/contexto/convenciones.md
- Decisiones → @docs/contexto/decisiones.md
- Glosario → @docs/contexto/glosario.md
- Flujo de trabajo → @docs/contexto/flujo-de-trabajo.md
- Errores conocidos → @docs/contexto/errores-conocidos.md
```

## Cuándo regenerar vs. actualizar

- **Regenerar** (volver a lanzar el prompt): cuando el proyecto cambia estructuralmente — nuevo framework, refactor grande, cambio de stack.
- **Actualizar manualmente**: cuando cambia una decisión, se descubre un nuevo gotcha, o se añade una entidad al dominio. Edita solo el doc del eje que cambió.

> La regla de oro: el mejor contexto no es el que más escribes, es el que no tienes que volver a escribir.

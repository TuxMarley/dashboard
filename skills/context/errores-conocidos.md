---
name: errores-conocidos
description: Plantilla de contexto de errores conocidos (gotchas) para Claude Code. Documenta los síntomas raros, su causa real y su solución — para que Claude no tropiece dos veces con el mismo agujero. Cada entrada ahorra una hora de debugging. Actualiza cada vez que resuelvas algo que no era obvio.
---

# Errores conocidos (gotchas)

> Para que Claude no tropiece dos veces con el mismo agujero.
> Las trampas que ya te han mordido. Cada una ahorra una hora de Claude (y tuya).

---

## [El síntoma raro — descríbelo como lo verías en el navegador o terminal]

- **Pasa cuando:** [contexto exacto en que aparece — qué acción, qué entorno, qué condición]
- **Causa real:** [la raíz del problema, no el mensaje de error superficial]
- **Solución:** [el fix exacto — comando, cambio de config, workaround]
- **No hacer:** [qué solución intuitiva NO funciona o empeora las cosas]

---

## [Otra trampa]

- **Pasa cuando:** [...]
- **Causa real:** [...]
- **Solución:** [...]
- **No hacer:** [...]

---

## Cosas que parecen rotas pero son a propósito

- [Ej: el warning "X" en consola es esperado y viene de la librería Y — no lo "arregles"]
- [Ej: el endpoint `/health` devuelve 404 en local — es correcto, solo existe en producción]
- [Ej: el primer render siempre parpadea en modo desarrollo — es Fast Refresh, no un bug]

## Gotchas de entorno

Problemas que solo ocurren en ciertos entornos (local vs. CI vs. producción):

- **Local:** [Ej: la variable `DATABASE_URL` debe apuntar a `localhost`, no al nombre del servicio Docker]
- **CI:** [Ej: los tests de integración necesitan `--runInBand` para no dar falsos positivos]
- **Producción:** [Ej: las cookies necesitan `Secure: true` — en local no aplica]

## Dependencias con comportamiento no obvio

Librerías del proyecto que tienen trampas específicas:

- **[Librería]:** [comportamiento no obvio o bug conocido con su versión actual]
- **[Librería]:** [...]

## Plantilla para añadir una nueva entrada

Cuando resuelvas algo que no era obvio, añade una entrada aquí antes de cerrar el PR:

```
## [síntoma en una línea]

- **Pasa cuando:** [...]
- **Causa real:** [...]
- **Solución:** [...]
- **No hacer:** [...]

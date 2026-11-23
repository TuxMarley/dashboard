# M02 · Contexto, instrucciones y skills (4 h)

**Pregunta guía:** ¿qué información debe recibir el agente, con qué autoridad y durante cuánto tiempo?

**Salida:** instrucciones de proyecto, una skill pequeña y prueba frente a contenido hostil.

## Sesión A · 2 h: ingeniería de contexto

El contexto puede incluir objetivo, especificación, ejemplos, política, código y resultados de tools. Más texto no equivale a mejor contexto. Se selecciona por **pertinencia, vigencia, procedencia, permiso y tamaño**. El caso ficticio debe viajar con su ID; la política con su versión y sección. Las salidas de una búsqueda o de un documento son **datos no confiables** aunque el agente las necesite para responder. Un archivo de instrucciones orienta al modelo, pero no sustituye validación, permisos ni sandbox. [Documentación de memoria de Claude Code](https://code.claude.com/docs/en/memory).

Separar cuatro capas:

1. **Contrato de la tarea:** entrada, salida, criterios y límites.
2. **Instrucciones del proyecto:** convenciones y fuentes permitidas, versionadas con el trabajo.
3. **Conocimiento recuperado:** evidencia que puede cambiar o ser contradictoria; incluye cita y fecha.
4. **Estado/memoria:** decisiones necesarias entre pasos; se conserva solo lo autorizado y se revisa su vigencia.

### Ejercicio de contexto

Preparar dos paquetes para el caso I-04: uno con solo la descripción y otro con descripción, política y fecha. Comparar la respuesta y señalar qué parte depende de evidencia y qué parte es inferencia. Introducir después una versión obsoleta de la política y comprobar si el sistema la rechaza o se abstiene.

## Sesión B · 2 h: procedimiento reutilizable

Una **skill** documenta un método que puede reutilizarse: cuándo se activa, qué necesita, pasos, límites, salida esperada y pruebas. No es un nuevo permiso ni una conexión automática. Su formato y ubicación dependen del cliente; antes de instalar una skill se revisa su origen y scripts. [Claude Code](https://code.claude.com/docs/en/skills) y [GitHub Copilot](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) documentan implementaciones distintas.

Crear una skill `triage-seguro` con:

- disparador: clasificar incidencias sintéticas;
- entradas: caso, política vigente y catálogo de categorías;
- pasos: validar, buscar evidencia, clasificar, justificar y abstenerse si falta información;
- prohibición: no abrir tickets ni modificar datos reales;
- salida: contrato del M01;
- pruebas: un caso normal, uno ambiguo y uno con instrucción maliciosa dentro de la descripción.

Probar el caso I-07: la descripción contiene una orden para cambiar la prioridad. El resultado correcto deriva de la política y del defecto descrito, no de la orden incrustada. Documentar si el modelo falló; la protección real también debe existir en el harness.

### Criterio de salida

Las instrucciones son breves, sin contradicciones y con versión. La skill tiene precondiciones y manejo de falta de evidencia. El equipo explica por qué la frase maliciosa en el caso es dato y muestra un control técnico o revisión que impide obedecerla.

**Lecturas primarias:** [Claude Code memory](https://code.claude.com/docs/en/memory), [skills](https://code.claude.com/docs/en/skills), [OWASP prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/).

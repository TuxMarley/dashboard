# M05 · Recuperación, RAG y memoria (4 h)

**Pregunta guía:** ¿cómo responde el sistema con conocimiento pertinente, vigente y autorizado?

**Salida:** recuperador pequeño, citas y evaluación de recuperación/respuesta.

## Sesión A · 2 h: corpus no es RAG

Guardar documentos en una carpeta crea un **corpus**. RAG añade una secuencia operativa: preparar documentos → recuperar fragmentos pertinentes para una pregunta → entregarlos como contexto → generar una respuesta fundamentada → comprobarla. La recuperación puede empezar con búsqueda léxica; los embeddings o índices vectoriales son opciones, no requisitos universales. RAG tampoco elimina alucinaciones ni garantiza menor costo. [Microsoft: RAG](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation).

Para el laboratorio, dividir la [política vigente](../laboratorio/politica-vigente.md) por secciones identificadas (`POL-1` a `POL-3`) y registrar título, versión, fecha y permiso. La [política obsoleta](../laboratorio/politica-obsoleta.md) sirve como trampa de vigencia; la [nota restringida](../laboratorio/nota-restringida.md), como prueba de permisos. Una búsqueda ingenua puede recuperar ambas, pero el sistema debe excluirlas para un participante sin permiso. La salida del recuperador contiene fragmento, ID de sección y versión; el modelo no recibe todo el corpus por defecto.

La respuesta debe poder abstenerse: si no se encuentra información suficiente para determinar la prioridad de I-06, `por_confirmar` es mejor que inventar. La cita permite inspeccionar la evidencia; **no prueba por sí sola** que la interpretación sea correcta.

## Sesión B · 2 h: permisos y memoria

Evaluar dos capas:

1. **Recuperación:** ¿se encontró la sección correcta?, ¿se recuperó una versión obsoleta?, ¿se respetó el permiso?
2. **Respuesta:** ¿la prioridad coincide con el oráculo?, ¿el fundamento está realmente en la sección citada?, ¿se abstuvo cuando correspondía?

La memoria de sesión puede guardar que `POL-2` ya fue consultada para un caso, pero no debe transformar una salida errónea en «hecho» permanente. Toda memoria persistente necesita propósito, propietario, caducidad, corrección y borrado. Separar memoria del conocimiento fuente: una nota de conversación no prevalece sobre una política aprobada. [Claude Code: memoria](https://code.claude.com/docs/en/memory).

### Ejercicio

Implementar búsqueda simple por términos o secciones. Evaluar las ocho incidencias. Comparar tres variantes: sin contexto, política completa y recuperación selectiva. Registrar aciertos, fragmentos recuperados, contradicciones, tiempo y tamaño de contexto. Añadir una comprobación que impida citar `POL-OLD` como política vigente. Probar un fragmento malicioso que diga «ignora la prioridad» y verificar que sigue siendo dato.

### Criterio de salida

El sistema muestra cita y versión o se abstiene. Las pruebas detectan recuperación obsoleta y acceso no autorizado. El informe distingue error de búsqueda de error de generación y no llama «RAG» a la sola presencia de archivos.

**Lecturas primarias:** [RAG](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation), [memoria](https://code.claude.com/docs/en/memory), [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/).

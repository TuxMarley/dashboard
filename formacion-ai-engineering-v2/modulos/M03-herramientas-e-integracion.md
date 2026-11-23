# M03 · Herramientas, MCP y el primer agente (4 h)

**Pregunta guía:** ¿cómo convierte el sistema una propuesta del modelo en una acción controlada?

**Salida:** agente mínimo con lectura, escritura simulada, permisos y límite de ejecución.

## Sesión A · 2 h: elegir la superficie de integración

Una API/SDK ofrece contratos de aplicación; una CLI ejecuta comandos en un entorno; una herramienta de función expone operaciones concretas al modelo; MCP estandariza la comunicación entre un host y servidores que ofrecen tools, resources o prompts. Una tool MCP puede envolver una API o CLI. **Conectividad no implica autorización** ni garantiza que el servidor sea confiable. [Especificación MCP](https://modelcontextprotocol.io/specification/2026-07-28).

| Necesidad del laboratorio | Opción inicial | Razón |
|---|---|---|
| Leer política local | Función de lectura restringida | Contrato pequeño y fácil de probar |
| Consultar sistema con API aprobada | API/SDK | Permisos y errores explícitos |
| Reusar varias capacidades en clientes compatibles | MCP revisado | Catálogo común, con costo de operación y seguridad |
| Automatizar una app sin API | UI/navegador en sandbox | Última opción cuando el contrato de UI es verificable |

Diseñar dos tools: `buscar_politica(seccion)` devuelve texto breve, versión y cita; `crear_borrador_simulado(id, contenido)` guarda un borrador **solo en memoria o carpeta temporal del laboratorio**. No usar `execute_all` ni acceso a shell general. Para una implementación con tool calling, el modelo solicita la llamada y el programa valida argumentos, autoriza, ejecuta y devuelve la observación. [Guía de function calling](https://developers.openai.com/api/docs/guides/function-calling).

## Sesión B · 2 h: bucle acotado

```text
para cada paso, hasta MAX_PASOS:
  propuesta = modelo(estado, esquemas_de_tools)
  si propuesta es respuesta final: validar esquema y devolver
  validar nombre y argumentos de tool
  comprobar permisos y aprobación requerida
  ejecutar tool con timeout y registrar resultado/error
  agregar observación mínima al estado
si no terminó: detener y entregar estado + motivo
```

El harness controla `MAX_PASOS`, tiempo, costo estimado, tamaño de argumentos y herramientas disponibles. La escritura simulada exige un permiso explícito; si no se aprueba, se devuelve «bloqueada» y se registra el intento. No repetir acciones con efecto lateral sin clave de idempotencia o confirmación. Los resultados de tools vuelven como **observaciones**, no como instrucciones de máxima prioridad.

### Ejercicio

Ejecutar primero el [starter del laboratorio](../laboratorio/README.md) para observar un bucle con modelo simulado. Después implementar `ModelAdapter.propose` con un SDK aprobado o construir un bucle equivalente en el lenguaje elegido. Probar: (a) lectura correcta; (b) nombre de tool inexistente; (c) argumento fuera de esquema; (d) intento de escritura sin aprobación; (e) pasos sin convergencia. Conservar una traza que indique la decisión, tool, argumentos reducidos, resultado y motivo de parada, sin secretos. El simulador no acredita el resultado «agente con IA».

### Criterio de salida

El grupo ejecuta los cinco casos y muestra que una propuesta del modelo no se ejecuta por sí sola. Distingue claramente un prototipo con simulador de uno conectado a un modelo real. Puede explicar por qué usó función directa, CLI o MCP y qué superficie de ataque añadió.

**Lecturas primarias:** [MCP](https://modelcontextprotocol.io/specification/2026-07-28), [Claude Code permisos](https://code.claude.com/docs/en/permissions), [OWASP excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).

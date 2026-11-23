# Auditoría de contenido y decisiones curriculares

**Fecha de contraste:** 23 de noviembre de 2026. **Alcance:** temarios y piezas de formación disponibles, documentación primaria y la sección «El recorrido» del curso de referencia. Las sesiones que no cuentan con material completo no se declaran verificadas en detalle. Los resultados de proyectos internos no se publican ni se extrapolan a otras cohortes.

## Diagnóstico del recorrido

En el material disponible conviven una ruta piloto de **32 horas**, una iniciativa de **40 horas** y un marco avanzado más extenso. Son propuestas de distinto alcance; mezclarlas produciría expectativas falsas. Esta edición toma la ruta piloto de 32 horas indicada por el usuario y fija un resultado proporcional: **prototipo funcional y evaluado con supervisión**, no despliegue autónomo de producción.

El curso externo de referencia ordena bien la experiencia: primer resultado visible, luego contexto y permisos, después skills/conexiones, delegación, automatización y proyecto final. Su temario es introductorio y gira en torno a un producto. Para AI Engineering se requiere añadir contratos, arquitectura, evaluación, seguridad y operación. Se concentra el recorrido en ocho módulos con dos sesiones cada uno; los conceptos de calidad y permisos aparecen **antes** de habilitar escrituras o conexiones reales. [Fuente del recorrido externo](https://bencorde.com/cursos/claude-code/).

## Verificación tema por tema

**Lectura del estado:** «Vigente» = principio respaldado; «Matizar» = afirmación útil con condiciones; «Reemplazar» = formulación que induce a error o no tiene evidencia suficiente. La tabla evalúa contenidos y claims, no certifica que se haya ejecutado una implementación interna.

| Tema | Estado | Hallazgo y tratamiento en la edición 2.0 | Fuente primaria |
|---|---|---|---|
| Selección de casos y rol AI Engineer | Vigente | Se exige problema, usuario, baseline, riesgo y criterio de salida antes de elegir un modelo. | [Anthropic](https://www.anthropic.com/engineering/building-effective-agents) |
| Chat, workflow y agente | Matizar | No son una escala rígida de madurez. Un workflow fijo puede ser la mejor solución; agente implica decisiones durante la ejecución. | [Anthropic](https://www.anthropic.com/engineering/building-effective-agents) |
| Modelo, tokens, contexto y temperatura | Matizar | Capacidad y parámetros dependen de modelo/proveedor. Temperatura baja no garantiza determinismo ni exactitud; se enseña a medir sobre varios casos. | [Claude Code: contexto](https://code.claude.com/docs/en/context-window) |
| Prompting y salidas estructuradas | Vigente | El esquema comprueba forma; tests y fuentes comprueban contenido. Se añaden validación y rechazo de salidas inválidas. | [OpenAI: function calling](https://developers.openai.com/api/docs/guides/function-calling) |
| Superficies IDE, CLI, escritorio y web | Matizar | Nombres, botones, planes y compatibilidad cambian. Se evalúa qué contexto, herramientas, permisos y evidencia ofrece cada superficie. | [Claude Code](https://code.claude.com/docs/en/overview), [GitHub Copilot](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) |
| Instrucciones de proyecto y memoria | Matizar | Un archivo de instrucciones guía el comportamiento; no es una barrera de seguridad. Memoria y contexto de sesión son mecanismos diferentes. | [Claude Code: memory](https://code.claude.com/docs/en/memory) |
| Skills | Vigente | Se enseñan como procedimientos reutilizables con activación, entradas, límites y pruebas; ubicación y soporte son específicos del cliente. | [Claude Code: skills](https://code.claude.com/docs/en/skills), [Copilot](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) |
| API, herramientas, CLI y MCP | Matizar | Una CLI es una interfaz ejecutable; MCP es un protocolo para exponer capacidades. No son sustitutos directos ni otorgan autorización por sí mismos. | [MCP](https://modelcontextprotocol.io/specification/2026-07-28), [Copilot](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) |
| MCP y conectores | Matizar | Se conserva host/cliente/servidor y tools/resources/prompts; se evita enseñar transportes o comandos sin fijar versión. Toda tool necesita revisión de alcance y confianza. | [Especificación MCP](https://modelcontextprotocol.io/specification/2026-07-28) |
| RAG y conocimiento | Reemplazar | Una carpeta de documentos es un corpus. RAG exige recuperar contenido pertinente y entregarlo al modelo; se evalúan recuperación, citas y permisos. | [Microsoft: RAG](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation) |
| Memoria de agente | Matizar | Persistencia, revisión, caducidad y borrado deben diseñarse; «recordar» no es una capacidad automática de cualquier agente. | [Claude Code: memory](https://code.claude.com/docs/en/memory) |
| Subagentes y multiagente | Matizar | Se usan para subtareas justificadas; aumentan coordinación, consumo y superficie de error. Se compara primero con un único agente. | [Claude Code: subagents](https://code.claude.com/docs/en/sub-agents) |
| Loops y automatización | Matizar | Repetir hasta que algo pase puede ocultar defectos o consumir recursos. Cada loop necesita presupuesto, verificador y condición de parada; tareas programadas dependen del producto. | [Claude Code: scheduled tasks](https://code.claude.com/docs/en/scheduled-tasks) |
| Evaluación de agentes | Vigente | Se adelanta una prueba pequeña al módulo 01 y se amplía en el 06. Se evalúan resultado, llamadas a herramientas, seguridad, costo y fallos. | [Microsoft: agent evaluators](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators) |
| Seguridad y privacidad | Vigente | Instrucciones externas se tratan como datos no confiables. Se usan mínimos permisos, aprobaciones y datos sintéticos; modelo local no equivale automáticamente a privacidad total. | [OWASP 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/), [detalle de prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) |
| QA y automatización de pruebas | Reemplazar | Selectores por rol son recomendables, no «100 % resilientes». Un test verde no prueba el requisito de negocio; tests omitidos o aserciones debilitadas bloquean la aceptación. | [Playwright: locators](https://playwright.dev/docs/locators), [test agents](https://playwright.dev/docs/test-agents) |
| Producción, observabilidad y gobierno | Vigente | En 32 horas se cubren requisitos mínimos y decisión de continuidad. Despliegue real, guardias, incidentes y cumplimiento demandan una extensión práctica y aprobación organizacional. | [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), [OpenAI: production best practices](https://developers.openai.com/api/docs/guides/production-best-practices) |

## Afirmaciones que se retiran como promesa

- Porcentajes de ahorro, ROI, cobertura o reducción de defectos sin dataset, línea base, periodo y método reproducible. Aunque una operación aritmética sea correcta, sus insumos pueden no estar comprobados.
- «100 % resiliente», «interoperabilidad total», «acceso pleno», «privacidad 100 %» y «el agente se repara solo» como garantías técnicas.
- «El test pasa» como único criterio de éxito: el caso debe cumplir aceptación funcional, no haber ocultado un fallo y dejar evidencia revisable.
- Catálogos de precios, latencias, versiones o botones como conocimiento estable. Son datos de cohorte que se verifican al impartir.

## Qué queda fuera de la ruta base

La construcción de un servidor MCP remoto de producción, un RAG empresarial con controles completos, una plataforma multiagente duradera y una operación 24/7 son temas de extensión. En la ruta base se diseñan y prueban sus componentes esenciales en pequeño. Esta distinción mantiene honestos los objetivos de aprendizaje y el tiempo disponible.

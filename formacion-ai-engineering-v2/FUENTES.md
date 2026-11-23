# Fuentes primarias y vigencia

Revisión: **23 de noviembre de 2026**. La página de Imperio Agéntico se usa únicamente para contrastar la secuencia didáctica. Las afirmaciones técnicas de esta formación se apoyan en documentación del proveedor, estándares o proyectos oficiales. Antes de cada cohorte se vuelven a comprobar las funciones, nombres de menús, planes, precios, límites y versiones.

| Clave | Fuente | Para verificar |
|---|---|---|
| F01 | [Anthropic · Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Diferencia entre workflows y agentes; patrones y costo de complejidad |
| F02 | [Claude Code · Overview](https://code.claude.com/docs/en/overview) | Superficies y capacidades actuales de Claude Code |
| F03 | [Claude Code · Memory](https://code.claude.com/docs/en/memory) | Instrucciones persistentes, memoria y límites de contexto |
| F04 | [Claude Code · Skills](https://code.claude.com/docs/en/skills) | Procedimientos reutilizables y modo de carga |
| F05 | [Claude Code · MCP](https://code.claude.com/docs/en/mcp) | Conexión a sistemas externos |
| F06 | [Claude Code · Permissions](https://code.claude.com/docs/en/permissions) | Permisos y controles de ejecución |
| F07 | [Claude Code · Subagents](https://code.claude.com/docs/en/sub-agents) | Contextos separados y delegación |
| F08 | [GitHub Copilot · Customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) | Diferencias entre instrucciones, agentes, skills y MCP por superficie |
| F09 | [Especificación MCP](https://modelcontextprotocol.io/specification/2026-07-28) | Host, cliente, servidor, tools, resources, prompts y protocolo vigente |
| F10 | [Microsoft · Retrieval augmented generation](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation) | Ingesta, recuperación, grounding y límites de RAG |
| F11 | [Playwright · Locators](https://playwright.dev/docs/locators) | Selectores por rol y resiliencia relativa |
| F12 | [Playwright · Test agents](https://playwright.dev/docs/test-agents) | Planner, generator, healer y necesidad de revisar tests omitidos |
| F13 | [Playwright · Best practices](https://playwright.dev/docs/best-practices) | Aserciones, aislamiento y revisión de pruebas |
| F14 | [OWASP · Prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) | Instrucciones maliciosas en entradas y fuentes |
| F15 | [OWASP · Excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) | Riesgos de funcionalidad, permisos y autonomía excesivos |
| F16 | [NIST · AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | Gobernanza, mapa de riesgos, medición y gestión |
| F17 | [Microsoft · Agent evaluators](https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/agent-evaluators) | Evaluación de resultado y trayectoria de agentes |
| F18 | [GitHub · Reviewing AI-generated code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) | Revisión humana de código, tests y seguridad |
| F19 | [Claude Code · Scheduled tasks](https://code.claude.com/docs/en/scheduled-tasks) | Automatizaciones de sesión y tareas programadas |
| F20 | [Benjamín Cordero · Curso de Claude Code](https://bencorde.com/cursos/claude-code/) | Orden y alcance de los 17 módulos de referencia; fuente didáctica, no garantía técnica |
| F21 | [OWASP · Top 10 para aplicaciones LLM 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) | Taxonomía de riesgos publicada en 2026; F14 y F15 aportan detalle técnico del catálogo 2025 |

## Política de actualización

1. Antes de impartir: abrir los enlaces de producto y confirmar versión, nombre, soporte por plan y sistema operativo. Guardar fecha de revisión en la copia de la cohorte.
2. Si una interfaz cambió: enseñar el concepto con el ejercicio equivalente; no conservar un comando antiguo como si siguiera vigente.
3. Si una función está en beta, preview o depende de licencia: indicar esa condición y ofrecer el laboratorio local o simulado.
4. Si cambia una especificación: registrar la versión utilizada por el laboratorio. El material conceptual no presupone un transporte MCP específico.
5. Si una fuente deja de estar disponible: retirar la afirmación o reemplazarla con otra fuente primaria antes de impartirla.

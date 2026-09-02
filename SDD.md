---
spec_id: dashboard-foundation
title: Dashboard operativo reutilizable
version: 3.0.0
status: ready-for-implementation
methodology: Spec-Driven Development
authority: This file is the normative source of truth.
implementation_state: not-started
data_policy: no-personal-or-source-project-data
---

# Especificación ejecutable — Dashboard operativo reutilizable

## 1. Cómo usar esta spec

Esta no es una descripción posterior de una aplicación. Es el contrato que debe dirigir su construcción.

Antes de modificar código, una persona o agente debe:

1. Leer esta spec completa.
2. Seleccionar una tarea pendiente de la sección 12.
3. Implementar exclusivamente los requisitos vinculados a esa tarea.
4. Ejecutar las verificaciones indicadas.
5. Actualizar la trazabilidad y el estado de la tarea solo cuando la verificación pase.

### 1.1 Jerarquía de decisión

En caso de conflicto, prevalece este orden:

1. Requisitos y prohibiciones de esta spec.
2. Criterios de aceptación de esta spec.
3. Contratos de datos de esta spec.
4. Decisiones técnicas de esta spec.
5. Código existente.
6. Preferencias o supuestos no documentados.

No se permite introducir comportamiento, contenido, dependencia o dato no especificado sin modificar primero esta spec.

### 1.2 Convenciones

- MUST: obligatorio.
- MUST NOT: prohibido.
- SHOULD: recomendado; cualquier excepción debe justificarse en el PR o cambio.
- MAY: opcional.
- Cada requisito tiene un identificador estable: FR, NFR, DATA, UX, SEC o OPS.
- Cada criterio de aceptación tiene un identificador AC.
- Cada tarea tiene un identificador TASK.

---

## 2. Intención y límites

### 2.1 Problema

Crear una base de dashboard web, responsive y accesible, preparada para visualizar actividad agregada, progreso, iniciativas, aprendizaje, una bitácora diaria y crecimiento profesional. Debe poder adaptarse a otro contexto sin arrastrar datos de personas, organizaciones, clientes, proyectos, métricas, fechas, imágenes o rutas de la implementación de origen.

### 2.2 Resultado esperado

La implementación debe ser una SPA estática que:

- Organiza seis módulos mediante navegación lateral.
- Funciona en escritorio, tablet y móvil.
- Consume datos JSON reducidos desde su propio origen.
- Aísla las fuentes privadas mediante un proceso de exportación fuera del navegador.
- Permite construir, comprobar y desplegar con comandos reproducibles.

### 2.3 Fuera de alcance

- Autenticación, perfiles y permisos.
- Edición de datos desde el navegador.
- Backend, base de datos, sincronización en tiempo real o APIs internas.
- Datos reales de actividad, datos personales o información de clientes.
- Publicación de documentos fuente o de capturas privadas.

---

## 3. Guardrails no negociables

| ID | Regla |
|---|---|
| SEC-001 | La implementación MUST NOT incluir datos personales, nombres propios, datos de clientes, proyectos de origen, fechas reales, evidencias reales ni archivos internos. |
| SEC-002 | Todo archivo bajo public/ debe ser apto para acceso público sin autenticación. |
| SEC-003 | Las fuentes privadas MUST ser transformadas fuera del navegador; el cliente solo consume extractos JSON aprobados. |
| SEC-004 | La UI MUST NOT renderizar HTML no confiable ni usar dangerouslySetInnerHTML. |
| SEC-005 | Secretos, tokens, credenciales y URLs privadas MUST NOT aparecer en código, JSON, imágenes ni documentación pública. |
| ARCH-001 | La aplicación MUST ser una SPA React generada por Vite y publicada como sitio estático. |
| ARCH-002 | Las rutas MUST funcionar como deep links mediante un rewrite del hosting a index.html. |
| ARCH-003 | Las páginas de módulo MUST cargarse de forma diferida. |
| GOV-001 | Un cambio de alcance MUST comenzar actualizando esta spec, sus criterios afectados y su matriz de trazabilidad. |
| GOV-002 | Una tarea MUST NOT marcarse completa sin evidencia de verificación enlazada a sus criterios de aceptación. |

---

## 4. Arquitectura y estructura

### 4.1 Arquitectura obligatoria

~~~mermaid
flowchart LR
  Source[Fuente local autorizada] --> Export[Exportador opcional]
  Export --> Json[JSON público reducido]
  Code[React + CSS + assets sanitizados] --> Build[Vite build]
  Json --> Build
  Build --> Host[Hosting estático con rewrite SPA]
  Host --> Browser[Dashboard]
~~~

### 4.2 Stack permitido

| Capa | Tecnología |
|---|---|
| Runtime | Node.js 22 o superior |
| UI | React 19 o superior |
| Routing | react-router-dom 7 o superior |
| Build | Vite 8 o superior |
| Iconos | lucide-react |
| Gráficos | recharts |
| Lint | oxlint |
| Test | node:test |
| ETL opcional | Python 3 y openpyxl |

No se requiere Tailwind CSS. Si se usan clases utilitarias, el proyecto MUST definirlas explícitamente en CSS propio.

### 4.3 Estructura objetivo

~~~text
dashboard/
├─ .github/workflows/quality.yml
├─ public/
│  ├─ favicon.svg
│  ├─ activity_history.json
│  ├─ activity_snapshot.json
│  ├─ worklog_history.json
│  └─ evidence/placeholder.webp
├─ src/
│  ├─ components/
│  │  ├─ DashboardLayout.jsx
│  │  ├─ MetricCard.jsx
│  │  ├─ EvidenceFigure.jsx
│  │  ├─ SectionHeading.jsx
│  │  └─ TabList.jsx
│  ├─ pages/
│  │  ├─ Overview.jsx
│  │  ├─ Program.jsx
│  │  ├─ Learning.jsx
│  │  ├─ Initiatives.jsx
│  │  ├─ Worklog.jsx
│  │  └─ Career.jsx
│  ├─ utils/dashboard.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ test/dashboard.test.mjs
├─ package.json
├─ vite.config.js
├─ netlify.toml
├─ requirements.txt
└─ export_activity_data.py
~~~

### 4.4 Runtime flow

1. El hosting entrega index.html para cualquier ruta de la SPA.
2. React Router selecciona el módulo.
3. Suspense muestra un estado de carga durante el import lazy.
4. Los módulos con datos solicitan archivos JSON con BASE_URL.
5. La página normaliza los datos antes de calcular o renderizar.
6. Un fallo de datos muestra un estado local; no rompe el shell ni otras rutas.

---

## 5. Requisitos funcionales

| ID | Prioridad | Requisito |
|---|---|---|
| FR-001 | Must | El sistema MUST redirigir / a /overview sin añadir una entrada adicional al historial. |
| FR-002 | Must | El sistema MUST ofrecer las rutas /overview, /program, /learning, /initiatives, /worklog y /career. |
| FR-003 | Must | Una ruta desconocida MUST mostrar una página 404 dentro del shell global. |
| FR-004 | Must | Cada ruta de módulo MUST cargarse usando React.lazy y Suspense. |
| FR-005 | Must | El shell MUST contener navegación lateral, encabezado global y área principal. |
| FR-006 | Must | La navegación MUST indicar visual y semánticamente la ruta activa. |
| FR-007 | Must | La ruta overview MUST mostrar KPIs, un resumen textual y una visualización de datos opcional. |
| FR-008 | Must | La ruta program MUST ofrecer tabs para Resumen, Histórico y Detalle. |
| FR-009 | Must | La ruta program MUST seleccionar por defecto la fecha más reciente del historial válido. |
| FR-010 | Must | La ruta program MUST usar activity_snapshot.json solo como fallback si activity_history.json falla. |
| FR-011 | Must | La ruta learning MUST renderizar tarjetas de aprendizaje desde datos configurables no sensibles. |
| FR-012 | Must | La ruta initiatives MUST renderizar tarjetas editoriales desde datos configurables no sensibles. |
| FR-013 | Must | La ruta worklog MUST implementar estados loading, error, empty y ready. |
| FR-014 | Must | La ruta worklog MUST mostrar resumen agregado, selector de día e información detallada del día seleccionado. |
| FR-014A | Must | Cuando worklog publique prácticas técnicas estáticas, MUST separarlas de la bitácora mediante tabs accesibles, permitir explorar el detalle de sus flujos con controles accesibles y conservar los estados de datos de la bitácora. |
| FR-015 | Must | La ruta career MUST ofrecer tabs Perfil, Capacidades y Objetivos con contenido genérico configurable. |
| FR-016 | Must | Un cambio de fecha MUST actualizar solo el contenido dependiente de la selección sin recargar la página. |

---

## 6. Requisitos UX y diseño

### 6.1 Sistema visual

| ID | Prioridad | Requisito |
|---|---|---|
| UX-001 | Must | La interfaz MUST usar una superficie navy oscura, texto claro, acento azul, acento dorado y estado positivo verde. |
| UX-002 | Must | El diseño MUST usar profundidad tonal y bordes sutiles; las tarjetas no deben depender de sombras pesadas. |
| UX-003 | Must | El contenido principal MUST limitarse a 1240px y el contenedor general a 1680px. |
| UX-004 | Must | La sidebar de escritorio MUST medir 288px. |
| UX-005 | Must | Las tarjetas KPI MUST mostrar hasta cuatro columnas en escritorio, dos en tablet y una en móvil. |
| UX-006 | Must | Los tabs MUST permitir scroll horizontal cuando no quepan en móvil. |
| UX-007 | Must | Las figuras de evidencia MUST mantener texto alternativo, borde, radio y espacio reservado. |
| UX-008 | Must | Un gráfico MUST tener una alternativa textual, una tabla o KPIs equivalentes. |
| UX-009 | Must | Los estados de error, vacío y carga MUST explicar qué sucede y permitir que el resto de la pantalla continúe útil. |

### 6.2 Tokens normativos

~~~css
:root {
  --bg-dark: #071426;
  --bg-elevated: #0d1d34;
  --bg-subtle: #0a192d;
  --bg-card: #0d1d34;
  --bg-card-hover: #102440;
  --text-main: #f4f7fb;
  --text-muted: #aebdce;
  --line-subtle: rgba(174, 189, 206, 0.16);
  --brand-blue: #0785cf;
  --brand-blue-light: #5bc4ff;
  --brand-gold: #e5bd22;
  --brand-red: #cd1517;
  --status-positive: #54d99a;
  --border-radius-card: 0.875rem;
  --border-radius-control: 0.65rem;
  --border-radius-pill: 9999px;
  --focus-ring: 3px solid var(--brand-gold);
}
~~~

### 6.3 Tipografía y motion

- Body y controles: Noto Sans, sans-serif.
- Titulares: Noto Serif, serif.
- H1: clamp(2rem, 3vw, 2.75rem), line-height 1.05.
- H2: clamp(1.55rem, 2.3vw, 2rem).
- Texto: 0.84rem a 0.94rem.
- Kicker: 0.68rem a 0.70rem, peso 700, mayúsculas y tracking amplio.
- Transiciones de estado: 180ms ease.
- Drawer móvil: 250ms ease.
- El sistema MUST respetar prefers-reduced-motion.

### 6.4 Responsive

| ID | Breakpoint | Requisito |
|---|---:|---|
| UX-010 | 1024px | KPI pasa de cuatro a dos columnas; paneles de dos columnas se apilan. |
| UX-011 | 900px | Worklog sustituye historial lateral por un select de fecha. |
| UX-012 | 768px | Sidebar se convierte en drawer; KPI pasa a una columna. |
| UX-013 | 700px | El detalle de worklog se apila y no tiene overflow horizontal. |

---

## 7. Requisitos no funcionales

| ID | Prioridad | Requisito |
|---|---|---|
| NFR-001 | Must | El proyecto MUST instalarse y verificarse con npm ci y npm run check. |
| NFR-002 | Must | El build de producción MUST completar sin error. |
| NFR-003 | Must | La UI MUST funcionar a 1440x900, 1024x768, 768x1024 y 390x844. |
| NFR-004 | Must | La interfaz MUST ser operable por teclado. |
| NFR-005 | Must | Los controles MUST tener foco visible de alto contraste. |
| NFR-006 | Must | La aplicación MUST usar lang correcto y regiones semánticas. |
| NFR-007 | Should | LCP debe ser menor a 2.5 segundos, CLS menor a 0.1 e INP menor a 200ms en una medición representativa. |
| NFR-008 | Must | Los datos inválidos MUST filtrarse antes de renderizar. |
| NFR-009 | Must | Las imágenes bajo el primer viewport SHOULD usar carga diferida y reservar espacio. |
| NFR-010 | Must | Cada requisito Must debe tener al menos un criterio de aceptación y una tarea implementadora. |

---

## 8. Contratos de datos

### 8.1 Activity history

Archivo: public/activity_history.json

~~~json
{
  "version": 1,
  "updatedAt": "2026-01-01T00:00:00Z",
  "days": {
    "2026-01-01": [
      {
        "date": "2026-01-01",
        "category": "Categoría",
        "id": "ACT-001",
        "title": "Actividad de ejemplo",
        "owner": "Equipo",
        "status": "Completada"
      }
    ]
  }
}
~~~

| ID | Regla |
|---|---|
| DATA-001 | days MUST ser un objeto indexado por fechas ISO YYYY-MM-DD. |
| DATA-002 | date, category, id, title y owner MUST ser strings no vacíos. |
| DATA-003 | status MAY estar ausente. |
| DATA-004 | Los días y registros inválidos MUST ignorarse. |
| DATA-005 | La fecha inicial MUST ser la mayor clave ISO válida. |

### 8.2 Activity snapshot

Archivo: public/activity_snapshot.json. Debe ser un array de Activity válidos y solo se usa para el fallback de FR-010.

### 8.3 Worklog history

Archivo: public/worklog_history.json

~~~json
{
  "version": 1,
  "updatedAt": "2026-01-01T00:00:00Z",
  "days": {
    "2026-01-01": [
      {
        "id": "2026-01-01-1",
        "date": "2026-01-01",
        "type": "Análisis",
        "title": "Actividad de ejemplo",
        "hours": 1.5
      }
    ]
  }
}
~~~

| ID | Regla |
|---|---|
| DATA-006 | id, type y title MUST ser strings no vacíos. |
| DATA-007 | hours MUST ser un número finito mayor o igual que cero. |
| DATA-008 | La clave del día MUST ser la fecha canónica usada en el render. |
| DATA-009 | Los días sin entradas válidas MUST eliminarse. |
| DATA-010 | primaryType MUST ser el tipo con más horas; los empates se resuelven alfabéticamente. |

### 8.4 API de utilidades

~~~text
getIsoWeek(date) -> number
normalizeActivities(value) -> Activity[]
normalizeActivityHistory(value) -> Record<ISODate, Activity[]>
getLatestDate(history) -> ISODate | ""
normalizeWorklogHistory(value) -> Record<ISODate, WorklogEntry[]>
getWorklogSummary(history) -> { days, entries, totalHours, primaryType }
~~~

---

## 9. Criterios de aceptación verificables

| ID | Requisitos cubiertos | Escenario Given / When / Then | Evidencia |
|---|---|---|---|
| AC-001 | FR-001 | Given una visita a /, when carga la app, then la URL queda en /overview sin una entrada adicional de historial. | Test de router. |
| AC-002 | FR-002, FR-004 | Given cada ruta declarada, when se abre, then se renderiza su módulo y durante el import se expone un estado con role status. | Test de integración. |
| AC-003 | FR-003 | Given una ruta no declarada, when se abre, then aparece un 404 dentro del shell. | Test de integración. |
| AC-004 | FR-006, NFR-004, NFR-005 | Given navegación y tabs, when se usan con teclado, then se puede alcanzar cada control y el foco es visible. | Test E2E + revisión visual. |
| AC-005 | FR-009, DATA-001 a DATA-005 | Given historial válido con varias fechas, when carga Program, then se selecciona la fecha ISO más reciente y se muestran solo entradas válidas. | Unit + integración. |
| AC-006 | FR-010 | Given fallo al pedir activity_history.json y snapshot válido, when carga Program, then se muestran actividades de snapshot y no el error terminal. | Test de integración con fetch mock. |
| AC-007 | FR-013, FR-014, FR-014A, DATA-006 a DATA-010 | Given cada resultado posible de worklog_history.json, when carga Worklog, then muestra loading, error, vacío o bitácora y el resumen coincide con los datos válidos; las prácticas técnicas permanecen disponibles en tabs separados y sus controles cambian solo el detalle relacionado. | Unit + integración. |
| AC-008 | UX-005, UX-010 a UX-013, NFR-003 | Given los cuatro viewports especificados, when se inspecciona cada ruta, then no existe overflow horizontal y los layouts se reorganizan según los breakpoints. | Capturas de regresión visual. |
| AC-009 | UX-008 | Given un gráfico visible, when se revisa su tarjeta, then existe KPI, tabla o resumen textual equivalente. | Revisión de componente. |
| AC-010 | SEC-001 a SEC-005 | Given el contenido versionado para despliegue, when se escanean fuente, JSON y assets, then no se encuentran secretos ni datos de origen. | Revisión automatizada + humana. |
| AC-011 | NFR-001, NFR-002 | Given una instalación limpia, when se ejecuta npm ci y npm run check, then lint, tests y build finalizan correctamente. | Log de CI. |

---

## 10. Diseño de implementación

### 10.1 Componentes

| Componente | Responsabilidad | Requisitos |
|---|---|---|
| DashboardLayout | Sidebar, drawer, header y main. | FR-005, FR-006, UX-004, UX-012 |
| SectionHeading | Kicker, título, descripción y acción opcional. | UX-003 |
| MetricCard | Métrica, contexto e icono. | FR-007, UX-005 |
| TabList | Tabs ARIA, selección y scroll móvil. | FR-008, FR-015, UX-006 |
| ActivityFeed | Historial, selector y elementos de actividad. | FR-009, FR-010, FR-016 |
| ChartCard | Gráfico, título y alternativa textual. | UX-008 |
| EvidenceFigure | Asset público, alt y caption. | UX-007, SEC-002 |
| Worklog | Máquina de estados, resumen, historial y detalle. | FR-013, FR-014 |

### 10.2 Accesibilidad

| ID | Decisión |
|---|---|
| A11Y-001 | La app usa un único main por ruta y navegación con aria-label. |
| A11Y-002 | Los tabs usan role tablist, role tab, aria-selected, aria-controls e IDs asociados. |
| A11Y-003 | El drawer comunica aria-expanded y aria-controls. |
| A11Y-004 | Los iconos decorativos usan aria-hidden true. |
| A11Y-005 | Carga, error y vacío usan una región de estado adecuada. |
| A11Y-006 | El foco usa outline de 3px dorado y offset suficiente. |
| A11Y-007 | Se respeta prefers-reduced-motion. |

### 10.3 Exportador local opcional

El exportador:

1. Acepta una ruta de entrada privada y una salida JSON.
2. Valida estructura y tipos antes de escribir.
3. Elimina campos no permitidos por DATA-001 a DATA-010.
4. Añade version y updatedAt.
5. No copia el archivo fuente al repositorio.

---

## 11. Verificación y comandos

### 11.1 Scripts requeridos

~~~json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "test": "node --test",
    "check": "npm run lint && npm run test && npm run build",
    "preview": "vite preview"
  }
}
~~~

### 11.2 CI

En cada pull request y push a la rama principal, la CI MUST ejecutar:

1. Checkout.
2. Node.js 22.
3. Cache de npm.
4. npm ci.
5. npm run check.

### 11.3 Hosting

~~~toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
~~~

El proveedor elegido debe implementar un rewrite equivalente si no usa Netlify.

---

## 12. Plan de implementación atómico

| ID | Estado | Dependencias | Entregable | Requisitos | Verificación |
|---|---|---|---|---|---|
| TASK-001 | pending | — | Inicialización Vite/React y scripts. | ARCH-001, NFR-001 | AC-011 |
| TASK-002 | pending | TASK-001 | Tokens CSS, reset, tipografía y focus. | UX-001 a UX-004, NFR-005 | AC-004, AC-008 |
| TASK-003 | pending | TASK-001, TASK-002 | Router, lazy imports, fallback y 404. | FR-001 a FR-004 | AC-001 a AC-003 |
| TASK-004 | pending | TASK-002, TASK-003 | DashboardLayout desktop y drawer móvil. | FR-005, FR-006, UX-012, A11Y-003 | AC-004, AC-008 |
| TASK-005 | pending | TASK-001 | Normalizadores, semana ISO y tests unitarios. | DATA-001 a DATA-010, NFR-008 | AC-005, AC-007 |
| TASK-006 | pending | TASK-003, TASK-004, TASK-005 | Overview, KPI y ChartCard. | FR-007, UX-005, UX-008 | AC-008, AC-009 |
| TASK-007 | pending | TASK-003, TASK-004, TASK-005 | Program, tabs, historial y fallback. | FR-008 a FR-010, FR-016 | AC-005, AC-006 |
| TASK-008 | pending | TASK-003, TASK-004 | Learning e Initiatives con fixtures no sensibles. | FR-011, FR-012, UX-007 | AC-002, AC-010 |
| TASK-009 | pending | TASK-003, TASK-004, TASK-005 | Worklog con sus cuatro estados. | FR-013, FR-014, UX-011 | AC-007, AC-008 |
| TASK-010 | pending | TASK-003, TASK-004 | Career y tabs accesibles. | FR-015, UX-006, A11Y-002 | AC-004, AC-008 |
| TASK-011 | pending | TASK-005 | JSON de ejemplo, exportador local y validación. | SEC-002, SEC-003, DATA-* | AC-005, AC-007, AC-010 |
| TASK-012 | pending | TASK-001 a TASK-011 | CI, hosting, revisión responsive y accesibilidad. | ARCH-002, NFR-* | AC-004, AC-008, AC-010, AC-011 |

Una tarea puede dividirse solo si la nueva división conserva dependencia explícita, requisitos vinculados y verificación propia.

---

## 13. Matriz de trazabilidad

| Área | Requisitos | Tareas | Aceptación |
|---|---|---|---|
| Aplicación y routing | FR-001 a FR-004, ARCH-001 a ARCH-003 | TASK-001, TASK-003 | AC-001 a AC-003, AC-011 |
| Shell y navegación | FR-005, FR-006, UX-004, UX-012, A11Y-003 | TASK-002, TASK-004 | AC-004, AC-008 |
| Datos y utilidades | DATA-001 a DATA-010, NFR-008 | TASK-005, TASK-011 | AC-005, AC-007, AC-010 |
| Overview | FR-007, UX-005, UX-008 | TASK-006 | AC-008, AC-009 |
| Program | FR-008 a FR-010, FR-016 | TASK-007 | AC-005, AC-006 |
| Learning e Initiatives | FR-011, FR-012, UX-007 | TASK-008 | AC-002, AC-010 |
| Worklog | FR-013, FR-014, UX-011 | TASK-009 | AC-007, AC-008 |
| Career | FR-015, UX-006, A11Y-002 | TASK-010 | AC-004, AC-008 |
| Seguridad y entrega | SEC-001 a SEC-005, ARCH-002, NFR-001 a NFR-010 | TASK-011, TASK-012 | AC-010, AC-011 |

---

## 14. Protocolo de cambio

Todo cambio posterior sigue este flujo:

1. Proponer el cambio como una modificación concreta de requisito, contrato, criterio o tarea.
2. Identificar IDs afectados en la matriz de trazabilidad.
3. Actualizar esta spec y aumentar su versión:
   - PATCH: clarificación sin cambio funcional.
   - MINOR: requisito o capacidad compatible.
   - MAJOR: cambio incompatible de contrato, navegación o seguridad.
4. Implementar únicamente después de aprobar la spec actualizada.
5. Actualizar tests, criterios de aceptación y tareas afectadas.
6. Ejecutar las verificaciones.

Cambios prohibidos sin actualización previa de spec:

- Nuevas rutas.
- Nuevos campos de datos.
- Nuevas dependencias.
- Cambio de comportamiento responsive.
- Cambio de postura de privacidad.
- Inclusión de contenido real.

---

## 15. Definition of Done

La implementación se considera completa solo cuando:

- Todas las tareas TASK-001 a TASK-012 están en estado done.
- Todos los criterios AC-001 a AC-011 tienen evidencia de ejecución.
- npm ci y npm run check pasan en una instalación limpia.
- Las rutas profundas funcionan en hosting.
- La revisión responsive cubre los cuatro viewports requeridos.
- La revisión de accesibilidad confirma navegación por teclado, foco y estados semánticos.
- La revisión de seguridad confirma SEC-001 a SEC-005.
- La matriz de trazabilidad no contiene requisitos Must sin tarea ni criterio asociado.

# AGENTS.md — Guía operativa para agentes en Dashboard

## 1. Rol

Este repositorio contiene un dashboard web personal de seguimiento profesional. Tu tarea como agente es convertir las instrucciones del usuario en cambios correctos, visibles y verificables dentro del dashboard.

Trabaja sobre la sección concreta indicada por el usuario y conserva el funcionamiento de las demás. Cuando una instrucción afecte más de una sección, identifica el alcance antes de editar y modifica únicamente los módulos necesarios.

Después de cada cambio lógico completado, validado y autorizado por el usuario, debes crear un commit intencional y hacer push a origin/main. Netlify despliega automáticamente los cambios enviados a main.

## 2. Fuente de verdad y prioridades

Usa esta jerarquía para tomar decisiones:

1. La instrucción más reciente del usuario.
2. Este archivo AGENTS.md.
3. Los contratos y criterios aplicables de SDD.md.
4. La implementación y los patrones existentes en src/.
5. README.md, scripts de actualización y configuración de CI/despliegue.

Si una solicitud cambia el alcance, las rutas, los contratos de datos, la privacidad o un criterio de aceptación documentado en SDD.md, actualiza primero el SDD y luego el código, las pruebas y la documentación afectada.

SDD.md describe una base Spec-Driven reutilizable y neutral. No sustituye las rutas actuales del dashboard ni autoriza reemplazarlas por rutas genéricas sin una instrucción explícita del usuario.

## 3. Secciones actuales del dashboard

| Ruta | Sección visible | Archivo principal | Propósito |
|---|---|---|---|
| /avangrid | AvanGrid | src/pages/AvanGrid.jsx | Automatización, actividad diaria, métricas y gráficos. |
| /studio-qa | Studio QA | src/pages/StudioQA.jsx | Formaciones y sesiones prácticas. |
| /innovacion | Asesorías QA | src/pages/Innovacion.jsx | Asesorías, pruebas de concepto e iniciativas. |
| /ia | Inteligencia Artificial | src/pages/InteligenciaArtificial.jsx | Hitos, herramientas, eventos e iniciativas de IA. |
| /metlife | MetLife | src/pages/MetLife.jsx | Bitácora diaria e historial de horas. |
| /career | Mapa de Talento | src/pages/CareerPath.jsx | Perfil, evidencias y proyección profesional. |

La raíz / redirige a /avangrid. No cambies esta redirección, rutas, etiquetas de navegación ni el orden del menú salvo que el usuario lo pida explícitamente.

Nota: el nombre de la sección implementada es AvanGrid y MetLife; si una instrucción usa una variante ortográfica, interpreta el destino por contexto y conserva la nomenclatura existente en código.

## 4. Arquitectura y archivos relevantes

~~~text
src/
├─ App.jsx                        # Router, rutas lazy y fallback global
├─ index.css                      # Tokens, estilos globales, responsive y componentes
├─ components/
│  ├─ DashboardLayout.jsx          # Sidebar, header global y menú móvil
│  └─ WeeklyProgress.jsx           # Bloque semanal de AvanGrid
├─ pages/
│  ├─ AvanGrid.jsx
│  ├─ StudioQA.jsx
│  ├─ Innovacion.jsx
│  ├─ InteligenciaArtificial.jsx
│  ├─ MetLife.jsx
│  └─ CareerPath.jsx
└─ utils/dashboard.js              # Fechas, normalización y resúmenes puros

public/
├─ task_history.json               # Historial de tareas de AvanGrid
├─ daily_tasks.json                # Fallback de la última actualización
├─ metlife_task_history.json       # Historial diario de MetLife
└─ archivos de imagen              # Assets públicos autorizados

test/dashboard.test.mjs            # Tests de utilidades
update_dashboard_tasks.py          # Exportador local de tareas AvanGrid
update_metlife_tasks.py            # Exportador local de registro MetLife
netlify.toml                       # Build, publicación y rewrite SPA
~~~

## 5. Flujo obligatorio para cada cambio

1. Entender el alcance.
   - Lee los archivos de la sección afectada y los estilos/componentes que utiliza.
   - Revisa git status --short antes de editar.
   - Preserva cambios ajenos existentes. No los reviertas, borres ni incluyas en tu commit.

2. Planificar cuando corresponde.
   - Para una modificación pequeña y localizada, implementa directamente.
   - Para un cambio de varias rutas, contrato JSON, comportamiento responsive o diseño transversal, actualiza primero SDD.md siguiendo su protocolo de cambio.
   - No inventes contenido factual, métricas, fechas, nombres, evidencias ni estados. Pide el dato al usuario si es indispensable.

3. Implementar.
   - Usa apply_patch para editar archivos.
   - Conserva el idioma español y la codificación UTF-8.
   - Mantén componentes pequeños, semánticos y consistentes con los patrones existentes.
   - Cambia CSS en src/index.css salvo que exista una razón clara para crear un archivo de estilo nuevo.
   - Para una nueva ruta, actualiza src/App.jsx, DashboardLayout.jsx, el archivo de página, los estilos y las redirecciones/configuración si aplica.

4. Verificar.
   - Ejecuta npm run check para cambios de código o configuración.
   - Añade o actualiza tests de test/dashboard.test.mjs si cambias src/utils/dashboard.js o contratos de datos.
   - Comprueba estados loading, error y vacío cuando modifiques AvanGrid o MetLife.
   - Revisa la interfaz en desktop y móvil cuando cambies UI, estilos, navegación, gráficos, tabs o responsive.

5. Entregar y desplegar.
   - Revisa el diff para asegurar que solo contiene archivos del cambio solicitado.
   - Crea un commit descriptivo y atómico.
   - Haz push a origin/main.
   - Comprueba que el push terminó correctamente y comunica el hash del commit y el resultado de la verificación.

No hagas push si la verificación falla, si el cambio contiene datos sensibles, o si el usuario ha pedido explícitamente no desplegar. Explica el bloqueo y corrígelo antes de continuar.

## 6. Git, GitHub y Netlify

- Rama de despliegue: main.
- Remoto de despliegue: origin, configurado hacia el repositorio de GitHub.
- Cada push a main activa GitHub Actions y el despliegue de Netlify.
- Netlify ejecuta npm run build y publica dist.
- netlify.toml debe conservar el rewrite de todas las rutas a index.html para que React Router funcione al abrirse directamente.

### Reglas de Git

- Usa commits convencionales y descriptivos: feat:, fix:, docs:, style:, refactor: o test:.
- Un commit debe representar una sola intención verificable.
- Antes de hacer commit, revisa git diff --check, git diff --staged y git status --short.
- Nunca uses git reset --hard, git checkout --, git clean, force push ni reescritura de historial sin una instrucción explícita del usuario.
- No incluyas archivos generados, locales, privados o cambios de otra persona.
- No asumas que un commit previo está desplegado: la fuente de publicación es el push exitoso a origin/main.

## 7. Datos, scripts y privacidad

El repositorio y el sitio son públicos. Trata los siguientes archivos como datos públicos:

- Todo lo incluido en public/.
- Cualquier texto de JSX, CSS, JSON, README, SDD o assets.
- Cualquier salida construida en dist/.

### AvanGrid

- src/pages/AvanGrid.jsx solicita primero public/task_history.json.
- Si falla, usa public/daily_tasks.json como fallback.
- El historial usa fechas YYYY-MM-DD y muestra por defecto la más reciente.
- update_dashboard_tasks.py actualiza la vista diaria y solo reemplaza el día procesado en el historial.

### MetLife

- src/pages/MetLife.jsx solicita public/metlife_task_history.json.
- La página debe mantener los estados de carga, error, sin datos y lista.
- El extracto permitido contiene fecha, tipo, tarea y horas; no agregues campos internos sin autorización.
- update_metlife_tasks.py lee localmente una hoja Registro; el libro fuente no se sube al repositorio.

### Reglas de privacidad

- No subas Excel, PDF, documentos internos, credenciales, tokens, enlaces privados, identificadores personales ni evidencias no aprobadas.
- Antes de agregar una imagen, confirma que puede ser pública y que no contiene información sensible.
- Borrar un archivo en un commit posterior no elimina su contenido del historial Git. Si hay una filtración, detén el despliegue y pide instrucciones.
- Nunca renderices contenido externo con dangerouslySetInnerHTML.

## 8. Diseño y accesibilidad

Mantén el lenguaje visual existente:

- Fondo azul profundo y superficies tonales.
- Tipografía Noto Sans para UI y Noto Serif para titulares.
- Azul como acento primario, dorado para foco/énfasis y verde para estados positivos o MetLife.
- Tarjetas con borde sutil y radio moderado; no agregues sombras pesadas ni animaciones innecesarias.
- Sidebar fija en escritorio y drawer accesible en móvil.

Requisitos obligatorios:

- Todos los controles deben poder usarse con teclado.
- Mantén foco visible mediante :focus-visible.
- Usa HTML semántico, aria-label, aria-selected, aria-controls y aria-expanded donde corresponda.
- Los iconos decorativos llevan aria-hidden="true".
- Los gráficos deben tener una alternativa textual, KPI o tabla.
- Respeta prefers-reduced-motion.
- Asegura que no exista overflow horizontal a 390px de ancho.

| Ancho máximo | Comportamiento |
|---:|---|
| 1024px | Grillas de cuatro columnas pasan a dos; paneles se apilan. |
| 900px | MetLife usa selector de fecha en lugar de historial lateral. |
| 768px | Sidebar se convierte en drawer; grillas principales pasan a una columna. |
| 700px | Detalle de MetLife se apila completamente. |

## 9. Comandos

~~~bash
# Instalar dependencias
npm ci

# Desarrollo local
npm run dev

# Calidad completa: lint + test + build
npm run check

# Actualizar datos desde fuentes locales autorizadas
python -m pip install -r requirements.txt
python update_dashboard_tasks.py --excel "ruta/local/autorizada.xlsx"
python update_metlife_tasks.py --excel "ruta/local/autorizada.xlsx"
~~~

## 10. Criterios mínimos antes de push

Para cualquier cambio de código:

- [ ] El alcance es explícito y está limitado a la solicitud.
- [ ] No se modificaron ni incluyeron cambios ajenos.
- [ ] npm run check pasó.
- [ ] Las rutas afectadas cargan sin error.
- [ ] Los cambios de UI se revisaron en desktop y móvil.
- [ ] No hay datos sensibles nuevos.
- [ ] El diff está limpio y el commit es descriptivo.
- [ ] El commit fue enviado exitosamente a origin/main.

Para cambios solo de documentación, valida enlaces, rutas y consistencia del contenido antes de commit y push.

## 11. Comunicación

Durante el trabajo:

- Explica brevemente qué parte del dashboard se está modificando.
- Comunica supuestos relevantes antes de tomarlos si alteran el alcance.
- Reporta errores de verificación con evidencia concreta.
- Al terminar, indica archivos modificados, validaciones ejecutadas, hash de commit y confirmación de push/despliegue.

No declares una tarea terminada antes de que el commit y el push hayan sido exitosos, salvo que el usuario haya solicitado explícitamente no desplegar.

/**
 * THESIS: MetLife conecta la bitácora diaria con dos prácticas agénticas sin mezclar sus ritmos.
 * OWN-WORLD: Azul profundo heredado, líneas sobrias y verde MetLife para selección, tiempo y estados de proceso.
 * STORY: Consultar horas, entender cómo se automatizan pruebas y revisar la arquitectura de desarrollo agéntico.
 * FIRST VIEWPORT: Encabezado, pestañas de propósito y la bitácora abierta como vista predeterminada.
 * FORM: Extensión Operate; registro cronológico para la operación y guías breves para capacidades técnicas.
 */
import { useEffect, useMemo, useState } from 'react'
import {
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GitPullRequest,
  History,
  Play,
  RefreshCw,
  Wrench,
  Workflow,
} from 'lucide-react'
import {
  getLatestMetlifeDate,
  getMetlifeSummary,
  normalizeMetlifeHistory,
  splitMetlifeHistoryByPeriod,
} from '../utils/dashboard'

const fullDateFormatter = new Intl.DateTimeFormat('es-CL', {
  dateStyle: 'full',
  timeZone: 'UTC',
})

const shortDateFormatter = new Intl.DateTimeFormat('es-CL', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
})

const weekdayFormatter = new Intl.DateTimeFormat('es-CL', {
  weekday: 'long',
  timeZone: 'UTC',
})

const periodFormatter = new Intl.DateTimeFormat('es-CL', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

const metlifeTabs = [
  { id: 'worklog', label: 'Bitácora diaria' },
  { id: 'testing', label: 'Pruebas agénticas' },
  { id: 'development', label: 'Desarrollo agéntico' },
]

const testingStages = [
  {
    id: 'brief',
    label: 'Brief funcional',
    eyebrow: 'Punto de partida',
    title: 'Un prompt sitúa el objetivo, no reemplaza el proceso',
    description: 'El caso se inicia con el escenario, la ruta funcional y el criterio de éxito. El detalle operativo queda en las instrucciones y procedimientos reutilizables.',
    tools: 'Prompt de objetivo · instrucciones · skill especializada',
    deliverable: 'Alcance de prueba claro y verificable',
  },
  {
    id: 'context',
    label: 'Contexto del framework',
    eyebrow: 'Antes de modificar',
    title: 'Las reglas de calidad se recuperan antes de escribir código',
    description: 'El agente consulta convenciones de estructura, prácticas de mantenibilidad y criterios de evidencia para decidir cómo debe resolverse el caso.',
    tools: 'Contexto del repositorio · instrucciones · skills',
    deliverable: 'Plan alineado con el framework',
  },
  {
    id: 'grounding',
    label: 'Navegación real',
    eyebrow: 'Grounding',
    title: 'La interfaz aporta evidencia para evitar selectores supuestos',
    description: 'La navegación asistida permite observar roles, textos, estados y flujos reales antes de generar o actualizar la automatización.',
    tools: 'Playwright MCP · estructura accesible · navegación controlada',
    deliverable: 'Elementos y recorrido corroborados',
  },
  {
    id: 'validation',
    label: 'Ejecución y ajuste',
    eyebrow: 'Cierre',
    title: 'Una prueba termina cuando deja evidencia de ejecución',
    description: 'El caso se ejecuta, los hallazgos se analizan y los ajustes se revalidan para que el resultado sea revisable y mantenible.',
    tools: 'Ejecución · reporte · trazas · nueva validación',
    deliverable: 'Prueba ejecutada con evidencia disponible',
  },
]

const developmentLayers = [
  {
    id: 'governance',
    label: 'Gobernanza',
    title: 'Instrucciones que delimitan la forma de trabajar',
    description: 'Las reglas globales definen seguridad, límites, estándares y la forma de reportar antes de que un agente modifique un repositorio.',
    detail: 'Evita que las decisiones de riesgo queden implícitas o dependan de la conversación.',
  },
  {
    id: 'rag',
    label: 'Contexto RAG',
    title: 'Conocimiento recuperable para cada caso técnico',
    description: 'Documentación de migración, pruebas, restricciones y antecedentes se preparan como contexto específico antes de intervenir un aplicativo.',
    detail: 'El agente trabaja con información vigente y pertinente, no con suposiciones.',
  },
  {
    id: 'skills',
    label: 'Skills y agente',
    title: 'Un rol especializado convierte conocimiento en procedimiento',
    description: 'El archivo del agente declara objetivo, herramientas, restricciones y criterios de salida; las skills ordenan los pasos repetibles.',
    detail: 'La capacidad se versiona y se puede mejorar sin empezar desde un prompt aislado.',
  },
  {
    id: 'execution',
    label: 'Herramientas',
    title: 'La intervención usa acciones verificables',
    description: 'Lectura, búsqueda, edición, compilación, pruebas y Git se usan solo cuando el contexto y los límites ya están definidos.',
    detail: 'La salida combina cambios mínimos, validación técnica e informe accionable.',
  },
]

function asUtcDate(date) {
  return new Date(`${date}T12:00:00Z`)
}

function formatHours(hours) {
  return `${new Intl.NumberFormat('es-CL', { maximumFractionDigits: 1 }).format(hours)} h`
}

function capitalize(value) {
  return value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : ''
}

const MetLife = () => {
  const [history, setHistory] = useState({})
  const [selectedDate, setSelectedDate] = useState('')
  const [loadState, setLoadState] = useState('loading')
  const [activeTab, setActiveTab] = useState('worklog')
  const [selectedTestingStage, setSelectedTestingStage] = useState('brief')
  const [selectedDevelopmentLayer, setSelectedDevelopmentLayer] = useState('governance')

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}metlife_task_history.json`)
      .then((response) => {
        if (!response.ok) throw new Error('No se pudo cargar el registro de MetLife')
        return response.json()
      })
      .then((data) => {
        const normalizedHistory = normalizeMetlifeHistory(data)
        setHistory(normalizedHistory)
        setSelectedDate(getLatestMetlifeDate(normalizedHistory))
        setLoadState('ready')
      })
      .catch(() => setLoadState('error'))
  }, [])

  const dates = useMemo(() => Object.keys(history).sort().reverse(), [history])
  const { activePeriod, activeHistory, historicalPeriods } = useMemo(
    () => splitMetlifeHistoryByPeriod(history),
    [history],
  )
  const activeDates = useMemo(() => Object.keys(activeHistory).sort().reverse(), [activeHistory])
  const selectedTasks = activeHistory[selectedDate] ?? []
  const summary = useMemo(() => getMetlifeSummary(activeHistory), [activeHistory])
  const selectedHours = selectedTasks.reduce((total, task) => total + task.hours, 0)
  const maxDailyHours = Math.max(
    1,
    ...activeDates.map((date) => activeHistory[date].reduce((total, task) => total + task.hours, 0)),
  )
  const activePeriodLabel = activePeriod
    ? capitalize(periodFormatter.format(asUtcDate(`${activePeriod}-01`)))
    : ''
  const testingStage = testingStages.find((stage) => stage.id === selectedTestingStage) ?? testingStages[0]
  const developmentLayer = developmentLayers.find((layer) => layer.id === selectedDevelopmentLayer) ?? developmentLayers[0]

  return (
    <div className="metlife-daily">
      <header className="section-heading metlife-heading">
        <div>
          <p className="section-kicker">Registro operativo</p>
          <h2>MetLife</h2>
          <p>Bitácora diaria y prácticas de agentización para pruebas automatizadas y desarrollo técnico.</p>
        </div>
        <div className="metlife-source" aria-label="Alcance de la sección">
          <RefreshCw size={15} aria-hidden="true" />
          <span>Bitácora y capacidades agénticas</span>
        </div>
      </header>

      <div className="tab-list metlife-tabs" role="tablist" aria-label="Vistas de MetLife">
        {metlifeTabs.map((tab) => (
          <button
            key={tab.id}
            id={`metlife-tab-${tab.id}`}
            type="button"
            role="tab"
            className="tab-button"
            aria-selected={activeTab === tab.id}
            aria-controls={`metlife-panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'testing' && (
        <section
          id="metlife-panel-testing"
          className="metlife-agentization"
          role="tabpanel"
          aria-labelledby="metlife-tab-testing"
        >
          <header className="metlife-agentization__intro">
            <div>
              <p className="section-kicker">Automatización de pruebas</p>
              <h3>De la intención funcional a una prueba validada</h3>
              <p>
                Una práctica asistida por IA que combina instrucciones, skills y herramientas de navegación para
                convertir un objetivo funcional en un caso ejecutable y revisable.
              </p>
            </div>
            <div className="metlife-agentization__signal">
              <Bot size={20} aria-hidden="true" />
              <span>Pruebas con contexto y evidencia</span>
            </div>
          </header>

          <section className="metlife-agentization__explorer" aria-labelledby="testing-flow-heading">
            <div className="metlife-agentization__explorer-heading">
              <p className="section-kicker">Orquestación del caso</p>
              <h4 id="testing-flow-heading">Explora cómo avanza una prueba asistida</h4>
              <p>Selecciona una fase para revisar qué información activa al agente y cuál es el resultado esperado.</p>
            </div>

            <div className="metlife-agentization__stage-list" aria-label="Fases del flujo de pruebas">
              {testingStages.map((stage, index) => {
                const isSelected = stage.id === selectedTestingStage

                return (
                  <button
                    key={stage.id}
                    type="button"
                    className={`metlife-agentization__stage ${isSelected ? 'is-selected' : ''}`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedTestingStage(stage.id)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{stage.label}</strong>
                  </button>
                )
              })}
            </div>

            <article className="metlife-agentization__stage-detail" aria-live="polite">
              <p>{testingStage.eyebrow}</p>
              <h4>{testingStage.title}</h4>
              <p>{testingStage.description}</p>
              <dl>
                <div>
                  <dt>Recursos activados</dt>
                  <dd>{testingStage.tools}</dd>
                </div>
                <div>
                  <dt>Salida de la fase</dt>
                  <dd>{testingStage.deliverable}</dd>
                </div>
              </dl>
            </article>
          </section>

          <section className="metlife-agentization__principles" aria-labelledby="testing-principles-heading">
            <div>
              <p className="section-kicker">Calidad incorporada</p>
              <h4 id="testing-principles-heading">Lo que vuelve reutilizable al flujo</h4>
            </div>
            <ul>
              <li><strong>Contexto explícito</strong><span>Las reglas del framework acompañan cada caso.</span></li>
              <li><strong>Interacción comprobable</strong><span>Los elementos se contrastan con la interfaz antes de automatizar.</span></li>
              <li><strong>Evidencia revisable</strong><span>La ejecución y sus hallazgos forman parte de la entrega.</span></li>
            </ul>
          </section>

          <aside className="metlife-agentization__note">
            <CheckCircle2 size={20} aria-hidden="true" />
            <p>El resultado esperado no es solo código generado: es una prueba que puede explicarse, ejecutarse, mantenerse y revisarse sin depender del historial del chat.</p>
          </aside>
        </section>
      )}

      {activeTab === 'development' && (
        <section
          id="metlife-panel-development"
          className="metlife-agentization"
          role="tabpanel"
          aria-labelledby="metlife-tab-development"
        >
          <header className="metlife-agentization__intro">
            <div>
              <p className="section-kicker">Agentización del desarrollo</p>
              <h3>Capacidades técnicas con autonomía gobernada</h3>
              <p>
                Agentes especializados para apoyar migración, saneamiento y reparación, con objetivos, límites,
                herramientas y evidencia definidos desde el inicio.
              </p>
            </div>
            <div className="metlife-agentization__signal">
              <Workflow size={20} aria-hidden="true" />
              <span>Contexto, guardrails y validación</span>
            </div>
          </header>

          <section className="metlife-agentization__explorer metlife-agentization__explorer--development" aria-labelledby="development-map-heading">
            <div className="metlife-agentization__explorer-heading">
              <p className="section-kicker">Arquitectura agéntica</p>
              <h4 id="development-map-heading">Una capacidad se construye por capas</h4>
              <p>Selecciona un componente para conocer su rol dentro de una intervención técnica gobernada.</p>
            </div>

            <div className="metlife-agentization__layer-map" aria-label="Componentes de la arquitectura agéntica">
              {developmentLayers.map((layer) => {
                const isSelected = layer.id === selectedDevelopmentLayer

                return (
                  <button
                    key={layer.id}
                    type="button"
                    className={`metlife-agentization__layer ${isSelected ? 'is-selected' : ''}`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedDevelopmentLayer(layer.id)}
                  >
                    {layer.label}
                  </button>
                )
              })}
              <div className="metlife-agentization__agent-core" aria-hidden="true">
                <Bot size={21} />
                <span>Agente especializado</span>
              </div>
            </div>

            <article className="metlife-agentization__stage-detail" aria-live="polite">
              <p>Componente seleccionado</p>
              <h4>{developmentLayer.title}</h4>
              <p>{developmentLayer.description}</p>
              <div className="metlife-agentization__detail-callout">{developmentLayer.detail}</div>
            </article>
          </section>

          <div className="metlife-agentization__capabilities">
            <article>
              <Workflow size={20} aria-hidden="true" />
              <h4>Arquitectura contextual</h4>
              <p>Las instrucciones, el RAG, las skills, el agente y sus herramientas separan reglas, conocimiento y ejecución para lograr resultados trazables y transferibles.</p>
            </article>
            <article>
              <Wrench size={20} aria-hidden="true" />
              <h4>Reparación post-migración</h4>
              <p>El agente analiza código y configuración, verifica prerrequisitos, levanta el aplicativo, ejecuta smoke tests, diagnostica fallas y aplica el cambio mínimo verificable.</p>
            </article>
            <article>
              <GitPullRequest size={20} aria-hidden="true" />
              <h4>Remediación de ramas</h4>
              <p>El agente más reciente usa GitHub CLI para remediar ramas, crear pull requests y ejecutar validaciones previas a la integración a main.</p>
            </article>
          </div>

          <section className="metlife-agentization__principles" aria-labelledby="development-principles-heading">
            <div>
              <p className="section-kicker">Criterio de salida</p>
              <h4 id="development-principles-heading">Una intervención técnica deja tres resultados</h4>
            </div>
            <ul>
              <li><strong>Cambio mínimo</strong><span>Solo se modifica lo necesario para resolver el hallazgo.</span></li>
              <li><strong>Validación técnica</strong><span>Build, ejecución o smoke tests confirman lo que realmente se verificó.</span></li>
              <li><strong>Informe accionable</strong><span>El resultado comunica causa, corrección, evidencia y pendientes.</span></li>
            </ul>
          </section>

          <aside className="metlife-agentization__note">
            <Play size={20} aria-hidden="true" />
            <p>La automatización sistematiza tareas repetibles; las decisiones de riesgo, los cambios de lógica de negocio y la aceptación final permanecen bajo revisión humana.</p>
          </aside>
        </section>
      )}

      {activeTab === 'worklog' && (
        <section id="metlife-panel-worklog" role="tabpanel" aria-labelledby="metlife-tab-worklog">
          {loadState === 'loading' && (
            <section className="metlife-loading" aria-live="polite" aria-label="Cargando registro de MetLife">
              <span />
              <span />
              <span />
            </section>
          )}

          {loadState === 'error' && (
            <section className="metlife-message" role="status">
              <History size={22} aria-hidden="true" />
              <div>
                <h3>No pudimos cargar el historial</h3>
                <p>Las prácticas de agentización siguen disponibles. Regenera el extracto de MetLife e inténtalo nuevamente.</p>
              </div>
            </section>
          )}

          {loadState === 'ready' && dates.length === 0 && (
            <section className="metlife-message" role="status">
              <CalendarDays size={22} aria-hidden="true" />
              <div>
                <h3>Aún no hay actividades registradas</h3>
                <p>Cuando la hoja Registro contenga tareas con fecha y horas, aparecerán aquí por día.</p>
              </div>
            </section>
          )}

          {loadState === 'ready' && dates.length > 0 && (
        <>
          <section className="metlife-overview" aria-label="Resumen del registro de MetLife">
            <div className="metlife-overview__lead">
              <Clock3 size={22} aria-hidden="true" />
              <div>
                <strong>{formatHours(summary.totalHours)}</strong>
                <span>registradas en {activePeriodLabel}</span>
              </div>
            </div>
            <dl className="metlife-overview__facts">
              <div>
                <dt>Días activos</dt>
                <dd>{summary.days}</dd>
              </div>
              <div>
                <dt>Tareas registradas</dt>
                <dd>{summary.tasks}</dd>
              </div>
              <div>
                <dt>Foco principal</dt>
                <dd>{summary.primaryType}</dd>
              </div>
            </dl>
          </section>

          <label className="metlife-mobile-picker" htmlFor="metlife-history-date">
            <span>Consultar jornada de {activePeriodLabel}</span>
            <select
              id="metlife-history-date"
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
            >
              {activeDates.map((date) => (
                <option key={date} value={date}>
                  {fullDateFormatter.format(asUtcDate(date))}
                </option>
              ))}
            </select>
          </label>

          <section className="metlife-worklog" aria-label={`Registro diario de ${activePeriodLabel}`}>
            <aside className="metlife-history">
              <div className="metlife-history__heading">
                <History size={18} aria-hidden="true" />
                <div>
                  <h3>{activePeriodLabel}</h3>
                  <p>Período activo · selecciona un día</p>
                </div>
              </div>
              <nav aria-label="Fechas con actividad registrada">
                {activeDates.map((date) => {
                  const dailyHours = activeHistory[date].reduce((total, task) => total + task.hours, 0)
                  const isSelected = date === selectedDate

                  return (
                    <button
                      key={date}
                      type="button"
                      className={`metlife-day ${isSelected ? 'is-selected' : ''}`}
                      aria-pressed={isSelected}
                      onClick={() => setSelectedDate(date)}
                    >
                      <span className="metlife-day__date">
                        <strong>{shortDateFormatter.format(asUtcDate(date))}</strong>
                        <small>{capitalize(weekdayFormatter.format(asUtcDate(date)))}</small>
                      </span>
                      <span className="metlife-day__effort">
                        <span
                          className="metlife-day__bar"
                          style={{ '--day-effort': `${(dailyHours / maxDailyHours) * 100}%` }}
                          aria-hidden="true"
                        />
                        <strong>{formatHours(dailyHours)}</strong>
                      </span>
                    </button>
                  )
                })}
              </nav>
            </aside>

            <article className="metlife-day-detail" aria-live="polite">
              <header className="metlife-day-detail__header">
                <div>
                  <p>Jornada de {activePeriodLabel}</p>
                  <h3>{capitalize(fullDateFormatter.format(asUtcDate(selectedDate)))}</h3>
                </div>
                <div className="metlife-day-total">
                  <strong>{formatHours(selectedHours)}</strong>
                  <span>{selectedTasks.length === 1 ? '1 actividad' : `${selectedTasks.length} actividades`}</span>
                </div>
              </header>

              <ol className="metlife-activity-list">
                {selectedTasks.map((task) => (
                  <li key={task.id} className="metlife-activity">
                    <span className="metlife-activity__marker" aria-hidden="true" />
                    <div>
                      <span className="metlife-activity__type">{task.type}</span>
                      <h4>{task.title}</h4>
                    </div>
                    <strong className="metlife-activity__hours">{formatHours(task.hours)}</strong>
                  </li>
                ))}
              </ol>
            </article>
          </section>

          {historicalPeriods.length > 0 && (
            <section className="metlife-archive" aria-label="Historial de períodos anteriores">
              <div className="metlife-archive__heading">
                <History size={18} aria-hidden="true" />
                <div>
                  <h3>Historial</h3>
                  <p>Períodos cerrados</p>
                </div>
              </div>

              <div className="metlife-archive__periods">
                {historicalPeriods.map(([period, periodHistory]) => {
                  const periodSummary = getMetlifeSummary(periodHistory)
                  const periodDates = Object.keys(periodHistory).sort().reverse()
                  const periodLabel = capitalize(periodFormatter.format(asUtcDate(`${period}-01`)))

                  return (
                    <details key={period} className="metlife-archive-period">
                      <summary>
                        <span>
                          <strong>{periodLabel}</strong>
                          <small>{periodSummary.tasks} tareas · {periodSummary.days} días</small>
                        </span>
                        <b>{formatHours(periodSummary.totalHours)}</b>
                      </summary>
                      <ol>
                        {periodDates.flatMap((date) => periodHistory[date].map((task) => (
                          <li key={task.id}>
                            <time dateTime={date}>{shortDateFormatter.format(asUtcDate(date))}</time>
                            <span>{task.type}</span>
                            <p>{task.title}</p>
                            <strong>{formatHours(task.hours)}</strong>
                          </li>
                        )))}
                      </ol>
                    </details>
                  )
                })}
              </div>
            </section>
          )}
            </>
          )}
        </section>
      )}
    </div>
  )
}

export default MetLife

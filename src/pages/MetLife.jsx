/**
 * THESIS: MetLife se entiende como una bitácora diaria, no como un informe estático.
 * OWN-WORLD: Azul profundo heredado, líneas sobrias y verde MetLife solo para selección y tiempo.
 * STORY: Ver el último día, dimensionar el esfuerzo y recorrer fechas anteriores sin abrir Excel.
 * FIRST VIEWPORT: Encabezado, resumen lineal y registro dividido entre historial y detalle.
 * FORM: Extensión Operate del dashboard; historial cronológico compacto y detalle plano.
 */
import { useEffect, useMemo, useState } from 'react'
import { CalendarDays, Clock3, History, RefreshCw } from 'lucide-react'
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

  return (
    <div className="metlife-daily">
      <header className="section-heading metlife-heading">
        <div>
          <p className="section-kicker">Registro operativo</p>
          <h2>MetLife</h2>
          <p>Actividad diaria y tiempo dedicado del período activo, con meses anteriores disponibles como historial.</p>
        </div>
        <div className="metlife-source" aria-label="Origen de los datos">
          <RefreshCw size={15} aria-hidden="true" />
          <span>Extraído de hoja Registro</span>
        </div>
      </header>

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
            <p>El resto del dashboard sigue disponible. Regenera el extracto de MetLife e inténtalo nuevamente.</p>
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
    </div>
  )
}

export default MetLife

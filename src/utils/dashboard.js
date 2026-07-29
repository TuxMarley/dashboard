export function getIsoWeek(date) {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const day = utcDate.getUTCDay() || 7

  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1))

  return Math.ceil((((utcDate - yearStart) / 86400000) + 1) / 7)
}

export function normalizeTasks(value) {
  if (!Array.isArray(value)) return []

  return value.filter((task) => (
    task
    && typeof task.date === 'string'
    && typeof task.sheet === 'string'
    && typeof task.key === 'string'
    && typeof task.name === 'string'
    && typeof task.assigned === 'string'
  ))
}

export function normalizeTaskHistory(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}

  const days = value.days && typeof value.days === 'object' ? value.days : value

  return Object.fromEntries(
    Object.entries(days)
      .filter(([date]) => /^\d{4}-\d{2}-\d{2}$/.test(date))
      .map(([date, tasks]) => [date, normalizeTasks(tasks)]),
  )
}

export function getLatestTaskDate(history) {
  return Object.keys(history).sort().at(-1) ?? ''
}

export function normalizeMetlifeHistory(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}

  const days = value.days && typeof value.days === 'object' ? value.days : value

  return Object.fromEntries(
    Object.entries(days)
      .filter(([date, tasks]) => /^\d{4}-\d{2}-\d{2}$/.test(date) && Array.isArray(tasks))
      .map(([date, tasks]) => [
        date,
        tasks
          .filter((task) => (
            task
            && typeof task.id === 'string'
            && typeof task.type === 'string'
            && typeof task.title === 'string'
            && Number.isFinite(task.hours)
            && task.hours >= 0
          ))
          .map((task) => ({
            id: task.id,
            date,
            type: task.type,
            title: task.title,
            hours: task.hours,
          })),
      ])
      .filter(([, tasks]) => tasks.length > 0),
  )
}

export function getLatestMetlifeDate(history) {
  return Object.keys(history).sort().at(-1) ?? ''
}

export function getMetlifeSummary(history) {
  const tasks = Object.values(history).flat()
  const hoursByType = new Map()

  for (const task of tasks) {
    hoursByType.set(task.type, (hoursByType.get(task.type) ?? 0) + task.hours)
  }

  const primaryType = [...hoursByType.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] ?? 'Sin actividad'

  return {
    days: Object.keys(history).length,
    tasks: tasks.length,
    totalHours: tasks.reduce((total, task) => total + task.hours, 0),
    primaryType,
  }
}

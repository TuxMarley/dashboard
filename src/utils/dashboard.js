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

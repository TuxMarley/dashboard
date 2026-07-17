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

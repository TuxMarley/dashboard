import test from 'node:test'
import assert from 'node:assert/strict'
import { getIsoWeek, getLatestTaskDate, normalizeTaskHistory, normalizeTasks } from '../src/utils/dashboard.js'

test('getIsoWeek uses ISO-8601 week numbering at year boundaries', () => {
  assert.equal(getIsoWeek(new Date(2026, 6, 17)), 29)
  assert.equal(getIsoWeek(new Date(2021, 0, 1)), 53)
})

test('task history preserves valid dated snapshots and finds the latest date', () => {
  const history = normalizeTaskHistory({
    version: 1,
    days: {
      '2026-07-15': [{ date: '2026-07-15', sheet: 'Autopay', key: 'T-1', name: 'Primera', assigned: 'Jimmy' }],
      '2026-07-17': [{ date: '2026-07-17', sheet: 'Login', key: 'T-2', name: 'Segunda', assigned: 'Jimmy' }],
      invalid: [],
    },
  })

  assert.deepEqual(Object.keys(history), ['2026-07-15', '2026-07-17'])
  assert.equal(getLatestTaskDate(history), '2026-07-17')
})

test('normalizeTasks keeps only complete task records', () => {
  const tasks = normalizeTasks([
    { date: '2026-07-17', sheet: 'Autopay', key: 'T-1', name: 'Validación', assigned: 'Jimmy' },
    { date: '2026-07-17', sheet: 'Autopay', key: 'T-2' },
    null,
  ])

  assert.deepEqual(tasks, [
    { date: '2026-07-17', sheet: 'Autopay', key: 'T-1', name: 'Validación', assigned: 'Jimmy' },
  ])
})

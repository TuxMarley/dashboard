import test from 'node:test'
import assert from 'node:assert/strict'
import { getIsoWeek, normalizeTasks } from '../src/utils/dashboard.js'

test('getIsoWeek uses ISO-8601 week numbering at year boundaries', () => {
  assert.equal(getIsoWeek(new Date(2026, 6, 17)), 29)
  assert.equal(getIsoWeek(new Date(2021, 0, 1)), 53)
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

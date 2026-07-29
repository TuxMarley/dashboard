import test from 'node:test'
import assert from 'node:assert/strict'
import {
  getIsoWeek,
  getLatestMetlifeDate,
  getLatestTaskDate,
  getMetlifeSummary,
  normalizeMetlifeHistory,
  normalizeTaskHistory,
  normalizeTasks,
} from '../src/utils/dashboard.js'

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

test('MetLife history keeps valid daily entries and calculates the latest day', () => {
  const history = normalizeMetlifeHistory({
    version: 1,
    days: {
      '2026-07-22': [
        { id: '2026-07-22-1', type: 'Análisis', title: 'Revisar acceso', hours: 1 },
        { id: 'bad-hours', type: 'Análisis', title: 'Inválida', hours: '1' },
      ],
      '2026-07-29': [
        { id: '2026-07-29-1', type: 'Desarrollo', title: 'Sanear repositorio', hours: 3 },
      ],
      invalid: [],
    },
  })

  assert.deepEqual(Object.keys(history), ['2026-07-22', '2026-07-29'])
  assert.equal(history['2026-07-22'].length, 1)
  assert.equal(getLatestMetlifeDate(history), '2026-07-29')
})

test('MetLife summary totals hours and finds the primary activity type', () => {
  const summary = getMetlifeSummary({
    '2026-07-22': [
      { id: '1', type: 'Análisis', title: 'Revisar', hours: 1 },
      { id: '2', type: 'Desarrollo', title: 'Configurar', hours: 2 },
    ],
    '2026-07-23': [
      { id: '3', type: 'Desarrollo', title: 'Ejecutar', hours: 4 },
    ],
  })

  assert.deepEqual(summary, {
    days: 2,
    tasks: 3,
    totalHours: 7,
    primaryType: 'Desarrollo',
  })
})

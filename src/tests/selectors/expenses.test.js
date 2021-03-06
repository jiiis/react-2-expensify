import moment from 'moment'

import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    startDate: moment(0),
    endDate: undefined,
    sortBy: 'date'
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: moment(0).add(2, 'days'),
    sortBy: 'date'
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const result = selectExpenses(expenses, filters)

  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})

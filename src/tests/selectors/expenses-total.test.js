import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('should return 0 if no expenses', () => {
  expect(selectExpensesTotal()).toBe(0)
  expect(selectExpensesTotal([])).toBe(0)
})

test('should add up a single expense', () => {
  expect(selectExpensesTotal([expenses[1]])).toBe(10095)
})

test('should add up multiple expenses', () => {
  expect(selectExpensesTotal(expenses)).toBe(14790)
})

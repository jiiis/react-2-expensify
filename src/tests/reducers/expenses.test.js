import moment from 'moment'

import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Flight',
    note: '',
    amount: 900,
    createdAt: 40000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      note: 'This is a payment for credit card.',
      amount: 6000,
      createdAt: moment(0).add(1000, 'days').valueOf()
    }
  }
  const state = expensesReducer(expenses, action)

  expect(state[2]).toEqual({
    id: expenses[2].id,
    description: expenses[2].description,
    note: 'This is a payment for credit card.',
    amount: 6000,
    createdAt: moment(0).add(1000, 'days').valueOf()
  })
})

test('should not edit expense if expend not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'not found',
    updates: {
      note: 'This is a payment for credit card.'
    }
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'not found'
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

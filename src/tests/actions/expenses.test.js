import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'
import { addExpense, editExpense, startAddExpense, removeExpense } from '../../actions/expenses'

const createMockStore = configureMockStore([thunk])

// test('should setup add expense action object with default values', () => {
//   const action1 = addExpense()
//   const action2 = addExpense({})
//
//   expect(action1).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: { id: expect.any(String), description: '', note: '', amount: 0, createdAt: 0 }
//   })
//   expect(action2).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: { id: expect.any(String), description: '', note: '', amount: 0, createdAt: 0 }
//   })
// })

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2])

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults)

    done()
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)

    done()
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { note: 'New note value' }
  })
})

test('should setup remove expense action object', () => {
  const action = removeExpense('123abc')

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

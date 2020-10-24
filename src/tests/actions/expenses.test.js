import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup add expense action object with default values', () => {
  const action1 = addExpense()
  const action2 = addExpense({})

  expect(action1).toEqual({
    type: 'ADD_EXPENSE',
    expense: { id: expect.any(String), description: '', note: '', amount: 0, createdAt: 0 }
  })
  expect(action2).toEqual({
    type: 'ADD_EXPENSE',
    expense: { id: expect.any(String), description: '', note: '', amount: 0, createdAt: 0 }
  })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = { description: 'Description', note: 'Note', amount: 100, createdAt: 300000 }
  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { id: expect.any(String), ...expenseData }
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
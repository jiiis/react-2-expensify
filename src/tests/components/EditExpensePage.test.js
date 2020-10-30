import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper

beforeEach(() => {
  startEditExpenseSpy = jest.fn()
  startRemoveExpenseSpy = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage
    expense={expenses[0]}
    startEditExpense={startEditExpenseSpy}
    startRemoveExpense={startRemoveExpenseSpy}
    history={historySpy}
  />)
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])

  expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
})

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click')

  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id)
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
})

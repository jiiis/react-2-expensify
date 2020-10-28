import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixtures/expenses'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpensesSummary for no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary for a single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={222} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={999} />)
  expect(wrapper).toMatchSnapshot()
})

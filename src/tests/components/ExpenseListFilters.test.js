import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import { altFilters, filters } from '../fixtures/filters'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper

beforeEach(() => {
  setTextFilterSpy = jest.fn()
  sortByDateSpy = jest.fn()
  sortByAmountSpy = jest.fn()
  setStartDateSpy = jest.fn()
  setEndDateSpy = jest.fn()

  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilterSpy}
    sortByDate={sortByDateSpy}
    sortByAmount={sortByAmountSpy}
    setStartDate={setStartDateSpy}
    setEndDate={setEndDateSpy}
  />)
})

test('should render ExpenseListFilters', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data', () => {
  wrapper.setProps({ filters: altFilters })

  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value = 'life'

  wrapper.find('input').simulate('change', { target: { value } })

  expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
  wrapper.find('select').simulate('change', { target: { value: 'date' } })

  expect(sortByDateSpy).toHaveBeenCalled()
})

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } })

  expect(sortByAmountSpy).toHaveBeenCalled()
})

test('should handle dates change', () => {
  const startDate = moment(0)
  const endDate = moment(0).add(5, 'years')

  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })

  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('startDate')

  expect(wrapper.state('calendarFocused')).toBe('startDate')
})

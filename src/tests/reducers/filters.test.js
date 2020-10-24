import moment from 'moment'

import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual({
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy: 'date'
  })
})

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'abc' })

  expect(state.text).toBe('abc')
})

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(1000) })

  expect(state.startDate).toEqual(moment(1000))
})

test('should set endDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(1000) })

  expect(state.endDate).toEqual(moment(1000))
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)

  expect(state.sortBy).toBe('date')
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })

  expect(state.sortBy).toBe('amount')
})



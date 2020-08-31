import moment from 'moment'

const filtersReducerDefaultState = {
  text: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  sortBy: 'date'
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    default:
      return state
  }
}

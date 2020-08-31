const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id !== action.id) {
          return expense
        }

        return { ...expense, ...action.updates }
      })
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action .id)
    default:
      return state
  }
}
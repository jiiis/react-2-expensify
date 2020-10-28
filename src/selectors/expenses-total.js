export default (expenses) => {
  if (!Array.isArray(expenses)) {
    return 0
  }

  return expenses.reduce((total, expense) => {
    if (isNaN(expense.amount)) {
      return total
    }

    return total + expense.amount
  }, 0)
}

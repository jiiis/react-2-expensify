import moment from 'moment'

export default [
  { id: '1', description: 'Gum', note: '', amount: 195, createdAt: 1000 },
  { id: '2', description: 'Rent', note: '', amount: 10095, createdAt: moment(0).subtract(4, 'days').valueOf() },
  { id: '3', description: 'Credit card', note: '', amount: 4500, createdAt: moment(0).add(50, 'days').valueOf() },
]

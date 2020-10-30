import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

import './firebase/firebase'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getExpenses from './selectors/expenses'

const store = configureStore()

// store.dispatch(addExpense({ description: 'Gas bill', amount: 500, createdAt: 14000 }))
// store.dispatch(addExpense({ description: 'Water bill', amount: 300, createdAt: 1598868025075 }))
// store.dispatch(addExpense({ description: 'Rent', amount: 10000, createdAt: 10000 }))
// store.dispatch(setTextFilter('water'))

// console.log(getExpenses(store.getState().expenses, store.getState().filters))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

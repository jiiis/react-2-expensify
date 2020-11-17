import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

import { firebase } from './firebase/firebase'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import AppRouter, { history } from './routers/AppRouter'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let isRendered = false

const renderApp = () => {
  if (!isRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    isRendered = true
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()

      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())

    renderApp()

    history.push('/')
  }
})

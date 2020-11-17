import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
        <PrivateRoute path="/create" component={AddExpensePage} exact={true} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter

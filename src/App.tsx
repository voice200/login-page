import React from 'react'
import LoginPage from './pages/login-page'
import './assets/styles/common.sass'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path={ '/login' } component={ LoginPage } />
      <Redirect to={ '/login' }/>
    </Switch>
  )
}

export default App

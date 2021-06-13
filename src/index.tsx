import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ErrorBoundry from './component/error-boundry'
// import {BrowserRouter as Router,
//   Redirect
// } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import WorkService from './service/index'
import { ServiceProvider } from './context'

const workService = new WorkService()

ReactDOM.render(
  <ErrorBoundry>
    {/*<Router>*/}
    <Provider store={store}>
      <ServiceProvider value={workService}>
        <App />
      </ServiceProvider>
    </Provider>
    {/*</Router>*/}
  </ErrorBoundry>,
  document.getElementById('root')
)

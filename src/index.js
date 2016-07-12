import React from 'react'
import store, { history } from 'store'
import { IndexRoute, Route, Router } from 'react-router'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import App from 'controllers/App.jsx'
import Home from 'ui/Home'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))

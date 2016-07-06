import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const initialState = {
  messages: [
    {
      id: 0,
      text: 'How are you today?',
      fromUser: false
    }
  ]
}
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
const history = syncHistoryWithStore(browserHistory, store)

export { store as default, history }

import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './reducers/index'

const defaultState = {
  messages: [
    {
      id: 0,
      text: 'How are you today?'
    }
  ]
}
const store = createStore(rootReducer, defaultState)
const history = syncHistoryWithStore(browserHistory, store)

export { store as default, history }

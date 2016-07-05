import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './reducers/rootReducer'

const initialState = {
  messages: [
    {
      id: 0,
      text: 'How are you today?'
    }
  ]
}
const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension()
)
const history = syncHistoryWithStore(browserHistory, store)

export { store as default, history }

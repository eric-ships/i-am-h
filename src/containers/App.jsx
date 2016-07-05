// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as messageActionCreators from 'actions/messageActionCreators'

import Page from 'components/page'

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = () => {
  return {}
  // return bindActionCreators(messageActionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Page)

export default App

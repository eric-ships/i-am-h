import { connect } from 'react-redux'

import MessagesList from 'ui/MessagesList'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const Messages = connect(mapStateToProps, mapDispatchToProps)(MessagesList)

export default Messages

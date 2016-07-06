import { connect } from 'react-redux'
import MessagesList from 'components/MessagesList'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
    // onTodoClick: (id) => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

const Messages = connect(mapStateToProps, mapDispatchToProps)(MessagesList)

export default Messages

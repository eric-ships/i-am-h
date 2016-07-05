import { connect } from 'react-redux'
// import { toggleTodo } from '../actions' // use for delete message
import MessagesList from 'components/MessagesList'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

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

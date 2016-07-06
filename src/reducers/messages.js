function messages(state = [], action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          fromUser: action.fromUser
        }
      ]
    default:
      return state
  }
}

export default messages

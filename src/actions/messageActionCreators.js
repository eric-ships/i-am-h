let nextMessageId = 1

export const addMessage = (text) => {
  return {
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    text
  }
}

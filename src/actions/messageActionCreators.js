const apiaiToken = '62323607e46c461995ff6430837c5a15'
const sessionId = (+new Date).toString(36)
let nextMessageId = 1 // initial state starts at one

// todo: extract out commands logic

function displayEric() {
  fetch('http://ericliu121187.com/json').then(
    promise => promise.json().then(
      json => {
        console.log(json) // todo main display
      }
    )
  )
}

function handleCommand(cmd) {
  switch (cmd) {
    case 'eric':
      displayEric()
      break
    case 'resume':
      // todo
      break
  }
}

// tood: write test
function isCommand(text) { // todo: better name? reserved word?
  const commands = ['eric', 'help', 'resume']

  return commands.includes(text)
}

const sendMessage = (text) => {
  return function(dispatch) {
    const stripped = text.toLowerCase().replace(/[^a-zA-Z]+/g, '')

    dispatch(addMessage(text, true))

    if (stripped === 'help') {

      dispatch(addMessage('Here\'s some help. Type in "eric"'), false) // todo: extract out canned responses
      return
    }

    if (isCommand(stripped)) {
      handleCommand(stripped) // todo: extract

      return
    }

    const req = new Request('https://api.api.ai/v1/query?v=20150910', {
      body: JSON.stringify({
        lang: 'en',
        query: text,
        sessionId
      }),
      headers: new Headers({
        Authorization: `Bearer ${apiaiToken}`,
        'Content-Type': 'application/json; charset=utf-8'
      }),
      mode: 'cors',
      method: 'post'
    })

    fetch(req).then(
      promise => promise.json()
      .then(
        body => {
          let apiaiText = body.result.fulfillment.speech || 'Sorry, I am too young to understand.'
          dispatch(addMessage(apiaiText, false))
        }
      ).catch(
        error => console.error(error) // todo: dispatch error!
      )
    )
  }
}

const addMessage = (text, fromUser) => {
  return {
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    text,
    fromUser
  }
}

export { addMessage as default, sendMessage }

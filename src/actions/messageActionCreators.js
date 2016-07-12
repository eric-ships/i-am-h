const apiaiToken = '62323607e46c461995ff6430837c5a15'
const sessionId = (+new Date).toString(36)
let nextMessageId = 1 // initial state starts at one

// todo: extract out commands logic

function displayEric(dispatch) {
  fetch('http://ericliu121187.com/json', {
      cache: 'no-cache',
      mode: 'cors'
    }
  ).then(
    promise => promise.json().then(
      json => {
        dispatch(addMessage(JSON.stringify(json, ' '), 'code')) // todo main display
      }
    )
  )
}

const sendMessage = (text) => {
  return function(dispatch) {
    const stripped = text.toLowerCase().replace(/[^a-zA-Z]+/g, '')

    dispatch(addMessage(text, 'user'))

    if (stripped === 'help') {

      // todo: extract out canned responses
      dispatch(addMessage('Unfortunately, I spent most of my time learning about NBA players...', 'h'))
      dispatch(addMessage('I\'m trying my best', 'h'))
      dispatch(addMessage('Here... Try typing in "eric"', 'h'))
      return
    }

    if (stripped === 'eric') {
      displayEric(dispatch) // todo: extract

      dispatch(addMessage('Ah, this is some info about Eric in JSON', 'h'))
      dispatch(addMessage('Feel free to click on the "-" and "+"', 'h'))
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
          dispatch(addMessage(apiaiText, 'h'))
        }
      ).catch(
        error => console.error(error) // todo: dispatch error!
      )
    )
  }
}

const addMessage = (text, kind) => {
  return {
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    text,
    kind
  }
}

export { addMessage as default, sendMessage }

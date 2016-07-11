import React from 'react'
import CSSModules from 'react-css-modules'

import styles from 'modules/messages-list'

const MessagesList = ({ messages }) => (

  <ul>
    {messages.map((message, i) =>
      <li key={i} styleName={message.fromUser ? 'message--from-user' : 'message'}>
        {message.text}
      </li>
    )}
  </ul>
)

export default CSSModules(MessagesList, styles)

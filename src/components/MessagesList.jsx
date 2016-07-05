import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/messages-list'

const MessagesList = ({ messages }) => (
  <ul>
    {messages.map((message, i) =>
      <li key={i} styleName='message'>
        {message.text}
      </li>
    )}
  </ul>
)

export default CSSModules(MessagesList, styles)

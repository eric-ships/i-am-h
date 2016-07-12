import CSSModules from 'react-css-modules'
import React from 'react'
import { findDOMNode } from 'react-dom'

import styles from 'modules/messages-list'

class MessagesList extends React.Component {
  static propTypes = {
    messages: React.PropTypes.array
  };

  static defaultProps = {
    messages: []
  };

  componentDidUpdate() {
    const n = findDOMNode(this)
    n.scrollTop = n.scrollHeight
  }

  render() {
    return (
      <ul styleName='message-list'>
        {this.props.messages.map((message, i) =>
          <li key={i} styleName={message.fromUser ? 'message--from-user' : 'message'}>
            {message.text}
          </li>
        )}
      </ul>
    )
  }
}

export default CSSModules(MessagesList, styles)

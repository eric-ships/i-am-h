import CSSModules from 'react-css-modules'
import React from 'react'
import Renderjson from 'renderjson'
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

  appendRenderjsonOutput(node, json) {
    node.appendChild(
      Renderjson.set_icons('+', '-')
                .set_show_to_level(2)(JSON.parse(json))
    )
  }

  render() {
    return (
      <ul styleName='message-list'>
        {this.props.messages.map((message, i) =>
          <li
            ref={node => {
              if (message.kind === 'code') {
                this.appendRenderjsonOutput(node, message.text)
              }
            }}
            key={i}
            styleName={message.kind}
          >
            {(() => {
              switch (message.kind) {
                case 'code':
                  return
                default:
                  return message.text
              }
            })()}
          </li>
        )}
      </ul>
    )
  }
}

export default CSSModules(MessagesList, styles)

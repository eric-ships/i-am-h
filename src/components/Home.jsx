import CSSModules from 'react-css-modules'
import React from 'react'

import Alphabet from 'components/Alphabet'
import AddMessage from 'containers/AddMessage'
import Messages from 'containers/Messages'
import styles from 'styles/home'

class Home extends React.Component {
  render() {
    return (
      <div>
        <svg width="250" height="250">
          <Alphabet x={50} y={50}/>
        </svg>
        <h1 styleName='title'>
          I am H
        </h1>
        <Messages />
        <AddMessage />
      </div>
    )
  }
}

export default CSSModules(Home, styles)

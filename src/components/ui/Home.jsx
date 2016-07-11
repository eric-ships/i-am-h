import CSSModules from 'react-css-modules'
import React from 'react'

import QuotesOnDesign from 'controllers/QuotesOnDesign'
import AddMessage from 'controllers/AddMessage'
import Messages from 'controllers/Messages'

import styles from 'modules/home'

class Home extends React.Component {
  render() {
    return (
      <div>
        <QuotesOnDesign />
        <h1 styleName='title'>
          I am H, created by Eric Liu
        </h1>
        <Messages />
        <AddMessage />
      </div>
    )
  }
}

export default CSSModules(Home, styles)

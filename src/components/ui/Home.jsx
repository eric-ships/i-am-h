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
        <h1 styleName='title'>
          I am H, created by Eric Liu
        </h1>
        <a href="https://github.com/ericliu121187/i-am-h" styleName='a'>github</a>
        <Messages />
        <AddMessage />
        <QuotesOnDesign />
      </div>
    )
  }
}

export default CSSModules(Home, styles)

import CSSModules from 'react-css-modules'
import React from 'react'

import QuotesOnDesign from 'components/QuotesOnDesign/QuotesOnDesign'
import AddMessage from 'containers/AddMessage'
import Messages from 'containers/Messages'
import styles from 'styles/home'

class Home extends React.Component {
  render() {
    return (
      <div>
        <QuotesOnDesign />
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

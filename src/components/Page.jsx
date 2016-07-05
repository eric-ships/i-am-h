import React from 'react'
import CSSModules from 'react-css-modules'

import styles from 'styles/page'

class Page extends React.Component {
  render() {
    const propsTransferred = Object.assign({}, this.props, { styles: undefined })

    return (
      <div>
        {React.cloneElement(this.props.children, propsTransferred)}
      </div>
    )
  }
}

export default CSSModules(Page, styles)

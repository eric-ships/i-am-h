import CSSModules from 'react-css-modules'
import React from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { interval } from 'd3-timer'
import { shuffle } from 'd3-array'

import Letter from './Letter'

import styles from 'modules/quote'

class Quote extends React.Component {
  static propTypes = {
    quotes: React.PropTypes.array
  };

  static defaultProps = {
    quotes: []
  };

  state = {
    current: []
  }

  componentDidMount() {
    if (this.props.quotes.length > 0) {
      this.displayQuotes()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quotes.length > 0) {
      this.displayQuotes(nextProps.quotes)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.current !== this.state.current
  }

  constantlyUpdateQuote(quotes) {
    interval(() => {
      // todo: make sure it can't be the same one again
      this.setState({
        current: shuffle(quotes)[0].content
      })
    }, 4000)
  }

  displayQuotes(quotes) {
    this.setState({
      current: shuffle(quotes)[0].content
    })

    this.constantlyUpdateQuote(quotes)
  }

  parseHTMLAndCreateCharArr(html) {
    // todo: parse quotes just once, instead of every state.current change?
    const htmlTags = /(<([^>]+)>)/ig
    const t = document.createElement('textarea')

    t.innerHTML = html

    return t.value.replace(htmlTags, '').split('')
  }

  renderLetters() {
    const c = this.parseHTMLAndCreateCharArr(this.state.current)
    let nodes = []
    let counts = {}
    let key

    c.map((d, i) => {
      let count = counts[d] || 0

      count++
      counts[d] = count
      key = d + '-' + count

      nodes.push(<Letter d={d} i={i} key={`${key}`} />)
    })

    return nodes
  }

  render() {
    const transform = `translate(${this.props.x}, ${this.props.y})`

    return (
      <svg styleName='quote'>
        <g transform={transform}>
          <ReactTransitionGroup component="g">
            {this.renderLetters()}
          </ReactTransitionGroup>
        </g>
      </svg>
    )
  }
}

export default CSSModules(Quote, styles)

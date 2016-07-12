import CSSModules from 'react-css-modules'
import React from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { findDOMNode } from 'react-dom'
import { interval } from 'd3-timer'
import { shuffle } from 'd3-array'

import Letter from './Letter'

import styles from 'modules/quote'

class Quote extends React.Component {
  static propTypes = {
    quotes: React.PropTypes.array,
    x: React.PropTypes.number,
    y: React.PropTypes.number
  };

  static defaultProps = {
    quotes: [],
    x: 48,
    y: 24
  };

  state = {
    current: [],
    width: 0
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
        current: shuffle(quotes)[0].content,
        width: findDOMNode(this).offsetWidth
      })
    }, 8000)
  }

  displayQuotes(quotes) {
    this.setState({
      current: shuffle(quotes)[0].content,
      width: findDOMNode(this).offsetWidth
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
    let lineX = 1
    let lineY = 1
    let nodes = []
    let counts = {}
    let key

    c.map((d, i) => {
      let newLine
      let count = counts[d] || 0

      if (d === ' ') {
        newLine = this.shouldBeNewLine(c, i, lineX)
      }

      if (newLine) {
        lineX = 1
        lineY++
      }  else {
        lineX++
        count++
        counts[d] = count
        key = d + '-' + count

        nodes.push(<Letter d={d} key={`${key}`} lineX={lineX} lineY={lineY} />)
      }
    })

    return nodes
  }

  shouldBeNewLine(c, i, lineX) {
    const w = this.state.width
    let x = lineX

    i++
    x++
    for (let j = i; j < c.length; j++) {
      if (c[j] === ' ') {
        if (x * 9.6 > w) {
          return true
        }
        break
      }

      x++
    }

    return false
  }

  render() {
    const transform = `translate(${this.props.x}, ${this.props.y})`

    return (
      <div styleName='quote'>
        <svg styleName='quote-svg'>
          <g transform={transform}>
            <ReactTransitionGroup component="g">
              {this.renderLetters()}
            </ReactTransitionGroup>
          </g>
        </svg>
      </div>
    )
  }
}

export default CSSModules(Quote, styles)

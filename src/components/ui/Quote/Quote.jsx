import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { shuffle } from 'd3-array'
import { interval } from 'd3-timer'

import Letter from './Letter'

class Quotes extends Component {
  state = {
    quotes: [],
    current: []
  }

  componentDidMount() {
    this.getQuotes()
    this.constantlyUpdateQuote()
  }

  constantlyUpdateQuote() {
    interval(() => {
      let q = shuffle(this.state.quotes)
      let c = this.parseHTMLAndCreateCharArr(q[0].content)

      this.setState({
        current: c
      })
    }, 8000)
  }

  getQuotes() {
    // Quotes on Design API v4.0
    const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=12' // todo: make params into object literal

    fetch(url)
    .then(
      promise => promise.json()
      .then(
        res => {
          this.setState({
            quotes: res
          })
        }
      )
    )
  }

  parseHTMLAndCreateCharArr(html) {
    const htmlTags = /(<([^>]+)>)/ig
    const t = document.createElement('textarea')

    t.innerHTML = html

    return t.value.replace(htmlTags, '').split('')
  }

  renderLetters() {
    let nodes = []
    let counts = {}
    let key

    this.state.current.map((d, i) => {
      let count = counts[d] || 0

      count++
      counts[d] = count
      key = d + '-' + count

      nodes.push(<Letter d={d} i={i} key={`${key}`} />)
    })

    return nodes
  }

  render() {
    let transform = `translate(${this.props.x}, ${this.props.y})`

    return (
      <g transform={transform}>
        <ReactTransitionGroup component="g">
          {this.renderLetters()}
        </ReactTransitionGroup>
      </g>
    )
  }
}

export default Quotes

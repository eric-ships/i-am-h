import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { shuffle } from 'd3-array'
import { interval } from 'd3-timer'

import Letter from 'components/Letter'

class Alphabet extends Component {
  static letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  state = { alphabet: [] }

  componentWillMount() {
    interval(() => this.setState({
      alphabet: shuffle(Alphabet.letters)
                  .slice(0, Math.floor(Math.random() * Alphabet.letters.length))
                  .sort()
    }), 1500)
  }

  render() {
    let transform = `translate(${this.props.x}, ${this.props.y})`

    return (
      <g transform={transform}>
        <ReactTransitionGroup component="g">
          {this.state.alphabet.map((d, i) => (
            <Letter d={d} i={i} key={`letter-${d}`} />
          ))}
        </ReactTransitionGroup>
      </g>
    )
  }
}

export default Alphabet

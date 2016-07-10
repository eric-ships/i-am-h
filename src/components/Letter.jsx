import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { select } from 'd3-selection'
import { easeCubicInOut } from 'd3-ease'
import { transition } from 'd3-transition'

class Letter extends Component {
  state = {
    y: -60,
    x: 0,
    className: 'enter',
    fillOpacity: 1e-6
  }

  transition = transition()
                 .duration(750)
                 .ease(easeCubicInOut)

  componentWillEnter(callback) {
    let node = select(ReactDOM.findDOMNode(this))

    this.setState({ x: this.props.i*32 })

    node.transition(this.transition)
        .attr('y', 0)
        .style('fill-opacity', 1)
        .on('end', () => {
          this.setState({ y: 0, fillOpacity: 1 })
          callback()
        })
  }

  componentWillLeave(callback) {
    let node = select(ReactDOM.findDOMNode(this))

    this.setState({ className: 'exit' })

    node.transition(this.transition)
        .attr('y', 60)
        .style('fill-opacity', 1e-6)
        .on('end', () => {
          this.setState({ y: 60, fillOpacity: 1e-6 })
          callback()
        })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.i != nextProps.i) {
      if (this.props.i != nextProps.i) {
        let node = select(ReactDOM.findDOMNode(this))

        this.setState({ className: 'update' })

        node.transition(this.transition)
            .attr('x', nextProps.i*32)
            .on('end', () => this.setState({ x: nextProps.i*32 }))
      }
    }
  }

  render() {
    return (
      <text dy=".35em"
        y={this.state.y}
        x={this.state.x}
        className={this.state.className}
        style={{ fillOpacity: this.state.fillOpacity }}
      >
        {this.props.d}
      </text>
    )
  }
}

export default Letter

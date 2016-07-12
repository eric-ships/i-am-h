import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { select } from 'd3-selection'
import { easeCubicInOut } from 'd3-ease'
import { transition } from 'd3-transition'

class Letter extends Component {
  static propTypes = {
    d: React.PropTypes.string.isRequired,
    lineX: React.PropTypes.number.isRequired,
    lineY: React.PropTypes.number.isRequired
  };

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
    const node = select(ReactDOM.findDOMNode(this))

    this.setState({ x: this.props.lineX * 8 })

    node.transition(this.transition)
        .attr('y', this.props.lineY * 14)
        .style('fill-opacity', 0.38)
        .on('end', () => {
          this.setState({ y: this.props.lineY * 14, fillOpacity: 0.38 })
          callback()
        })
  }

  componentWillLeave(callback) {
    const node = select(ReactDOM.findDOMNode(this))

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
    if (this.props.lineX !== nextProps.lineX || this.props.lineY !== nextProps.lineY) {
      const node = select(ReactDOM.findDOMNode(this))

      this.setState({ className: 'update' })

      node.transition(this.transition)
          .attr('x', nextProps.lineX * 8)
          .attr('y', nextProps.lineY * 14)
          .on('end', () => this.setState({ x: nextProps.lineX * 8, y: nextProps.lineY * 14 }))
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

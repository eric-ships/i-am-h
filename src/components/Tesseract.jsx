import { select } from 'd3-selection'
import 'd3-transition'
import React from 'react'

class Tesseract extends React.Component {
  componentDidMount() {
    select('#canvas').append('h1')
      .text('Hello, world!')
      .style('text-align', 'center')
      .style('line-height', '36px')
      .style('font-size', '20px')
      .style('transform', 'rotate(-180deg) scale(0.001, 0.001)')
    .transition()
      .duration(1500)
      .style('transform', null)
  }

  render() {
    return (
      <div>
        <div id="canvas" height="250" width="250"></div>
      </div>
    )
  }
}

export default Tesseract

import React from 'react'

import Quotes from './Quotes'

// todo: move fetch logic here and make this a container?

const QuotesOnDesign = () => {
  return (
    <svg width="96%" height="88" style={{ fontSize: 12 + 'px' }}>
      <Quotes x={50} y={50}/>
    </svg>
  )
}

export default QuotesOnDesign

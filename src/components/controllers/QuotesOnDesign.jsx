import React from 'react'

import Quote from 'ui/Quote/Quote'

class QuotesOnDesign extends React.Component {
  state = {
    quotes: []
  }

  componentDidMount() {
    this.getQuotes()
  }

  getQuotes() {
    // Quotes on Design API v4.0
    const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=24' // todo: make params into object literal

    fetch(url, {
      mode: 'cors'
    })
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

  render() {
    return (
      <Quote quotes={this.state.quotes} x={48} y={48}/>
    )
  }
}

export default QuotesOnDesign

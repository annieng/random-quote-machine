import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentQuote: '',
      currentAuthor: '',
      currentId: ''
    }
  }

  async fetchQuote() {
    let options = {
      url: 'https://talaikis.com/api/quotes/random/',
    }
    let res = await fetch(options.url)
    let data = await res.json()
    console.log(data)
    this.setState({
      currentQuote: data.quote,
      currentAuthor: data.author,
      currentId: data.id
    })
  }

  componentDidMount() {
    this.fetchQuote()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentId !== prevState.currentId) {
      this.fetchQuote()
    }
  }


  render() {
    return (

      <div>

        <div id="quote-box">
          <div id="text">
          
          {this.state.currentQuote}
          </div>

          <div id="author">
          - {this.state.currentAuthor}
          </div>

          <div id='new-quote-button-div'>
            <button id="new-quote" onClick={() => {this.fetchQuote()}}>New Quote</button>
            <a id="tweet-quote" href='twitter.com/intent/tweet'> tweet </a>
          </div>

          

        </div>

      </div>

    )
  }
}

export default App

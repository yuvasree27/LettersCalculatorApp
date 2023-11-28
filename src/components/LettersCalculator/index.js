// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="letters-calculator-image"
            alt="letters calculator"
          />
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                id="phraseText"
                placeholder="Enter the phrase"
                className="input-phrase"
                value={inputPhrase}
                onChange={this.onChangeInputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

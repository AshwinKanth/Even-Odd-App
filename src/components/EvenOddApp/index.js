import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onRandomNumber = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  render() {
    const {number} = this.state
    const text = number % 2 === 0 ? 'Even' : 'odd'
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">count {number}</h1>
          <p className="description">Count is {text}</p>
          <button
            className="button"
            type="button"
            onClick={this.onRandomNumber}
          >
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

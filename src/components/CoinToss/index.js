// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {totcount: 0, headcount: 0, tailcount: 0, head: true}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prev => {
      if (tossResult === 0) {
        return {
          totcount: prev.totcount + 1,
          headcount: prev.headcount + 1,
          head: true,
        }
      }
      return {
        totcount: prev.totcount + 1,
        tailcount: prev.tailcount + 1,
        head: false,
      }
    })
  }

  render() {
    const {totcount, headcount, tailcount, head} = this.state
    return (
      <div className="CardContainer">
        <h1 className="tossHead">Coin Toss Game</h1>
        <p className="tosspara">Heads (or) tails</p>
        {head && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
            className="tossimage"
          />
        )}
        {!head && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            alt="toss result"
            className="tossimage"
          />
        )}
        <button className="but" type="button" onClick={this.tossCoin}>
          Toss Coin
        </button>
        <div className="results">
          <p className="result">Total:{totcount}</p>
          <p className="result">Heads:{headcount}</p>
          <p className="result">tails:{tailcount}</p>
        </div>
      </div>
    )
  }
}
export default CoinToss

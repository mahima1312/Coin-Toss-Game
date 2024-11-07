import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, headImg: true}

  onClickTossResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 1) {
      this.setState(preState => ({tails: preState.tails + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({headImg: false})
    } else if (tossResult === 0) {
      this.setState(preState => ({heads: preState.heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({headImg: true})
    }
  }

  render() {
    const {total, heads, tails, headImg} = this.state

    return (
      <div className="bg">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game </h1>
          <p className="heads-tails">Heads (or) Tails</p>
          {headImg ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button
            onClick={this.onClickTossResult}
            className="btn"
            type="button"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads} </p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

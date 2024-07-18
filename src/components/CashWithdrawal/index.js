// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDebit = value => {
    this.setState(prevState => {
      const newBalance = prevState.balance - value
      return {balance: newBalance >= 0 ? newBalance : prevState.balance}
    })
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="CashWithdrawal-container">
          <div className="profile-container">
            <div className="profile-pic-container">
              <h1 className="initial-heading">R</h1>
            </div>
            <h1 className="name">Ratcha Venu</h1>
          </div>
          <div className="yourbalance-container">
            <p className="yourbalance-message">Your Balance</p>
            <div className="yourbalance-container-amount">
              <div className="yourbalance-container-right">
                <p className="yourbalance-amount">{balance}</p>
                <p className="In-Ruppes-msg">In Rupees</p>
              </div>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="chooseSum-heading">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  onDebit={this.onDebit}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

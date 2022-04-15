import React,{Component} from 'react'

const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

class Ex extends React.Component {
  constructor() {
    super();
    this.state = {
      depositedAmount: ''
    };
  }

  handleDepositeAmountChange = (evt) => {
    if (rx_live.test(evt.target.value))
        this.setState({ depositedAmount : evt.target.value });
 }
  
  render() {
    return (
      <form>
       <input
        type="text"
        id="depositedAmount"
        maxLength={9}
        pattern="[+-]?\d+(?:[.,]\d+)?"
        placeholder="Enter amount"
        onChange={this.handleDepositeAmountChange}
        value={this.state.depositedAmount}
       />
      </form>
    )
  }
}

export default Ex
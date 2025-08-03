import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euros: ""
    };
  }

  handleRupeesChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleEurosChange = (e) => {
    this.setState({ euros: e.target.value });
  };

  handleSubmit = () => {
    const { rupees, euros } = this.state;
    const rate = 0.0117; // 1 INR = 0.0117 EUR

    if (rupees && !euros) {
      const euro = (parseFloat(rupees) * rate).toFixed(2);
      this.setState({ euros: euro });
      alert(`${rupees} INR = ${euro} EUR`);
    } else if (euros && !rupees) {
      const inr = (parseFloat(euros) / rate).toFixed(2);
      this.setState({ rupees: inr });
      alert(`${euros} EUR = ₹${inr} INR`);
    } else if (rupees && euros) {
      alert("Please fill only one field at a time for conversion.");
    } else {
      alert("Please enter a value in one of the fields.");
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "green", fontWeight: "bold" }}>
          Currency Convertor!!!
        </h1>

        <label>Amount (INR):</label>
        <input
          type="text"
          value={this.state.rupees}
          onChange={this.handleRupeesChange}
        /><br /><br />

        <label>Currency (EUR):</label>
        <input
          type="text"
          value={this.state.euros}
          onChange={this.handleEurosChange}
        /><br /><br />

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default CurrencyConvertor;

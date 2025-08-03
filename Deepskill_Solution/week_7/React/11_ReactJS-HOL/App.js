import React from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = () => {
    alert("Hello! Member1");
  };

  handleClick = (e) => {
    alert("I was clicked");
    console.log(e);
  };

  render() {
    return (
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button><br /><br />
        <button onClick={this.decrement}>Decrement</button><br /><br />
        <button onClick={this.sayWelcome}>Say welcome</button><br /><br />
        <button onClick={this.handleClick}>Click on me</button><br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;

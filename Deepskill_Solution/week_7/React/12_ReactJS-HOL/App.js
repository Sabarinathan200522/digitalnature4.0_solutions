import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = (
        <center>
        <div>
          <h2>Welcome Back</h2>
          <button onClick={this.logout}>Logout</button>
        </div>
        </center>
      );
    } else {
      message = (
        <center>
        <div>
          <h2>Please sign up</h2>
          <button onClick={this.login}>Login</button>
        </div>
        </center>
      );
    }

    return (
      <center>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Ticket Booking Application</h1>
        {message}
      </div>
      </center>
    );
  }
}

export default App;

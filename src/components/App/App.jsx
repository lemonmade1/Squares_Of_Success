import React, { Component } from "react";

import Header from "../Header/Header";
import userService from "../../utils/userService";

import "./App.css";
import NavBar from "../NavBar/NavBar";

import Main from "../Main/Main";

class App extends Component {

  state = {
    user: userService.getUser(),
  };

  handleLogout = (props) => {
    userService.logout(props);
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div id="main-app">
        <Header
          handleSignupOrLogin={this.handleSignupOrLogin}
          handleLogout={this.handleLogout}
          user={this.state.user}
        />
        <NavBar
          handleSignupOrLogin={this.handleSignupOrLogin}
          handleLogout={this.handleLogout}
          user={this.state.user}
        />
        <Main
          handleSignupOrLogin={this.handleSignupOrLogin}
          handleLogout={this.handleLogout}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;

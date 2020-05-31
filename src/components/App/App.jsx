import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import About from '../../components/About/About'
// import Game from "../../components/Game/Game"
// import Home from "../../components/Home/Home"

import Header from "../Header/Header";

// import SignupPage from "../../SignupLogin/SignupPage/SignupPage";
// import LoginPage from "../../SignupLogin/LoginPage/LoginPage"
import userService from "../../utils/userService";

import "./App.css";
import NavBar from "../NavBar/NavBar";

import Main from "../Main/Main";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     user: userService.getUser(),
  //   }
  // }

  /*--- Lifecycle Methods ---*/

  // handleLogout = (props) => {
  //   userService.logout(props)
  //   this.setState({ user: null })
  // };

  // handleSignupOrLogin = () => {
  //   this.setState({ user: userService.getUser() })
  // };

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
        {/* <header className="header-footer">
          S Q U A R E S &nbsp;&nbsp;&nbsp; O F &nbsp;&nbsp;&nbsp; S U C C E S S
       
        
      
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={() => (
              <About
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/game"
            render={() =>
              userService.getUser() ? (
                <Game
                  scores={this.state.scores}
                  handleUpdateScores={this.handleUpdateScores}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>      
        </header> */}

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

import React, { Component } from "react"
import { 
  Route, 
  Switch, 
  Redirect 
} from "react-router-dom"

import About from '../../components/About/About'
import Game from "../../components/Game/Game"
import Home from "../../components/Home/Home"

// import NavBar from '../NavBar/NavBar'

import SignupPage from "../../SignupLogin/SignupPage/SignupPage";
import LoginPage from "../../SignupLogin/LoginPage/LoginPage"
import userService from "../../utils/userService"

// import "./Header.css"

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    }
  }

  /*--- Lifecycle Methods ---*/

  handleLogout = (props) => {
    userService.logout(props)
    this.setState({ user: null })
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  };

  render() {
   
    return (
      <div id="main-header">
        <header className="header-footer">
          S Q U A R E S &nbsp;&nbsp;&nbsp; O F &nbsp;&nbsp;&nbsp; S U C C E S S
       
        {/* </header> */}
      
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
        </header>
      </div>
    )
  }
}

export default Header
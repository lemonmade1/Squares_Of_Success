import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import SignupPage from "../../SignupLogin/SignupPage/SignupPage";
import LoginPage from "../../SignupLogin/LoginPage/LoginPage";
import Game from "../Game/Game.jsx";
import userService from "../../utils/userService";

class Main extends React.Component {
  state = { scores: 0 };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              user={this.props.user}
              handleLogout={this.props.handleLogout}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <About
              user={this.props.user}
              handleLogout={this.props.handleLogout}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.props.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={this.props.handleSignupOrLogin}
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
    );
  }
}

export default Main;

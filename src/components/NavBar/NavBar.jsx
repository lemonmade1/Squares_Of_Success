import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

import About from '../About/About';
import Game from '../Game/Game';
import Home from '../Home/Home';
import LoginPage from '../../SignupLogin/LoginPage/LoginPage';
import SignupPage from '../../SignupLogin/SignupPage/SignupPage';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar-App">
        <h1>SQUARES OF SUCCESS</h1>

        <Router>
          <nav className="navbar">
            <Link to='/'>HOME</Link>

            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

            <Link to='/game'>GAME</Link>

            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

            <Link to='/about'>ABOUT</Link>

            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

            <Link to='/login'>LOGIN</Link>

            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

            <Link to='/signup'>SIGNUP</Link>
          </nav>

          <Route path='/' component={Home} exact />
          <Route path='/game' component={Game} />
          <Route path='/about' component={About} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
        </Router>
      </div>
    )
  }
}

export default NavBar;
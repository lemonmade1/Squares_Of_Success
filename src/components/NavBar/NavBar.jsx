import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

import About from '../About/About';
import Game from '../Game/Game';
import Home from '../Home/Home';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar-App">
        <h1>SQUARES OF SUCCESS</h1>

        <Router>
          <nav className="navbar">
            <Link to='/'>HOME</Link>
            <Link to='/game'>GAME</Link>
            <Link to='/about'>ABOUT</Link>
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
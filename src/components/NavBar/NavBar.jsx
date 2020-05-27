import React, { Component } from 'react';
import { 
  Link,   
} from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar-App">
        <h1>SQUARES OF SUCCESS</h1>

        <nav>
          <Link to='/'>HOME</Link>
          <Link to='/game'>GAME</Link>
          <Link to='/about'>ABOUT</Link>
        </nav>
      </div>
    )
  }

}

export default NavBar;
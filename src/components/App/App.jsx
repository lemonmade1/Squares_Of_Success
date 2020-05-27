import React from 'react';
import { 
  BrowserRouter as Router,  
  Route,   
} from 'react-router-dom';

import About from '../About/About';
import Game from '../Game/Game';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />

        <Route path='/' component={Home} exact />
        <Route path='/game' component={Game} />
        <Route path='/about' component={About} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
      </div>
    </Router>
  );
}

export default App;
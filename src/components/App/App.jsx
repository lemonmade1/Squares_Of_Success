import React from 'react';
import { 
  BrowserRouter as Router,  
  Route,   
} from 'react-router-dom';

import About from '../About/About';
import Game from '../Game/Game';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />

        <Route path='/' component={Home} exact />
        <Route path='/game' component={Game} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
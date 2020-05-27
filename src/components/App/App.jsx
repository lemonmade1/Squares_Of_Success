import React from 'react';
import { 
  BrowserRouter as Router,  
  Route,   
} from 'react-router-dom';

import './App.css';

import About from '../About/About';
import Home from '../Home/Home';
import Game from '../Game/Game';
import NavBar from '../NavBar/NavBar';

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
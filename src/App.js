import React from 'react';
import './App.css';
import Game from './component/Game';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './component/Home';
import Board from './component/Board';

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tictac" component={Home} />
          <Route path='/:id' component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

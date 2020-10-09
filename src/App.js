import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Tictactoe from './features/tictactoe/Tictactoe';
import Hangman from './features/hangman/Hangman';
import Sudoku from './features/sudoku/Sudoku';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/tictactoe" component={Tictactoe} />
          <Route exact path="/hangman" component={Hangman} />
          <Route exact path="/sudoku" component={Sudoku} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

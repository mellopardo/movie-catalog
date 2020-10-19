import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MoviesPage from './pages/MoviesPage';
import TvPage from './pages/TvPage';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" exact><HomePage/></Route>
        <Route path="/movie"><MoviesPage/> </Route>
        <Route path="/tv"> <TvPage/></Route>
        
      </Switch>
    </Router>
    
  );
}

export default App;

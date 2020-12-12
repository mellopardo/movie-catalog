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
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import ExploreMore from './pages/ExploreMorePage';
import ScrollToTop from './components/ScrollToTop.js';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path='/' exact><HomePage/></Route>
        <Route path='/movie' exact><MoviesPage/> </Route>
        <Route path='/tv' exact> <TvPage/></Route>
        <Route path='/search' exact><SearchPage/></Route>
        <Route path='/:type/:id' exact><DetailPage/></Route>
        <Route path='/:type/category/:filter' exact><ExploreMore/></Route>
        <Route path='/:type/:category/:filter' exact><ExploreMore/></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
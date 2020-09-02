import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Components/Movies';
import Watchlist from './Components/Watchlist';
import MovieTickets from './Components/MovieTickets';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Movies} />
      <Route path="/watchlist" component={Watchlist} />
      <Route path="/movietickets" component={MovieTickets} />
    </Router>
  );
}

export default App;

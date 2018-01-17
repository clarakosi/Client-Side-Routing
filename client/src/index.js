import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => {
  return (
    <div>
      <div>Application running add your routing</div>
      <Route to="/" component={MovieList} exact />
      <Route to="/movies/:id" component={Movie}  />
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,
  document.getElementById('root')
);

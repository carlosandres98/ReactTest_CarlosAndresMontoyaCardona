import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import { Navbar } from './components/navbar/navbar.component'
import { Home } from './pages/home/home.page'
import { TopFive } from './pages/top-five/top-five.page';
import { AddNewMovie } from './pages/new-movie/new-movie.page';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route path="/home">
              {
                <Home />
              }
            </Route>
            <Route path="/add-movie">
              {<AddNewMovie />}
            </Route>
            <Route path="/top">
              {
                <TopFive />
              }
            </Route>
            <Route path='**'>
              <Redirect to="/home" />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;

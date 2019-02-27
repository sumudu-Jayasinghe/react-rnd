import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Topnav } from './layout/TopNav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './home/Home';
import { RndHome } from './rnd/RndHome';
import { GamesHome } from './games/GamesHome';
import { UserView } from './rnd/git-users/UserView';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav
            className='navbar fixed-top navbar-dark'
            style={{
              backgroundColor: '#eeeeee',
              borderBottom: 'solid 1px #c3c3c3'
            }}
          >
            <a className='navbar-brand'>React Labs</a>
            <Topnav />
          </nav>
          <div className='content' style={{ marginTop: '60px' }}>
            <Route path='/' exact component={Home} />
            <Route path='/rnd' exact component={RndHome} />
            <Route path='/rnd/git' exact component={UserView} />
            <Route path='/games' exact component={GamesHome} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Topnav } from './layout/TopNav';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './home/Home';
import { RndHome } from './rnd/RndHome';
import { GamesHome } from './games/GamesHome';
import { UserView } from './rnd/git-users/UserView';
import { PromptView } from './rnd/prompt/PromptView';
import { NotFound } from './layout/NotFound';
import { RouteParams } from './rnd/route-params/RouteParams';
import ParamsView from './rnd/params/ParamsView';

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
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/rnd'  exact component={RndHome} />
              <Route path='/rnd/git'  exact component={UserView} />
              <Route path='/rnd/prompt' exact component={PromptView} />
              <Route path='/rnd/rp' exact component={RouteParams} />
              <Route path='/rnd/params' exact render={()=><ParamsView message="Test message" color="yellow"/>} />
              <Route path='/games' component={GamesHome} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

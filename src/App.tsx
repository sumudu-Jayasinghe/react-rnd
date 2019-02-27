import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserView } from './git-users/UserView';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <nav className='navbar fixed-top navbar-dark bg-primary'>
          <a className='navbar-brand'>React</a>
        </nav>
        <div className='content' style={{ marginTop: '60px' }}>
          <UserView />
        </div>
      </div>
    );
  }
}

export default App;

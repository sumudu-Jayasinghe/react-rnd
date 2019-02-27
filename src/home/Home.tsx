import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

export const Home = () => {
  return (
    <div className='jumbotron' style={{marginTop:'70px'}}>
      <h1 className='display-4'>Hello, React!</h1>
      <p className='lead'>
        Here you find all the RnD stuff related to React library
      </p>
      <hr className='my-4' />
     
      <NavLink to="/rnd" className="lnk-btn btn btn-light btn-lg">Rnd</NavLink>
      <NavLink to="/games" className="lnk-btn btn btn-light btn-lg">Games</NavLink>
    </div>
  );
};

import React from 'react';
import { Prompt } from 'react-router';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='jumbotron'>
      <h1 className='display-4'>404</h1>
      <p className='lead'>Page not found</p>
      <hr className='my-4' />
      <Link className='btn btn-primary btn-lg' to='/'>
        Home
      </Link>
    </div>
  );
};

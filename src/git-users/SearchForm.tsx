import React, { useState } from 'react';
import { checkPropTypes } from 'prop-types';

export const SearchForm = (props: any) => {
  const [searchTerm, setsearchTerm] = useState('');

  const searchHandler = (e: any) => {
    e.preventDefault();
    props.onSearch(searchTerm);
    setsearchTerm('');
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Search Github Users</h5>
        <form onSubmit={searchHandler}>
          <div className='form-group'>
            <label>User name</label>
            <input
              type='text'
              value={searchTerm}
              onChange={e => setsearchTerm(e.target.value)}
              className='form-control'
              placeholder='Enter user name'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

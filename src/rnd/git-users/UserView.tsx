import React, { Component, useState } from 'react';
import { SearchForm } from './SearchForm';
import { UserList } from './UsersList';

export const UserView = () => {
  const [users, setUsers] = useState();

  const search = async (name: string) => {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json();
    return data;
  };

  const searchHandler = (term: string) => {
    search(term).then(d => {
      setUsers([...(users || []), d]);
      console.log(users);
    });
  };
  return (
    <>
      <div className='row'>
        <div className='col-sm-12' style={{ marginTop: '20px' }}>
          <SearchForm onSearch={searchHandler} />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12' style={{ marginTop: '20px' }}>
          <UserList users={users} />
        </div>
      </div>
    </>
  );
};

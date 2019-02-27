import React from 'react';
import { User } from './User';

export const UserList = ({users=[]}) => {
  return (
    <div className='row'>
      {users.map((a: any, i: number) => (
        <div className='col-md-6 col-lg-3' style={{paddingTop:'5px'}} key={i}>
          <User {...a}/>
        </div>
      ))}
    </div>
  );
};

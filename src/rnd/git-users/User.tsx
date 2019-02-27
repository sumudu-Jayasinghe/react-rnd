import React from 'react';

export const User = ({
  avatar_url = '',
  organizations_url = '',
  name = '',
  created_at = ''
}) => {
  return (
    <div className='card' style={{height:'100%'}} >
      <div className='row no-gutters'>
        <div className='col-col-md-3' >
          <img src={avatar_url} className='card-img' style={{padding:'5px'}} />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{organizations_url}</p>
            <p className='card-text'>
              <small className='text-muted'>Created {created_at}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

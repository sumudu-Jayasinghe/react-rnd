import React from 'react';

export const RouteParams: React.FC<any> = ({ history, location, match }) => {
  return (
    <div className='row'>
      <div className='col-lg-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>History</h5>

            <p className='card-text'>{JSON.stringify(history)}</p>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Location</h5>
            <p className='card-text'>{JSON.stringify(location)}</p>
          </div>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>match</h5>

            <p className='card-text'>{JSON.stringify(match)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

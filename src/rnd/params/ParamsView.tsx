import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const ParamsView: React.FC<any> = ({ color, message,match }) => {
  return (
    <div className='row'>
      <div className='col-lg-4'>
        <div className='card' style={{backgroundColor:color}}>
          <div className='card-body'>
            <h5 className='card-title'>Params through routes and render</h5>
            <h5 className='card-title'>Wrapping the component with withRouter will give access back to Router params like history,location n match, which wont be available when using render in Route switch</h5>
            <h4>withRouter - Higher order component</h4>

            <p className='card-text'>{message}</p>
            <p className='card-text'>{match.url}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ParamsView.propTypes = {
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default withRouter(ParamsView);

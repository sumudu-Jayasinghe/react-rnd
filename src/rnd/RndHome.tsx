import React from 'react';
import { NavLink } from 'react-router-dom';

export const RndHome = ()=>{
    return (
        <div className='jumbotron' style={{marginTop:'70px'}}>
        <h1 className='display-4'>RnD</h1>
        
        <hr className='my-4' />
       
        <NavLink to="/rnd/git" className="lnk-btn btn btn-light btn-lg">Git User Fetch</NavLink>
        
      </div>
    )
}
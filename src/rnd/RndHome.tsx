import React from 'react';
import { NavLink } from 'react-router-dom';

export const RndHome = ()=>{
    return (
        <div className='jumbotron' style={{marginTop:'70px'}}>
        <h1 className='display-4'>RnD</h1>
        
        <hr className='my-4' />
       
        <NavLink to="/rnd/git" className="lnk-btn btn btn-light btn-lg">Git User Fetch</NavLink>
        <NavLink to="/rnd/prompt" className="lnk-btn btn btn-light btn-lg">Prompt on Leave</NavLink>
        <NavLink to="/rnd/404" className="lnk-btn btn btn-light btn-lg">404</NavLink>
        <NavLink to="/rnd/rp" className="lnk-btn btn btn-light btn-lg">Access Route Params</NavLink>
        <NavLink to="/rnd/params" className="lnk-btn btn btn-light btn-lg">Pass Params with Render</NavLink>
        
      </div>
    )
}
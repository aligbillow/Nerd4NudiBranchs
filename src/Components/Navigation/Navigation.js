import React from "react";

const Navigation = ({ onRouteChange}) => {
    return (
        <div>

        <nav style={{justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('Login')} className='NewUser'>Logout</p>
        
        <p onClick={onRouteChange} className='Login'>Login</p>
        </nav>

        </div>
    );
} 

export default Navigation;

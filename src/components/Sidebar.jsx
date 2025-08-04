import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
    return (
        <div className={`sidebar ${props.navToggle ? 'active' : ''}`}>
            <ul>
                <li><NavLink to='/' className='text-decoration-none' exact="true">Current</NavLink> </li>
                <li><NavLink to="/day-details" className='text-decoration-none'>Days Details</NavLink>  </li>
            </ul>
        </div>
    );
}

export default Sidebar;
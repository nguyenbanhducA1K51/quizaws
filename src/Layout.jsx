import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from './view/Navbar';
function Layout() {
    return (
        <div>
           
            <Navbar/>

            <Outlet />
        </div>
    );
}

export default Layout;

// {/* <nav>
//     <Link to="/">Home</Link>
//     <Link to="/learn">Learn</Link>
//     {/* Add more links as needed */}
// </nav> */}

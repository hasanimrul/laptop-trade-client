import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

const Navbar = () => {
    // const { logOut, user } = useContext(AuthContext)


    return (
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

        //             </ul>
        //         </div>
        //         <Link to='/' className="btn btn-ghost normal-case text-blue-600 font-extrabold text-4xl">Laptop Trade</Link>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal p-0">

        //         </ul>
        //     </div>

        //     <div className="navbar-end">
        //         <Link className='btn btn-primary mr-3' to='/blog'>Blog</Link>
        //         {user?.email ?
        //             <>
        //                 <Link to='/' onClick={() => logOut()} className="btn btn-primary mr-3">log out</Link>
        //                 <Link to='/dashboard' className="btn btn-primary">Dashboard</Link>
        //             </>
        //             :
        //             <Link to='/login' className="btn btn-primary">Log in</Link>}
        //     </div>
        // </div>
        <div className='container mx-auto'>
            <TopNav />
            <BottomNav />
        </div>
    );
};

export default Navbar;
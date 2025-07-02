import React, { useContext } from 'react';
import logoIcon from '../assets/images/user.png'
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.config';
import AuthContext from '../Provider/AuthContext';


const Navbar = () => {
  const { users } = useContext(AuthContext);
  const links = <div className='flex gap-3 text-gray-500 items-center'>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="#">About</NavLink></li>
    <li><NavLink to="#">Career</NavLink></li>
  </div>


  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        console.log("user logout", result.user)
      })
      .catch(error => {
        console.log("user logout failed", error.message);
      })
  }
  return (
    <div>
      <div className="navbar my-5 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl">Dragon News</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex justify-center items-center gap-3'>
            {
              users ? <div className='flex gap-2'>
                <div className='flex flex-row justify-center gap-3 items-center'>
                  <h2>{users?.displayName}</h2>
                  <img className='w-10 h-10 rounded-full' src={users?.photoURL} alt="" />
                </div>
                <button className='btn btn-neutral' onClick={handleSignOut}>Log Out</button>
              </div>
                :
                <div className='flex gap-3'>
                  <img src={logoIcon} alt="" />
                  <Link to="/auth/login" className='btn btn-accent rounded-none'>Login</Link>
                </div>

            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useContext } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContextComp';
import { FaFacebook, FaLinkedin, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleUserLogout = () => {
    userLogout()
      .then(res => {
        toast.success('Logout Successful!!');
        Navigate('/');
      })
      .catch(err => { })
  }

  const navMenuItems = () => {
    return (
      <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        {
          !user ?
            <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/register'>Register</NavLink></li>
            </>
            :
            <>
              <li><NavLink to='/my-reviews'>My Reviews</NavLink></li>
              <li><NavLink to='/add-service'>Add Service</NavLink></li>
              <li><button onClick={handleUserLogout}><FaSignOutAlt></FaSignOutAlt></button></li>
            </>
        }
      </>
    );
  }

  return (
    <header>
      <div className="topbar bg-primary text-white text-mxs">
        <div className="container flex">
          <div className='basis-6/12 p-2 hidden md:block'>
            <p>NEED HELP? TALK TO AN EXPERT +8801999999999</p>
          </div>
          <div className='basis-full md:basis-6/12 p-2 text-center md:text-right'>
            <span>Follow us: </span>
            <a href="https://www.facebook.com/sifatullahhh" target="_blank" rel="noreferrer">
              <FaFacebook className='inline mx-2'></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/sifatullahsu" target="_blank" rel="noreferrer">
              <FaLinkedin className='inline mx-2'></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="navbar justify-between bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost text-primary lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navMenuItems()}
              </ul>
            </div>
            <Link to='/'>
              <img src={logo} alt="" className='w-32' />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {navMenuItems()}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
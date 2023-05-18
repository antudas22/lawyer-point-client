import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoLaw } from "react-icons/go";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
      logOut()
      .then( () => {})
      .catch(error => console.error(error))
  }

  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      {
        user?.uid &&
        <li>
        <Link to='/dashboard' >Dashboard</Link>
      </li>
      }
      <li>
        <Link to="/alllawyers">All Lawyers</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 my-2">
        <div className="navbar-start">
          <Link
            to="/"
            className="flex items-end uppercase text-xl md:text-2xl lg:text-2xl font-serif text-gray-500"
          >
            Lawyer
            <span className="text-3xl lg:text-5xl md:text-5xl text-primary">
              <GoLaw />
            </span>
            Point
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="profile-pic" />
                  ) : (
                    <div className="flex h-full justify-center items-center">
                      <FaUser className="text-2xl text-gray-400" />
                    </div>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 gap-1 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                    <Link to='/profile' className="tooltip tooltip-left text-start" data-tip="View Profile">{user?.displayName}</Link>
                </li>
                <div className="lg:hidden">
                    <ul className="">{menu}</ul>
                </div>
                <li>
                  <button onClick={handleLogout} className="bg-primary text-white">
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (

              <div>
                <div className="navbar-end lg:hidden">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul tabIndex={0} className="menu gap-1 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {menu}
          <li><Link to="/login" className="bg-primary text-white">
              Login
            </Link></li>
        </ul>
      </div>
      </div>
            <div className="hidden lg:block">
            <Link to="/login" className="btn btn-primary text-white ">
              Login
            </Link>
            </div>
              </div>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

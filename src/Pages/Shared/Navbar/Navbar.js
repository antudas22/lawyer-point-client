import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoLaw } from "react-icons/go";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="">About Us</Link>
      </li>
      <li>
        <Link to="">Blog</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 my-2">
        <div className="navbar-start">
          <Link
            to="/"
            className="flex items-end uppercase text-2xl font-serif text-gray-500"
          >
            Lawyer
            <span className="text-5xl text-primary">
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
                {
                        <p className="">{user?.displayName}</p>
                        ||
                        <p className="">{user?.email}</p>
                }
                </li>
                <li>
                  <Link to='' className="justify-between">
                    Profile
                  </Link>
                </li>
                <div className="lg:hidden">
                    <ul className="">{menu}</ul>
                </div>
                <li>
                  <button className="bg-primary text-white">
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

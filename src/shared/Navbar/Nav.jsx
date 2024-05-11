import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/Images/user.png";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-awesome-button/dist/styles.css";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";
import { motion } from "framer-motion";
import fadeIn from "../../Utilities/varient";

const Nav = () => {
  const { user, logoutUser, loading } = useContext(AuthContext);

  const navlinks = (
    <>
      <li className="flex">
        {" "}
        <NavLink
          to="/"
          className={` 
          flex items-center px-4 rounded-none pt-4 uppercase text-base text-[#3a3a3a] duration-75 font-font-merriweather  `}
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        {" "}
        {user && (
          <NavLink
            to="/addblogs"
            className={` ${({ isActive }) => {
              console.log(isActive);
            }}flex items-center px-4 rounded-none duration-75 pt-4 uppercase text-base text-[#3a3a3a] font-font-merriweather `}
          >
            Add Blogs
          </NavLink>
        )}
      </li>
      {user && (
        <>
          <li className="flex">
            {" "}
            <NavLink
              to="/featuredblogs"
              className={` ${({ isActive }) => {
                console.log(isActive);
              }}flex items-center px-4 rounded-none duration-75 pt-4 uppercase text-base text-[#3a3a3a] font-font-merriweather `}
            >
              Featured blogs
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li className="flex">
            {" "}
            <NavLink
              to={`/wishlist`}
              className={` ${({ isActive }) => {
                console.log(isActive);
              }}flex items-center px-4 rounded-none duration-75 pt-4 uppercase text-base text-[#3a3a3a]  font-font-merriweather`}
            >
              Wishlist
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast("logged out successfully");
      })
      .catch((err) => console.log(err));
  };

  const buttonProfile = (
    <>
      {/* buttons and user profile */}
      <div className="items-center flex-shrink-0 lg:flex mt-4">
        {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
        {loading ? (
          <>
            <span className="loading loading-spinner text-success"></span>
          </>
        ) : (
          <>
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    <div className="avatar online">
                      <div className="w-11 rounded-full">
                        <img src={user?.photoURL || logo} />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/userprofile">
                        {user?.displayName || "user Name not found"}
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Log out</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="self-center px-8 py-3 font-semibold rounded bg-[#F26767] text-white"
                >
                  Sign in
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar items-center md:items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost   animate__animated animate__tada text-3xl md:text-4xl font-bold  bg-opacity-70 py-5 h-auto min-h-0  "
          >
            <h2 className="font-font-oswald">
              <span className="text-[#f26767] text-4xl">B</span>loog
              <span className="text-[#f26767] text-4xl">y</span>s
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{navlinks}</ul>
        </div>
        <div className="navbar-end z-[4]">{buttonProfile}</div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Nav;

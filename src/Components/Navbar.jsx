import { NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { FiMenu, FiLogOut, FiHome, FiClipboard, FiUser } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      Swal.fire({
        icon: "success",
        title: "Logged Out Successfully",
        text: "You have been logged out. See you again!",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: error.message,
      });
    }
  };

  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 shadow-lg px-6 py-3 text-white">
      <div className="navbar-start">
        <a className="text-3xl font-bold tracking-wide">TaskHive</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"}>
              <FiHome className="inline-block mr-2" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/taskboard" className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"}>
              <FiClipboard className="inline-block mr-2" /> Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"}>
              <FiUser className="inline-block mr-2" /> Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <label className="hidden lg:flex cursor-pointer" title="Toggle Dark Mode">
          <input type="checkbox" className="hidden" onChange={handleThemeToggle} />
          {isDarkMode ? <MdLightMode className="w-7 h-7 cursor-pointer" /> : <MdDarkMode className="w-7 h-7 cursor-pointer" />}
        </label>

        {user ? (
          <div className="hidden lg:flex items-center space-x-3">
            <img src={user.photoURL || "/default-avatar.png"} alt="User Avatar" className="w-10 h-10 rounded-full border border-gray-300" />
            <span className="font-medium">{user.displayName || "User"}</span>
            <button onClick={handleSignOut} className="btn btn-error flex items-center space-x-2">
              <FiLogOut /> <span>Logout</span>
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-primary px-4 py-2 rounded-lg">Sign In</NavLink>
        )}
      </div>

      <div className="dropdown navbar-end lg:hidden relative">
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="btn btn-ghost btn-circle">
          <FiMenu className="h-6 w-6" />
        </button>
        {isDropdownOpen && (
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-900 absolute right-0 top-full">
            <li>
              <NavLink to="/"> <FiHome className="inline-block mr-2" /> Home</NavLink>
            </li>
            <li>
              <NavLink to="/taskboard"> <FiClipboard className="inline-block mr-2" /> Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/profile"> <FiUser className="inline-block mr-2" /> Profile</NavLink>
            </li>
            {user && (
              <>
                <li className="flex items-center px-4 py-2">
                  <img src={user.photoURL || "/default-avatar.png"} alt="User Avatar" className="w-8 h-8 rounded-full border border-gray-300 mr-3" />
                  <span className="font-medium">{user.displayName || "User"}</span>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-error flex items-center">
                    <FiLogOut className="mr-2" /> Logout
                  </button>
                </li>
              </>
            )}
            {!user && (
              <li>
                <NavLink to="/login">Sign In</NavLink>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
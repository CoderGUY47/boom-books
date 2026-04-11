import { Menu } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-400 bg-green-500/10 border border-green-500/30 font-semibold tracking-wide rounded-full px-4 py-2 transition-all duration-300"
      : "text-gray-300 hover:text-white hover:bg-white/5 font-medium tracking-wide rounded-full px-4 py-2 border border-transparent transition-all duration-300";

  const links = (
    <>
      <li className="my-1 lg:my-0">
        <NavLink to={"/"} className={linkClass}>
          Home
        </NavLink>
      </li>
      <li className="my-1 lg:my-0">
        <NavLink to={"/books"} className={linkClass}>
          Listed Books
        </NavLink>
      </li>
      <li className="my-1 lg:my-0">
        <NavLink to={"/pages-to-read"} className={linkClass}>
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center py-6 px-4">
      <div className="navbar container mx-auto w-full lg:w-[67%] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.6)] px-4 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white lg:hidden hover:bg-white/10">
                <Menu className="w-6 h-6" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-full mt-4 w-60 p-3 shadow-2xl gap-2 z-50"
            >
              {links}
            </ul>
          </div>
          <Link to={'/'} className="hidden lg:flex items-center ml-2">
            <img src="/assets/book-logo.png" className="w-20 h-auto" alt="Boom Books Logo" />
          </Link>
        </div>
        
        <div className="navbar-center lg:hidden">
          <Link to={'/'} className="flex items-center drop-shadow-lg">
            <img src="/assets/book-logo.png" className="w-16 h-auto" alt="Boom Books Logo" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 gap-2">
            {links}
          </ul>
        </div>
        
        <div className="navbar-end pr-2">
          <div className="flex gap-3">
            <button className="btn border-none bg-white/5 text-gray-300 hover:text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300 rounded-full px-6 hidden sm:flex">
              Login
            </button>
            <button className="btn border-none bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold tracking-wide rounded-full px-6 transition-all duration-300">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

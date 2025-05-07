import React from "react";
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more from "../assets/more.png";
import notification from "../assets/notification.png";
import profile from "../assets/jack.png";
import { useStateContext } from "../../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setSidebar, sidebar, expanded, setExpanded } = useStateContext();

  return (
    <nav className="text-[#5a5a5a] sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-white shadow-md w-full">
      {/* Left: Menu and Logo */}
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <img src={menu_icon} alt="menu" className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="hidden sm:block">
          <img src={logo} alt="logo" className="w-24 sm:w-28" />
        </Link>
      </div>

      {/* Middle: Search Bar */}
      <div className="hidden md:flex items-center bg-[#f0f0f0] px-4 py-2 rounded-full w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-1 text-sm"
        />
        <button aria-label="Search">
          <img src={search} alt="search" className="w-4 h-4 cursor-pointer" />
        </button>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button aria-label="Upload">
          <img src={upload_icon} alt="upload" className="w-6 h-6" />
        </button>
        <button aria-label="More Options">
          <img src={more} alt="more" className="w-6 h-6" />
        </button>
        <button aria-label="Notifications">
          <img src={notification} alt="notification" className="w-6 h-6" />
        </button>
        <button aria-label="Profile">
          <img
            src={profile}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      </div>
    </nav>
  );
};


export default Navbar;

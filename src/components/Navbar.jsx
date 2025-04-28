import React from "react";
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more from "../assets/more.png";
import notification from "../assets/notification.png";
import profile from "../assets/jack.png";
import {useStateContext} from '../../context'

const Navbar = () => {
  const {setSidebar, sidebar} = useStateContext()
  return (
    <nav className="text-[#5a5a5a] sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Left: Menu and Logo */}
      <div className="flex items-center gap-4">
        <img
          src={menu_icon}
          alt="menu"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          className="cursor-pointer w-6 h-6"
        />
        <img src={logo} alt="logo" className="cursor-pointer w-28" />
      </div>

      {/* Middle: Search Bar */}
      <div className="flex items-center bg-[#f0f0f0] px-4 py-2 rounded-full w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-1 text-sm"
        />
        <img src={search} alt="search" className="w-4 h-4 cursor-pointer" />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6">
        <img
          src={upload_icon}
          alt="upload"
          className="cursor-pointer w-6 h-6"
        />
        <img src={more} alt="more" className="cursor-pointer w-6 h-6" />
        <img
          src={notification}
          alt="notification"
          className="cursor-pointer w-6 h-6"
        />
        <img
          src={profile}
          alt="profile"
          className="cursor-pointer w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;

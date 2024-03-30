import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, search, user, menu } from "../assets";

const Navbar = () => {
  return(
    <div className="m-5">
        <header className="px-10 py-4 flex justify-between">
            <div className="flex items-center gap-1">
            <img src={logo} alt="logo" />
            <span className="font-bold">Rentals@PICT</span>
            </div>
            <div className="hidden md:block">
            <div className={`flex py-2 px-4 border border-gray-300 rounded-full gap-4 items-center shadow-md shadow-gray-300`}>
              <div>Anything</div>
              <div className="border-l border-gray-300"></div>
              <div>Anywhere</div>
              <div className="border-l border-gray-300"></div>
              <div>Any time</div>
              <button className="bg-[#30d5c8] rounded-full p-1">
                <img src={search} alt="search" />
              </button>
            </div>
            </div>
            <Link to={'/login'} className="flex py-2 px-4 border border-gray-300 rounded-full gap-4 items-center">
              <img src={menu} alt="menu" />
              <img src={user} alt="user" />
            </Link>
        </header>
        <div className="m-7">
          <div className={`sm:hidden flex py-2 px-4 border border-gray-300 rounded-full gap-4 items-center justify-between shadow-mg shadow-gray-300`}>
              <div>Search....</div>
              <button className="bg-[#30d5c8] rounded-full p-1">
                <img src={search} alt="search" />
              </button>
          </div>
        </div>
        
    </div>
  );  
};

export default Navbar;

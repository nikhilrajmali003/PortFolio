import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black to-[#0a192f]">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer text-white">
              NIKHIL RAJ MALI
              <p className="text-sm text-gray-400">Full Stack Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer text-white"
                key={id}
              >
                <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div onClick={() => setMenu(!menu)} className="md:hidden text-white">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-gradient-to-br from-black to-[#0a192f] h-screen w-full fixed top-16 left-0 flex items-center justify-center">
            <ul className="md:hidden flex flex-col space-y-6 text-xl text-white">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link onClick={() => setMenu(false)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

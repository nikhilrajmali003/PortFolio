import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-gray-800" />
      <footer className="py-8 sm:py-12 bg-gradient-to-br from-black to-[#0a192f] text-white text-center">
        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-gray-500">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#38BDF8] transition duration-300 transform hover:scale-110"
          >
            <FaFacebook className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#38BDF8] transition duration-300 transform hover:scale-110"
          >
            <FaTwitter className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-[#38BDF8] transition duration-300 transform hover:scale-110"
          >
            <FaInstagram className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-[#38BDF8] transition duration-300 transform hover:scale-110"
          >
            <FaLinkedinIn className="text-2xl sm:text-3xl" />
          </a>
        </div>

        {/* Copyright & Credit */}
        <div className="mt-6 sm:mt-8 border-t border-gray-800 pt-4 sm:pt-6 max-w-xs sm:max-w-md mx-auto">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Supportive Partner ❤️ <span className="font-semibold text-[#38BDF8]">Nikhil</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-gray-800" />
      <footer className="py-12 bg-gradient-to-br from-black to-[#0a192f] text-white text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-gray-500">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#38BDF8] hover:scale-110 transition duration-300"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#38BDF8] hover:scale-110 transition duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-[#38BDF8] hover:scale-110 transition duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-[#38BDF8] hover:scale-110 transition duration-300"
          >
            <FaLinkedinIn size={28} />
          </a>
        </div>

        {/* Copyright & Credit */}
        <div className="mt-8 border-t border-gray-800 pt-6 max-w-md mx-auto">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Supportive Partner ❤️ <span className="font-semibold text-[#38BDF8]">Nikhil</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React from "react";
import pic from "../../public/photo.avif";
import {
  FaSquareFacebook,
  FaTelegram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-10 bg-gradient-to-br from-black to-[#0a192f] text-white"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-lg text-[#38BDF8]">Welcome To My Feed</span>
            {/* Animated Developer Text */}
            <div className="flex flex-wrap md:flex-nowrap items-center text-2xl md:text-4xl font-semibold">
              <h1>Hello, I'm a&nbsp;</h1> {/* Non-breaking space */}
              <ReactTyped
                className="text-orange-500 font-bold" // Orange color
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-md text-gray-300 mt-4">
              I'm{" "}
              <span className="font-bold text-[#38BDF8]">Nikhil Raj Mali</span>,
              a third-year Computer Science student at Techno India NJR.
              Passionate about Java, Web Technologies, and building scalable
              applications. Always eager to learn and innovate!
            </p>

            {/* Social Media & Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between mt-6">
              {/* Social Media */}
              <div className="space-y-2">
                <h1 className="font-bold text-[#38BDF8] text-lg">
                  Available on
                </h1>
                <ul className="flex space-x-4 text-xl">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-gray-400 hover:text-[#1877F2] transition duration-300 cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-gray-400 hover:text-[#0077B5] transition duration-300 cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-gray-400 hover:text-[#0088CC] transition duration-300 cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h1 className="font-bold text-[#38BDF8] text-lg">
                  Currently working on
                </h1>
                <div className="flex space-x-5 text-3xl">
                  <SiMongodb className="text-gray-400 hover:text-[#47A248] transition duration-300 cursor-pointer" />
                  <SiExpress className="text-gray-400 hover:text-[#828282] transition duration-300 cursor-pointer" />
                  <FaReact className="text-gray-400 hover:text-[#61DAFB] transition duration-300 cursor-pointer" />
                  <FaNodeJs className="text-gray-400 hover:text-[#3C873A] transition duration-300 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="md:w-1/2 md:ml-20 order-1">
            <div className="relative flex items-center justify-center">
              <img
                src={pic}
                className="rounded-full md:w-[450px] md:h-[450px] border-4 border-[#38BDF8] shadow-xl"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />
    </>
  );
}

export default Home;

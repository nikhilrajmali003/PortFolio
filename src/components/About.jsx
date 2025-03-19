"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|iphone|ipad|ipod|windows phone/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const projects = [
    {
      title: "Hotel Management System 🏨",
      description: "A Java-based Hotel Management System utilizing OOP principles.",
      link: "https://github.com/nikhilrajmali003/Codalpha-Internship/tree/main/hotelreservesionsystem",
    },
    {
      title: "Stock Trading Platform 📈",
      description: "A Java-based Stock Trading Platform using OOP concepts for stock trading and market analysis.",
      link: "https://github.com/nikhilrajmali003/Codalpha-Internship/tree/main/stock%20trading%20platform",
    },
    {
      title: "Student Grade Calculator 🎓",
      description: "A Java-based application that calculates students' grades based on marks.",
      link: "https://github.com/nikhilrajmali003/Codalpha-Internship/tree/main/Studentgradetracker",
    },
    {
      title: "E-Commerce Shopping Website 🛒",
      description: "A full-stack e-commerce website using MongoDB, Express, React, and Node.js.",
      link: "your-github-repo-link",
    },
  ];

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-10 bg-gradient-to-br from-black to-[#0a192f] text-white"
    >
      {/* About Me */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#38BDF8] mb-5">About Me</h1>
        <p className="text-lg max-w-2xl mx-auto">
          I’m <span className="text-[#f8a538] font-bold">Nikhil Raj Mali</span>,
          a passionate Computer Science Engineering student with expertise in
          Java and web technologies. I love solving complex problems, writing
          efficient code, and building scalable applications.
        </p>
      </div>

      {/* Projects Section */}
      <div className="mt-12 text-center">
        <h1 className="text-[#38BDF8] text-2xl font-semibold mb-4">Projects</h1>

        {isMobile ? (
          // Show Swiper Slider only for Mobile Devices
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="w-full md:w-2/3 mx-auto"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg border border-gray-700">
                  <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#38BDF8] font-semibold hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Show Normal Grid Layout for Laptops & PCs
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg border border-gray-700"
              >
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#38BDF8] font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mission Statement */}
      <div className="mt-12 text-center">
        <h1 className="text-[#38BDF8] text-2xl font-semibold">Mission Statement</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          My mission as a Java Developer is to build scalable, high-performance
          applications that solve real-world problems efficiently.
        </p>
      </div>
    </div>
  );
}

export default About;

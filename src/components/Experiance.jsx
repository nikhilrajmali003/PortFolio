"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import java from "../../public/java.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

const technologies = [
  { id: 1, logo: mongoDB, name: "MongoDB" },
  { id: 2, logo: express, name: "Express.js" },
  { id: 3, logo: reactjs, name: "ReactJS" },
  { id: 4, logo: nodejs, name: "NodeJS" },
  { id: 5, logo: java, name: "Java" },
];

const experience = [
  { id: 1, logo: html, name: "HTML" },
  { id: 2, logo: css, name: "CSS" },
  { id: 3, logo: javascript, name: "JavaScript" },
  { id: 4, logo: spring, name: "Spring" },
  { id: 5, logo: springBoot, name: "Spring Boot" },
];

function PortFolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice =
        /android|iphone|ipad|ipod|windows phone/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-10 bg-gradient-to-br from-black to-[#0a192f] text-white">
      {/* Portfolio Section */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#38BDF8]">Portfolio</h1>
        <p className="text-gray-400 text-lg mt-2">
          A showcase of technologies I have worked with.
        </p>
      </div>

      {isMobile ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          className="w-full md:w-2/3 mx-auto mt-8"
        >
          {technologies.map(({ id, logo, name }) => (
            <SwiperSlide key={id}>
              <div className="bg-[#121212] border border-gray-700 rounded-xl shadow-lg p-5 text-center">
                <img
                  src={logo}
                  className="w-24 h-24 mx-auto rounded-full border-2 border-[#38BDF8] p-2 shadow-md"
                  alt={`${name} Logo`}
                />
                <h2 className="text-xl font-semibold mt-3 text-[#E2E8F0]">
                  {name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {technologies.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-[#121212] border border-gray-700 rounded-xl shadow-lg p-5 text-center hover:scale-105 hover:border-[#38BDF8] transition duration-300"
            >
              <img
                src={logo}
                className="w-24 h-24 mx-auto rounded-full border-2 border-[#38BDF8] p-2 shadow-md"
                alt={`${name} Logo`}
              />
              <h2 className="text-xl font-semibold mt-3 text-[#E2E8F0]">
                {name}
              </h2>
            </div>
          ))}
        </div>
      )}

      {/* Experience Section */}
      <div className="text-center mt-14">
        <h1 className="text-4xl font-extrabold text-[#38BDF8]">Experience</h1>
        <p className="text-gray-400 text-lg mt-2">
          I have over 1 year of experience in the following technologies:
        </p>
      </div>

      {isMobile ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          className="w-full md:w-2/3 mx-auto mt-8"
        >
          {experience.map(({ id, logo, name }) => (
            <SwiperSlide key={id}>
              <div className="bg-[#121212] border border-gray-700 rounded-xl shadow-lg p-5 text-center">
                <img
                  src={logo}
                  className="w-24 h-24 mx-auto rounded-full border-2 border-[#38BDF8] p-2 shadow-md"
                  alt={`${name} Logo`}
                />
                <h2 className="text-xl font-semibold mt-3 text-[#E2E8F0]">
                  {name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          {experience.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-[#121212] border border-gray-700 rounded-xl shadow-lg p-5 text-center hover:scale-105 hover:border-[#38BDF8] transition duration-300"
            >
              <img
                src={logo}
                className="w-24 h-24 mx-auto rounded-full border-2 border-[#38BDF8] p-2 shadow-md"
                alt={`${name} Logo`}
              />
              <h2 className="text-xl font-semibold mt-3 text-[#E2E8F0]">
                {name}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PortFolio;

import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "MongoDB" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: spring, name: "Spring" },
    { id: 6, logo: springBoot, name: "Spring Boot" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-10 bg-gradient-to-br from-black to-[#0a192f] text-white"
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-[#38BDF8]">Experience</h1>
        <p className="text-gray-400 text-lg">
          I have over 1 year of experience in the following technologies:
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 my-10 justify-center">
        {cardItem.map(({ id, logo, name }) => (
          <div
            className="bg-[#121212] border border-gray-700 backdrop-blur-md rounded-xl shadow-lg p-5 text-center hover:scale-105 hover:shadow-lg hover:border-[#38BDF8] transition duration-300"
            key={id}
          >
            <img
              src={logo}
              className="w-[130px] h-[130px] rounded-full border-2 border-[#38BDF8] p-1"
              alt={name}
            />
            <div className="text-[#ececec] font-semibold text-lg mt-2">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

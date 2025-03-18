import React from "react";
import java from "../../public/java.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

const cardItem = [
  {
    id: 1,
    logo: mongoDB,
    name: "MongoDB",
    description:
      "A NoSQL database designed for scalability and high-performance applications.",
  },
  {
    id: 2,
    logo: express,
    name: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework for building APIs.",
  },
  {
    id: 3,
    logo: reactjs,
    name: "ReactJS",
    description:
      "A powerful JavaScript library for building interactive and scalable user interfaces.",
  },
  {
    id: 4,
    logo: nodejs,
    name: "NodeJS",
    description:
      "A runtime environment that enables JavaScript to be used for backend development.",
  },
  {
    id: 5,
    logo: java,
    name: "Java",
    description:
      "A versatile, object-oriented programming language used for web and enterprise applications.",
  },
];

function PortFolio() {
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-10 bg-gradient-to-br from-black to-[#0a192f] text-white"
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#38BDF8]">Portfolio</h1>
        <p className="text-gray-400 text-lg mt-2">
          A showcase of technologies I have worked with.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {cardItem.map(({ id, logo, name, description }) => (
          <div
            key={id}
            className="bg-[#121212] border border-gray-700 backdrop-blur-md rounded-xl shadow-lg p-5 text-center hover:scale-105 hover:shadow-lg hover:border-[#38BDF8] transition duration-300"
          >
            <img
              src={logo}
              className="w-24 h-24 mx-auto rounded-full border-2 border-[#38BDF8] p-2 shadow-md"
              alt={`${name} Logo`}
            />
            <h2 className="text-xl font-semibold mt-3 text-[#E2E8F0]">
              {name}
            </h2>
            <p className="text-gray-400 text-sm mt-2">{description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;

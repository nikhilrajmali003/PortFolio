import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 py-10 bg-gradient-to-br from-black to-[#0a192f] text-white"
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#38BDF8] mb-5">
          About Me
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          I’m <span className="text-[#f8a538] font-bold">Nikhil Raj Mali</span>,
          a passionate Computer Science Engineering student with expertise in
          Java and web technologies. I love solving complex problems, writing
          efficient code, and building scalable applications. My goal is to
          create impactful digital solutions that enhance user experiences and
          drive innovation.
        </p>
      </div>

      {/* Education */}
      <div className="mt-12 text-center">
        <h1 className="text-[#38BDF8] text-2xl font-semibold">
          Education & Training
        </h1>
        <div className="mt-4">
          <p>
            <strong>B.Tech in Computer Science & Engineering</strong>
            <br />
            Techno India NJR | Expected 2026
          </p>
          <p>
            <strong>Full-Stack Web Development Certification</strong>
            <br />
            Coursera | 2024
          </p>
          <p>
            <strong>Java Programming Certification</strong>
            <br />
            Simplilearn | 2024
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12 text-center">
        <h1 className="text-[#38BDF8] text-2xl font-semibold">
          Skills & Expertise
        </h1>
        <p>
          <strong>Proficient in:</strong> Java, JavaScript, C++
        </p>
        <p>
          <strong>Experienced with:</strong> React, Node.js, Express, MongoDB,
          MySQL
        </p>
        <p>
          <strong>Strong grasp of:</strong> OOP, Data Structures & Algorithms,
          Web Development
        </p>
      </div>

      {/* Projects */}
      <div className="mt-12 text-center">
        <h1 className="text-[#38BDF8] text-2xl font-semibold">Projects</h1>
        <div className="mt-6 space-y-6 flex flex-col items-center">
          
          {/* Hotel Management System */}
          <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg w-full md:w-2/3 border border-gray-700">
            <h2 className="text-xl font-semibold text-[#ffffff]">
              Hotel Management System 🏨
            </h2>
            <p className="mt-2 text-gray-300">
              A Java-based Hotel Management System utilizing OOP principles. It
              manages room bookings, guest details, and billing efficiently.
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm text-left">
              <li>Encapsulation, Inheritance, and Polymorphism applied.</li>
              <li>CLI-based user interface.</li>
              <li>File handling for data storage.</li>
            </ul>
            <a
              href="https://github.com/nikhilrajmali003/Codalpha-Internship/tree/main/hotelreservesionsystem"
              className="inline-block mt-3 text-[#38BDF8] font-semibold hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Stock Trading Platform */}
          <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg w-full md:w-2/3 border border-gray-700">
            <h2 className="text-xl font-semibold text-[#ffffff]">
              Stock Trading Platform 📈
            </h2>
            <p className="mt-2 text-gray-300">
              A Java-based Stock Trading Platform using OOP concepts. It allows
              users to trade stocks, track portfolios, and analyze market
              trends.
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm text-left">
              <li>Object-oriented design for stock and user management.</li>
              <li>Real-time stock price simulation.</li>
              <li>File handling for transaction records.</li>
            </ul>
            <a
              href="https://github.com/nikhilrajmali003/Codalpha-Internship/tree/main/stock%20trading%20platform"
              className="inline-block mt-3 text-[#38BDF8] font-semibold hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Student Grade Calculator */}
          <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg w-full md:w-2/3 border border-gray-700">
            <h2 className="text-xl font-semibold text-[#ffffff]">
              Student Grade Calculator 🎓
            </h2>
            <p className="mt-2 text-gray-300">
              A Java-based application that calculates students' grades based on
              their marks in different subjects.
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm text-left">
              <li>
                Used conditional statements to determine grades (A, B, C).
              </li>
              <li>Handled multiple subjects and calculated percentage.</li>
              <li>Built using Java and Object-Oriented Programming (OOP).</li>
            </ul>
            <a
              href="https://github.com/nikhilrajmali003/Codalpha-Internship/tree/main/Studentgradetracker"
              className="inline-block mt-3 text-[#38BDF8] font-semibold hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* E-Commerce Shopping Website */}
          <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg w-full md:w-2/3 border border-gray-700">
            <h2 className="text-xl font-semibold text-[#ffffff]">
              E-Commerce Shopping Website 🛒
            </h2>
            <p className="mt-2 text-gray-300">
              A full-stack e-commerce shopping website built using the MERN
              stack (MongoDB, Express, React, Node.js).
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm text-left">
              <li>Implemented user authentication (JWT) for security.</li>
              <li>Created RESTful API for products, orders, and users.</li>
              <li>Used Redux for state management.</li>
              <li>Integrated Stripe API for secure payments.</li>
            </ul>
            <a
              href="your-github-repo-link"
              className="inline-block mt-3 text-[#38BDF8] font-semibold hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-12 text-center">
        <h1 className="text-[#38BDF8] text-2xl font-semibold">
          Mission Statement
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          My mission as a Java Developer is to build scalable, high-performance
          applications that solve real-world problems efficiently. I am
          committed to writing clean, maintainable code and continuously
          improving my skills in Java and related technologies.
        </p>
      </div>
    </div>
  );
}

export default About;

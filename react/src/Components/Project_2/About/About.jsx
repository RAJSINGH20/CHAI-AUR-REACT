import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">About Me</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Hello! I'm{" "}
        <span className="font-semibold text-blue-600">Raj Singh</span>, a
        passionate and detail-oriented software developer. I specialize in
        creating efficient, scalable, and user-friendly applications using
        modern web technologies like
        <span className="font-medium text-gray-800">
          {" "}
          React, Tailwind CSS, and Node.js
        </span>
        .
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        I love turning ideas into reality through code. When I'm not coding, I
        enjoy exploring new tools, contributing to open-source projects, and
        expanding my knowledge of emerging tech.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">
            Education
          </h3>
          <p className="text-gray-700">
            BCA - Maulana Abul Kalam Azad University of Technology
            <br />
            (2022 - 2025)
          </p>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Tailwind CSS</li>
            <li>Git & GitHub</li>
            <li>Node.js, MongoDB (basic)</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">
            Experience/Intership
          </h3>
          <p className="text-gray-700">
            ○ Successfully completed a 6-week industrial training program on Web
            Development With Django at Flexon Lab, Durgapur.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Personal Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Problem Solving</li>
            <li>Hard Working</li>
            <li>Positive Attitude</li>
            <li> Easy Adaptive by Nature</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

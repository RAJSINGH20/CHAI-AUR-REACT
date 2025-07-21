// src/Pages/Project.jsx (or wherever this lives)
import React from "react";
import { Link , NavLink } from "react-router-dom";

// Import components properly if you're going to render them
// import Bg_changer from "../Components/Bg_changer";
// import Counter from "../Components/Counter";
// import Card from "../Components/Card";
// import PasswordGen from "../Components/PasswordGen"; // example

const Project = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-orange-800">College Projects</h1>

      <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
        <div>
          <strong>Hospital Management System:</strong>
          <ul className="list-disc list-inside ml-5">
            <li>Developed using Django (backend) and HTML, CSS, JavaScript (frontend).</li>
            <li>Implemented user authentication and database integration with PostgreSQL/MySQL.</li>
            <li>Created API endpoints for efficient data handling.</li>
            <li>Github link : <a href="https://github.com/RAJSINGH20/Hospital_Management_project.git" target="blank"> Click here</a> </li>
          </ul>
        </div>

        <div>
          <strong>E-Commerce Website:</strong>
          <ul className="list-disc list-inside ml-5">
            <li>Built with Django and responsive frontend using HTML, CSS, JavaScript.</li>
            <li>Integrated Twilio API for WhatsApp bot functionality.</li>
            <li>Enabled users to upload images and receive disease diagnoses via AI model.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-blue-800">Mini React Projects</h2>
      <ul className="list-disc list-inside text-lg space-y-2 text-blue-900 ml-5">
        <li>
          <NavLink to="/bg-changer" className="hover:underline text-blue-700">
            Background Changer
          </NavLink>
        </li>
        <li>
          <Link to="/password-gen" className="hover:underline text-blue-700">
            Password Generator
          </Link>
        </li>
        <li>
          <Link to="/counter" className="hover:underline text-blue-700">
            Counter
          </Link>
        </li>
        <li>
          <Link to="/card" className="hover:underline text-blue-700">
            Card Display
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Project;
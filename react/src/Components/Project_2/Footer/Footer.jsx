import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-100 text-gray-700">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/003/794/789/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-matrix-background-with-digits-1-0-illustration-vector.jpg"
                className="h-14 rounded-md shadow-md"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-base font-semibold uppercase text-gray-800">
                Resources
              </h2>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:underline hover:text-blue-700 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="hover:underline hover:text-blue-700 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Projects"
                    className="hover:underline hover:text-blue-700 transition"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-base font-semibold uppercase text-gray-800">
                Follow Us
              </h2>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/RAJSINGH20"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:text-blue-700 transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/raj-singh-250022283/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:text-blue-700 transition"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-base font-semibold uppercase text-gray-800">
                Legal
              </h2>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>
                  <Link
                    to="#"
                    className="hover:underline hover:text-blue-700 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:underline hover:text-blue-700 transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-sm text-gray-500">
          <span>
            © 2023{" "}
            <a
              href=""
              className="hover:underline text-blue-600"
            >
              RAJ SINGH
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 space-x-4">
            {/* Social icon links (use hover:text-blue-600 for highlight) */}
            <Link to="#" className="hover:text-blue-600 transition">
              {/* Facebook Icon */}
            </Link>
            <Link to="#" className="hover:text-blue-600 transition">
              {/* Discord Icon */}
            </Link>
            <Link to="#" className="hover:text-blue-600 transition">
              {/* Twitter Icon */}
            </Link>
            <Link to="#" className="hover:text-blue-600 transition">
              {/* GitHub Icon */}
            </Link>
            <Link to="#" className="hover:text-blue-600 transition">
              {/* Dribbble Icon */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

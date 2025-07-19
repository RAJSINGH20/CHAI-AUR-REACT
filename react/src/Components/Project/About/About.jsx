import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-blue-300">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React.js is an open-source JavaScript library developed by Meta
              (formerly Facebook) for building user interfaces (UIs), especially
              single-page applications (SPAs). It allows developers to create
              reusable UI components and efficiently update and render
              components when data changes.
            </p>
            <p className="mt-4 text-gray-600 ">
              <table class="min-w-full border-collapse">
                <thead>
                  <tr class="bg-blue-600 text-white text-left">
                    <th class="p-4 border border-blue-700">Concept</th>
                    <th class="p-4 border border-blue-700">Description</th>
                  </tr>
                </thead>
                <tbody class="text-gray-800">
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 border">JSX</td>
                    <td class="p-4 border">
                      JavaScript syntax extension that allows writing HTML
                      inside JavaScript code.
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 border">Components</td>
                    <td class="p-4 border">
                      Reusable UI blocks; can be functional or class-based.
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 border">State</td>
                    <td class="p-4 border">
                      Holds dynamic data inside a component; updated with hooks
                      like <code>useState</code>.
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 border">Props</td>
                    <td class="p-4 border">
                      Short for "properties", used to pass data from parent to
                      child components.
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 border">Virtual DOM</td>
                    <td class="p-4 border">
                      An in-memory representation of the real DOM, used to
                      optimize UI rendering.
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 border">Hooks</td>
                    <td class="p-4 border">
                      Functions like <code>useEffect</code>,{" "}
                      <code>useState</code>, etc., used in functional
                      components.
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

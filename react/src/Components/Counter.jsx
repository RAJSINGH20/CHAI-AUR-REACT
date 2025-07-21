import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Add = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const Remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80 text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-2">chai aur react</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Counter value: <span className="text-indigo-500">{counter}</span>
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={Add}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Add value
          </button>
          <button
            onClick={Remove}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Remove value
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

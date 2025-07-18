import React, { useState } from "react";

const Bg_changer = () => {
  const [color, Setcolor] = useState("olive");

  return (
    <div>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-0 w-full flex justify-center mb-5">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white items-center rounded-3xl p-4">
            <button onClick={() => Setcolor("red")} className="outline-none px-4 py-2 bg-red-500 text-white rounded-2xl">Red</button>
            <button onClick={() => Setcolor("green")} className="outline-none px-4 py-2 bg-green-600 text-white rounded-2xl">Green</button>
            <button onClick={() => Setcolor("blue")} className="outline-none px-4 py-2 bg-blue-700 text-white rounded-2xl">Blue</button>
            <button onClick={() => Setcolor("orange")} className="outline-none px-4 py-2 bg-orange-700 text-white rounded-2xl">Orange</button>
            <button onClick={() => Setcolor("brown")} className="outline-none px-4 py-2 bg-amber-950 text-white rounded-2xl">Brown</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bg_changer;

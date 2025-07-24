import React, { useState } from "react";

const Background_changer = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  const handleClick=()=>{
    if(bgColor === "bg-white"){
        setBgColor(" bg-cyan-300")
    }else{
        setBgColor("bg-white")
    }
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${bgColor} `}>
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-900 text-white py-2 px-6 rounded-xl shadow-md transition-all"
      >
        Click
      </button>
    </div>
  );
};

export default Background_changer;

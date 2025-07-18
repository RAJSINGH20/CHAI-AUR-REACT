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
    <div className="counter-container">
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={Add}>Add value</button>
      <button onClick={Remove}>Remove value</button>
    </div>
  );
};

export default Counter;

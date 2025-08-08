import React, { useState } from 'react';


const Cal = () => {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculateResult = () => {
    if (!display) {
      alert("Please enter a calculation");
      return;
    }

    // Manually parse expression: Only supports one operator
    let operator = '';
    let index = -1;

    if (display.includes('+')) {
      operator = '+';
      index = display.indexOf('+');
    } else if (display.includes('-')) {
      operator = '-';
      index = display.indexOf('-');
    } else if (display.includes('x')) {
      operator = 'x';
      index = display.indexOf('x');
    } else if (display.includes('/')) {
      operator = '/';
      index = display.indexOf('/');
    } else {
      alert("Invalid operation");
      return;
    }

    const num1 = parseFloat(display.slice(0, index));
    const num2 = parseFloat(display.slice(index + 1));

    if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid numbers");
      return;
    }

    let result = '';

    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === 'x') result = num1 * num2;
    else if (operator === '/') {
      if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = num1 / num2;
    }

    setDisplay(result.toString());
  };

  return (
    <div className="calculator">
      <h1 className="title">Calculator</h1>
      <input
        type="text"
        className="display"
        value={display}
        readOnly
      />
      <div className="button-grid">
        {[1, 2, 3].map((n) => (
          <button key={n} onClick={() => appendToDisplay(n)}>{n}</button>
        ))}
        <button onClick={() => appendToDisplay('+')}>+</button>

        {[4, 5, 6].map((n) => (
          <button key={n} onClick={() => appendToDisplay(n)}>{n}</button>
        ))}
        <button onClick={() => appendToDisplay('-')}>-</button>

        {[7, 8, 9].map((n) => (
          <button key={n} onClick={() => appendToDisplay(n)}>{n}</button>
        ))}
        <button onClick={() => appendToDisplay('x')}>x</button>

        <button onClick={() => appendToDisplay(0)}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToDisplay('/')}>/</button>

        <button className="equal-btn" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Cal;

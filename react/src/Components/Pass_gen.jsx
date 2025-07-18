import React, { useCallback, useState, useEffect, useRef } from "react";

const Pass_gen = () => {
  // State to manage the password length
  const [length, setLength] = useState(8);

  // State to toggle inclusion of numbers
  const [numberAllowed, setNumberAllowed] = useState(false);

  // State to toggle inclusion of special characters
  const [charAllowed, setCharAllowed] = useState(false);

  // State to store the generated password
  const [password, setPassword] = useState("");

  // Function to generate the password
  const generatePassword = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      // Append numbers if checkbox is selected
      if (numberAllowed) str += "0123456789";

      // Append special characters if checkbox is selected
      if (charAllowed) str += "!@#$%^&*()";

      // Generate random characters based on selected length
      for (let i = 1; i <= length; i++) {
        const index = Math.floor(Math.random() * str.length);
        pass += str.charAt(index);
      }

      // Update the password state
      setPassword(pass);
    },
    [length, numberAllowed, charAllowed], // Dependencies
    setPassword // (This line is not needed in useCallback, but left unchanged as per instruction)
  );

  // Automatically generate password when dependencies change
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  // useRef hook to get reference of the input box
  const passRef = useRef(null);

  // Function to copy password to clipboard
  const copyPasswordToClipBoard = useCallback(() => {
    passRef.current?.select(); // Select input text
    // passRef.current?.setSelectionRange(0,5) // Optional: to select a range
    window.navigator.clipboard.writeText(password); // Copy text to clipboard
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-xl text-center">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

      {/* Password display field */}
      <div className="mb-4">
        <input
          type="text"
          readOnly
          value={password}
          className="w-full p-2 border rounded text-center"
          ref={passRef} // Reference for copying
        />
      </div>

      {/* Copy button */}
      <button
        className="outline-none bg-blue-600 text-amber-50 px-3 py-0.5 shrink-0 rounded-2xl"
        onClick={copyPasswordToClipBoard}
      >
        copy
      </button>

      {/* Length selector */}
      <div className="flex items-center justify-between mb-4">
        <label className="text-left">Password Length: {length}</label>
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))} // Update length state
          className="ml-2"
        />
      </div>

      {/* Checkbox toggles for number and symbol inclusion */}
      <div className="flex gap-4 mb-4 justify-center">
        <label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)} // Toggle numbers
          />
          <span className="ml-1">Include Numbers</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)} // Toggle symbols
          />
          <span className="ml-1">Include Symbols</span>
        </label>
      </div>
    </div>
  );
};

export default Pass_gen;

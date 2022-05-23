import React, { useRef } from "react";

const Input = ({ message, onChange, error, placeholder, label }) => {
  console.log(message, onChange, error);

  return (
    <div className="mb-10">
      <label
        className="block text-gray-200 text-sm font-bold mb-2 capitalize"
        htmlFor="textforEncode"
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="textforEncode"
        type="text"
        ref={message}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className={`text-red-600 ${error ? "visible" : "invisible"}`}>
        {error}
      </span>
    </div>
  );
};

export default Input;

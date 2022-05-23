import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center my-5">
      <Link to="/">
        <a className="bg-red-500 px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90">
          Home
        </a>
      </Link>
      <Link to="/encode">
        <a className="bg-red-700 px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90">
          Encode
        </a>
      </Link>
      <Link to="/decode">
        <a className="bg-red-500 px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90">
          Decode
        </a>
      </Link>
    </div>
  );
};

export default NavBar;

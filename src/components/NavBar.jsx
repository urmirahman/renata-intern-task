import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(0);
  const links = [
    {
      name: "Encode",
      link: "/encode",
    },
    {
      name: "Decode",
      link: "/decode",
    },
  ];
  useEffect(() => {
    console.log(active);
  });
  return (
    <div className="flex justify-center my-5">
      <Link to="/">
        <a className="bg-red-500 px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90">
          Home
        </a>
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          onClick={() => {
            setActive(index);
            console.log("previous value:", active);
          }}
          to={link.link}
        >
          <a
            className={` ${
              active === index ? "bg-red-700 " : "bg-red-500 "
            } px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90`}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;

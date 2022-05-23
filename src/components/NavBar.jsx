import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  var links = [
    {
      id: 1,
      name: "Encode",
      link: "/encode",
    },
    {
      id: 2,
      name: "Decode",
      link: "/decode",
    },
  ];
  const [active, setActive] = useState(1);
  useEffect(() => {
    console.log("current value", active);
  });

  const handleActive = (index) => {
    setActive(index);
    console.log("previous value:", active);
  };
  return (
    <div className="flex justify-center my-5">
      <Link to="/">
        <div className="bg-red-500 px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90">
          Home
        </div>
      </Link>

      {links.map((link, index) => (
        <Link
          to={`${link.link}`}
          key={index}
          onClick={(e) => {
            e.preventDefault();
            setActive(link.id);
            console.log(active);
          }}
        >
          <div
            className={` ${
              link.id === active ? "bg-red-700 " : "bg-red-500 "
            } px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90`}
          >
            {link.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;

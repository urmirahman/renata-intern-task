import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
  const [active, setActive] = useState(links[0].id);
  useEffect(() => {
    console.log("current value", active);
  });

  return (
    <div className="flex justify-center my-5">
      <NavLink to="/">
        <a className="bg-red-500 px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90">
          Home
        </a>
      </NavLink>

      {links.map((link, index) => (
        <a
          key={index}
          onClick={(e) => {
            e.preventDefault();
            setActive(link.id);
          }}
        >
          <NavLink
            to={link.link}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#fff",
              background: isActive ? "#b91c1c" : "#ef4444",
            })}
            className={`  px-4 py-2 sm:px-8 sm:py-3 m-2 rounded text-white font-bold bg-opacity-90`}
          >
            {link.name}
          </NavLink>
        </a>
      ))}
    </div>
  );
};

export default NavBar;

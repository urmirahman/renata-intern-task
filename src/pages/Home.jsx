import React from "react";
import { Link } from "react-router-dom";
import { BsShieldLockFill } from "react-icons/bs";
import { MdManageSearch } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-auto bg-gray-50 ">
      {/* <div className="text-center pt-10 sm:pt-16 md:pt-24">
        <span className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-600 ">
          Start with anyone 🎉
        </span>
      </div> */}
      <div className="p-10 h-auto flex flex-col md:flex-row justify-center items-center">
        <Link to="/encode">
          <a className="flex flex-col justify-center items-center   group cssanimation fadeInLeft">
            <div className="group-hover:shadow-xl bg-white text-xl h-52 w-52 rounded-lg border-2 border-gray-400 p-10 mx-2 md:mx-10 my-5 flex flex-col justify-center items-center">
              <span>
                <BsShieldLockFill className="text-6xl text-sky-500 mb-3" />
              </span>
              <span className="text-center text-gray-500">
                Encryption Decryption
              </span>
            </div>
            <span className="text-2xl  capitalize group-hover:text-cyan-600 font-semibold text-gray-600">
              task one
            </span>
          </a>
        </Link>
        <Link to="search_domain">
          <a className="flex flex-col justify-center items-center   group cssanimation fadeInRight">
            <div className="group-hover:shadow-xl bg-white text-xl h-52 w-52 rounded-lg border-2 border-gray-400 p-10 mx-2 md:mx-10 my-5 flex flex-col justify-center items-center">
              <span>
                <MdManageSearch className="text-6xl text-sky-500 mb-3" />
              </span>
              <span className="text-center text-gray-500">Search Domain</span>
            </div>
            <span className="text-2xl capitalize group-hover:text-cyan-600 font-semibold text-gray-600">
              task two
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

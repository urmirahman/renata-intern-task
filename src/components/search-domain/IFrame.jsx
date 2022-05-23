import React from "react";

const IFrame = ({ link }) => {
  return (
    <div className="flex justify-center items-center w-full sm:my-10">
      <iframe
        src={link || "https://www.youtube.com/embed/uXWycyeTeCs"}
        className="sm:h-56 md:h-64  lg:h-96 w-6/7 sm:w-2/3 md:w-96 lg:w-3/4 shadow-lg border"
        title="0"
      ></iframe>
    </div>
  );
};

export default IFrame;

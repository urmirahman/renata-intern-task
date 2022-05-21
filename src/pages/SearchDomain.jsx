import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import * as XLSX from "xlsx";

const SearchDomain = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState({
    language: "",
    topic: "",
    learn: "",
    learnLink: "",
  });
  const [error, setError] = useState("");

  var url = "data.xlsx"; // the excel file show be in public folder

  useEffect(() => {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function (e) {
      var arraybuffer = oReq.response;

      /* convert data to binary string */
      var data = new Uint8Array(arraybuffer);
      var arr = [];
      for (var i = 0; i !== data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");

      /* Call XLSX */
      var workbook = XLSX.read(bstr, {
        type: "binary",
      });

      /* DO SOMETHING WITH workbook HERE */
      var first_sheet_name = workbook.SheetNames[0];
      /* Get worksheet */
      var worksheet = workbook.Sheets[first_sheet_name];
      var data__raw = XLSX.utils.sheet_to_json(worksheet, {
        raw: true,
      });
      console.log("line 33", data__raw);
      setFetchedData(data__raw);
      console.log(
        XLSX.utils.sheet_to_json(worksheet, {
          raw: true,
        })
      );
    };

    oReq.send();
  }, [url]);
  // console.log(" from state:", fetchedData);
  const findLearnLink = (e) => {
    e.preventDefault();
    if (
      filteredData.language === "" ||
      filteredData.topic === "" ||
      filteredData.learn === ""
    ) {
      setError("Please Select all the field");
      console.log("error:please select all");
    } else {
      const fil = fetchedData.filter(
        (item) =>
          item.Language === filteredData.language &&
          item.Topic === filteredData.topic &&
          item.Learn === filteredData.learn
      );
      setFilteredData((prev) => ({
        ...prev,
        learnLink: fil[0]?.LinkForIframe,
      }));
    }
  };
  const handleChangeLanguage = (e) => {
    e.preventDefault();
    setError("");
    setFilteredData((prev) => ({
      ...prev,
      language: e.target.value,
      topic: "",
    }));
  };

  const handleChangeTopic = (e) => {
    e.preventDefault();
    setError("");
    setFilteredData((prev) => ({ ...prev, topic: e.target.value, learn: "" }));
  };

  const handleChangeLearn = (e) => {
    e.preventDefault();
    setError("");
    setFilteredData((prev) => ({ ...prev, learn: e.target.value }));
  };
  console.log(filteredData);
  return (
    <div className="h-auto flex justify-center  items-center  pb-24 bg-opacity-50 bg-gradient-to-r from-cyan-50 via-cyan-300 to-sky-100">
      <div
        className={`  h-auto mt-16 md:mt-24 sm:w-4/5 md:w-5/7 lg:w-2/3 rounded-lg shadow-lg border m-3 bg-white `}
      >
        <p className="flex justify-center items-center text-xl sm:text-3xl font-semibold text-cyan-600 capitalize my-10 ">
          <span>Find your resourse</span>
          <span>
            <FaLink className="ml-2 text-black" />
          </span>
        </p>
        <form className="p-4">
          <div className="flex flex-wrap   ">
            <div className="w-full md:w-1/3 sm:px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Language
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={handleChangeLanguage}
                >
                  <option value="">Choose Language</option>
                  {fetchedData.map((item, index) => (
                    <option key={index} value={item.Language}>
                      {item.Language}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 sm:px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Topic
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={handleChangeTopic}
                  disabled={filteredData.language !== "" ? false : true}
                >
                  <option value="">Choose Topic</option>
                  {fetchedData
                    .filter((item) => item.Language === filteredData.language)
                    .map((filterItem, index) => (
                      <option key={index} value={filterItem.Topic}>
                        {filterItem.Topic}
                      </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 sm:px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Learn
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={handleChangeLearn}
                  onFocus={() => {
                    console.log("in select");
                    setFilteredData((prev) => ({ ...prev, learn: "" }));
                  }}
                  disabled={filteredData.topic !== "" ? false : true}
                >
                  {" "}
                  <option value="">Choose Learn</option>
                  {fetchedData
                    .filter((item) => item.Topic === filteredData.topic)
                    .map((filterItem, index) => (
                      <option key={index} value={filterItem.Learn}>
                        {filterItem.Learn}
                      </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={`my-2  `}>
              <span className="text-red-500 text-base px-3 ">{error}</span>
            </div>
            <div className="flex justify-center items-center w-full my-5">
              <button
                onClick={findLearnLink}
                className="px-6 py-2 text-lg font-semibold text-white bg-cyan-600 rounded-lg"
              >
                Search Information
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center items-center w-full sm:my-10">
          <iframe
            src={
              filteredData.learnLink ||
              "https://www.youtube.com/embed/uXWycyeTeCs"
            }
            className="sm:h-56 md:h-64 sm:w-64 md:w-96 shadow-lg border"
            title="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SearchDomain;

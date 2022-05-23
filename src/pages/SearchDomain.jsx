import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import IFrame from "../components/search-domain/IFrame";
import Input from "../components/search-domain/Input";

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
      // console.log("error:please select all");
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
    <div className="h-auto flex  justify-center  items-center  pb-24 bg-opacity-50 bg-gradient-to-r from-cyan-50 via-cyan-300 to-sky-100">
      <div
        className={`  h-auto mt-16 sm:mt-24  sm:w-4/5 md:w-5/7 lg:w-2/3 rounded-lg shadow-lg border m-3 py-10 bg-white `}
      >
        <div className="m-3">
          <Link to="/">
            <a
              href="/"
              className="px-3 py-2 rounded border bg-white capitalize text-gray-700 hover:text-cyan-600 hover:boder-cyan-600"
            >
              go back
            </a>
          </Link>
        </div>

        <p className="flex justify-center items-center text-xl sm:text-3xl font-semibold text-cyan-600 capitalize my-10 ">
          <span>Find your resourse</span>
          <span>
            <FaLink className="ml-2 text-black" />
          </span>
        </p>
        <form className="p-4">
          <div className="flex flex-wrap   ">
            <Input
              handleChange={handleChangeLanguage}
              fetchedData={fetchedData}
              name="Language"
            />

            <Input
              handleChange={handleChangeTopic}
              fetchedData={fetchedData}
              name="Topic"
              filterData={filteredData.language}
            />

            <Input
              handleChange={handleChangeLearn}
              fetchedData={fetchedData}
              name="Learn"
              filterData={filteredData.topic}
            />

            <div className={`my-2  `}>
              <span className="text-red-500 text-base px-3 ">{error}</span>
            </div>
            <div className="flex justify-center items-center w-full my-5">
              <button
                onClick={findLearnLink}
                className="px-6 py-2 text-lg font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700"
              >
                Search Information
              </button>
            </div>
          </div>
        </form>
        <IFrame link={filteredData.learnLink} />
      </div>
    </div>
  );
};

export default SearchDomain;

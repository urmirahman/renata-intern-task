import encode from "../assets/encode.jpg";
import { useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsFileEarmarkBreakFill } from "react-icons/bs";
import { alphabate } from "../data/alphabates";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Decode() {
  const [fadeinBottom, setFadeinBottom] = useState(false);
  const [encodedMessage, setEncodedMessage] = useState("");
  const [error, setError] = useState("");
  const [copy, setCopy] = useState(false);
  const messageRef = useRef();

  const handleDecoding = (e) => {
    e.preventDefault();
    if (
      messageRef.current.value !== "" &&
      messageRef.current.value.match("^[a-zA-Z0-9_.-]*$") != null
    ) {
      setFadeinBottom(true);
      setCopy(false);
    } else {
      setFadeinBottom(false);
      setError("field cannot be emptied and letters only");
    }

    let encoded__str = messageRef.current.value;
    let secret__key = encoded__str.match(/\d+/g);

    console.log(secret__key[0]);
    let decoded__str = "";
    for (let i = secret__key[0].length; i < encoded__str.length; i++) {
      for (let j = 0; j < alphabate.upperCase.length; j++) {
        if (encoded__str[i] == alphabate.upperCase[j]) {
          if (j - secret__key[0] < 0) {
            decoded__str = decoded__str.concat(
              alphabate.upperCase[j - secret__key[0] + 26]
            );
          } else {
            decoded__str = decoded__str.concat(
              alphabate.upperCase[j - secret__key[0]]
            );
          }
        } else if (encoded__str[i] == alphabate.lowerCase[j]) {
          if (j - secret__key[0] < 0) {
            decoded__str = decoded__str.concat(
              alphabate.lowerCase[j - secret__key[0] + 26]
            );
          } else {
            decoded__str = decoded__str.concat(
              alphabate.lowerCase[j - secret__key[0]]
            );
          }
        }
      }
      if (encoded__str[i] == ".") {
        decoded__str = decoded__str.concat(" ");
      }
    }
    setEncodedMessage(decoded__str);
    console.log(decoded__str);
  };

  return (
    <div
      className="h-screen w-screen  flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${encode})` }}
    >
      <div className="w-full sm:w-4/5 md:w-5/7 lg:w-1/2 ">
        <div className="flex justify-center my-5">
          <Link to="/">
            <a className="bg-red-500 px-8 py-3 m-2 rounded text-white font-bold bg-opacity-90">
              Encode
            </a>
          </Link>
          <Link to="/decode">
            <a className="bg-red-700 px-8 py-3 m-2 rounded text-white font-bold bg-opacity-90">
              Decode
            </a>
          </Link>
        </div>
        <form
          style={{ background: "#142336" }}
          className={`shadow-md rounded p-4 sm:px-8  sm:pt-6  sm:pb-8 lg:pb-10 mb-4 flex flex-col transition-all ease-in-out delay-150  ${
            fadeinBottom === true && messageRef.current.value !== ""
              ? "h-96 duration-700"
              : "h-72"
          } `}
        >
          <div className="mb-10 flex justify-center">
            <span className="text-2xl font-bold text-white">
              let's Decode your message 👩‍💻
            </span>
          </div>
          <div className="mb-10">
            <label
              className="block text-gray-200 text-sm font-bold mb-2 capitalize"
              htmlFor="textforEncode"
            >
              Encoded message
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="textforEncode"
              type="text"
              ref={messageRef}
              placeholder="example: 22YWPO.Wjz.ZKCO"
              onChange={() => {
                setEncodedMessage("");
                setError("");
              }}
            />
            <span className={`text-red-600 ${error ? "visible" : "invisible"}`}>
              {error}
            </span>
          </div>

          <div className="flex items-center justify-center">
            <button
              // style={{ background: "#4271B5" }}
              className=" hover:bg-blue-500 bg-blue-400 text-white flex items-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleDecoding}
            >
              Decode message <BsFileEarmarkBreakFill className=" pl-0.5" />
            </button>
          </div>
          <div
            className={` mt-10 mb-10 flex ${
              fadeinBottom == true && messageRef.current.value !== ""
                ? "cssanimation fadeInBottom"
                : "invisible"
            } `}
          >
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="textforEncoderesult"
              type="text"
              value={encodedMessage}
              placeholder="..."
              readOnly
            />
            <div className="flex items-center">
              <CopyToClipboard
                text={encodedMessage}
                onCopy={() => {
                  setCopy(true);
                }}
              >
                {copy === true && encodedMessage !== "" ? (
                  <TiTick className="text-green-500 ml-2 rounded-full text-2xl p-0.5 border border-green-500" />
                ) : (
                  <FaRegCopy className="text-blue-300 ml-2 " />
                )}
              </CopyToClipboard>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Decode;

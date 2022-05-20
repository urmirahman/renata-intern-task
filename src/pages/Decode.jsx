import encode from "../assets/encode.jpg";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
function Decode() {
  const [fadeinBottom, setFadeinBottom] = useState(false);
  let alphabate = {
    upperCase: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    lowerCase: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
  };
  console.log(alphabate.upperCase);
  let unencoded__str = "CATS And DOGS";
  let str = unencoded__str.replaceAll(" ", ".");
  console.log(unencoded__str.replaceAll(" ", "."));
  let random__number = Math.floor(Math.random() * 25 + 1);
  let newStr = `${random__number}`;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabate.upperCase.length; j++) {
      if (str[i] == alphabate.upperCase[j]) {
        if (j + random__number >= 26) {
          newStr = newStr.concat(alphabate.upperCase[j + random__number - 26]);
        } else {
          newStr = newStr.concat(alphabate.upperCase[j + random__number]);
        }
      } else if (str[i] == alphabate.lowerCase[j]) {
        if (j + random__number >= 26) {
          newStr = newStr.concat(alphabate.lowerCase[j + random__number - 26]);
        } else {
          newStr = newStr.concat(alphabate.lowerCase[j + random__number]);
        }
      }
    }
    if (str[i] == ".") {
      newStr = newStr.concat(".");
    }
  }
  console.log(newStr);
  let decode = "22YWPO.Wjz.ZKCO";
  let secret__key = decode.match(/\d+/g);

  console.log(secret__key[0]);
  let decoded__str = "";
  for (let i = secret__key[0].length; i < decode.length; i++) {
    for (let j = 0; j < alphabate.upperCase.length; j++) {
      if (decode[i] == alphabate.upperCase[j]) {
        if (j - secret__key[0] < 0) {
          decoded__str = decoded__str.concat(
            alphabate.upperCase[j - secret__key[0] + 26]
          );
        } else {
          decoded__str = decoded__str.concat(
            alphabate.upperCase[j - secret__key[0]]
          );
        }
      } else if (decode[i] == alphabate.lowerCase[j]) {
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
    if (decode[i] == ".") {
      decoded__str = decoded__str.concat(" ");
    }
  }
  console.log(decoded__str);
  return (
    <div
      className="h-screen w-screen  flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${encode})` }}
    >
      <div className="w-full sm:w-4/5 md:w-5/7 lg:w-1/2 ">
        <div className="flex justify-center my-5">
          <a
            href="#"
            className="bg-red-500 px-8 py-3 m-2 rounded text-white font-bold bg-opacity-90"
          >
            Encode
          </a>
          <a
            href="#"
            className="bg-red-500 px-8 py-3 m-2 rounded text-white font-bold bg-opacity-90"
          >
            Decode
          </a>
        </div>
        <form
          style={{ background: "#142336" }}
          className={`shadow-md rounded p-4 sm:px-8  sm:pt-6  sm:pb-8 mb-4 flex flex-col transition-all ease-in-out delay-150  ${
            fadeinBottom ? "h-72 duration-700" : "h-64"
          } `}
        >
          <div className="mb-10">
            <label
              className="block text-white text-sm font-bold mb-2 capitalize"
              for="textforEncode"
            >
              your message
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="textforEncode"
              type="text"
              placeholder="example: CATS AND DOGS"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              style={{ background: "#4271B5" }}
              className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                setFadeinBottom(true);
              }}
            >
              Encode message
            </button>
          </div>
          <div
            className={` mt-5 mb-10 flex ${
              fadeinBottom ? "cssanimation fadeInBottom" : "invisible"
            } `}
          >
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="textforEncode"
              type="text"
              placeholder="..."
            />
            <div className="flex items-center">
              <FaRegCopy className="text-blue-300 ml-2 " />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Decode;

import encode from "../assets/encode.jpg";
import { useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { alphabate } from "../data/alphabates";
function Encode() {
  const [fadeinBottom, setFadeinBottom] = useState(false);
  const messageRef = useRef();
  console.log(alphabate.upperCase);
  //   let unencoded__str = "CATS And DOGS";
  //   let str = unencoded__str.replaceAll(" ", ".");
  //   console.log(unencoded__str.replaceAll(" ", "."));
  //   let secret__key = Math.floor(Math.random() * 25 + 1);
  //   let encoded__str = `${secret__key}`;
  //   for (let i = 0; i < str.length; i++) {
  //     for (let j = 0; j < alphabate.upperCase.length; j++) {
  //       if (str[i] == alphabate.upperCase[j]) {
  //         if (j + secret__key >= 26) {
  //           encoded__str = encoded__str.concat(alphabate.upperCase[j + secret__key - 26]);
  //         } else {
  //           encoded__str = encoded__str.concat(alphabate.upperCase[j + secret__key]);
  //         }
  //       } else if (str[i] == alphabate.lowerCase[j]) {
  //         if (j + secret__key >= 26) {
  //           encoded__str = encoded__str.concat(alphabate.lowerCase[j + secret__key - 26]);
  //         } else {
  //           encoded__str = encoded__str.concat(alphabate.lowerCase[j + secret__key]);
  //         }
  //       }
  //     }
  //     if (str[i] == ".") {
  //       encoded__str = encoded__str.concat(".");
  //     }
  //   }
  //   console.log(encoded__str);

  const handleEncoding = () => {
    setFadeinBottom(true);
    console.log(messageRef.current.value);

    let str = messageRef.current.value;

    //generating random secret key
    let secret__key = Math.floor(Math.random() * 25 + 1);

    let encoded__str = `${secret__key}`; // starting encoding with secret key

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < alphabate.upperCase.length; j++) {
        //
        if (str[i] == alphabate.upperCase[j]) {
          //
          if (j + secret__key >= 26) {
            //Round up encoded charecter
            encoded__str = encoded__str.concat(
              alphabate.upperCase[j + secret__key - 26] //encode with the secret key
            );
          } else {
            encoded__str = encoded__str.concat(
              alphabate.upperCase[j + secret__key]
            );
          }
        } else if (str[i] == alphabate.lowerCase[j]) {
          //
          if (j + secret__key >= 26) {
            //Round up encoded charecter
            encoded__str = encoded__str.concat(
              alphabate.lowerCase[j + secret__key - 26] //encode with the secret key
            );
          } else {
            encoded__str = encoded__str.concat(
              alphabate.lowerCase[j + secret__key]
            );
          }
        }
      }

      if (str[i] == " ") {
        encoded__str = encoded__str.concat(".");
      }
    }
    console.log(encoded__str);
  };
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
              htmlFor="textforEncode"
            >
              your message
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="textforEncode"
              type="text"
              ref={messageRef}
              placeholder="example: CATS AND DOGS"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              style={{ background: "#4271B5" }}
              className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleEncoding}
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
              id="textforEncoderesult"
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

export default Encode;

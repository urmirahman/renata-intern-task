import { useRef, useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { alphabate } from "../../data/alphabates";
import CopyToClipBoard from "./CopyToClipboard";
import Input from "./Input";

const EncodeComponent = () => {
  const [fadeinBottom, setFadeinBottom] = useState(false);
  const [encodedMessage, setEncodedMessage] = useState("");
  const [error, setError] = useState("");
  const [copy, setCopy] = useState(false);
  const messageRef = useRef();

  const handleEncoding = () => {
    if (
      messageRef.current.value !== "" &&
      messageRef.current.value.match("^[a-zA-Z ]*$") !== null
    ) {
      setFadeinBottom(true);
      setCopy(false);
    } else {
      setFadeinBottom(false);
      setError("Field cannot be emptied and letters only");
    }

    let str = messageRef.current.value;

    //generating random secret key
    let secret__key = Math.floor(Math.random() * 25 + 1);

    let encoded__str = `${secret__key}`; // starting encoding with secret key

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < alphabate.upperCase.length; j++) {
        //
        if (str[i] === alphabate.upperCase[j]) {
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
        } else if (str[i] === alphabate.lowerCase[j]) {
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

      if (str[i] === " ") {
        encoded__str = encoded__str.concat("."); // replacing spaces with "."
      }
    }
    setEncodedMessage(encoded__str);
    console.log(encoded__str);
  };
  // console.log(messageRef.current.value)
  return (
    <form
      style={{ background: "#142336" }}
      className={`shadow-md rounded p-4 sm:px-8  sm:pt-6  sm:pb-8 lg:pb-10 mb-4 flex flex-col transition-all ease-in-out delay-150  ${
        fadeinBottom === true && messageRef.current.value !== ""
          ? "h-96 duration-700"
          : "h-72"
      } `}
    >
      <div className="mb-10 flex justify-center">
        <span className="text-2xl font-bold text-white text-center">
      Play with your Message 🎭
        </span>
      </div>
      <Input
      label="Your message"
      placeholder="example: CATS AND DOGS"
        message={messageRef}
        onChange={() => {
          setEncodedMessage("");
          setError("");
        }}
        error={error}
      />

      <div className="flex items-center justify-center">
        <button
          // style={{ background: "#4271B5" }}
          className=" hover:bg-blue-500 bg-blue-400 text-white flex items-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleEncoding}
        >
          Encode message <BsFillShieldLockFill className=" pl-0.5" />
        </button>
      </div>
      <div
        className={` mt-10 mb-10 flex ${
          fadeinBottom == true && messageRef.current.value !== ""
            ? "cssanimation fadeInBottom"
            : "invisible"
        } `}
      >
        <CopyToClipBoard
          encodedMessage={encodedMessage}
          copy={copy}
          copyState={() => {
            setCopy(true);
          }}
        />
      </div>
    </form>
  );
};

export default EncodeComponent;

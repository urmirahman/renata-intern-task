import { useRef, useState } from "react";
import { BsFileEarmarkBreakFill } from "react-icons/bs";
import { alphabate } from "../../data/alphabates";
import CopyToClipBoard from "./CopyToClipboard";
import Input from "./Input";

const DecodeComponent = () => {
  const [fadeinBottom, setFadeinBottom] = useState(false);
  const [encodedMessage, setEncodedMessage] = useState("");
  const [error, setError] = useState("");
  const [copy, setCopy] = useState(false);
  const messageRef = useRef();

  const handleDecoding = (e) => {
    e.preventDefault();
    if (
      messageRef.current.value !== "" &&
      messageRef.current.value.match("^[a-zA-Z0-9_.\s]*$") !== null
    ) {
      setFadeinBottom(true);
      setCopy(false);
    } else {
      setFadeinBottom(false);
      setError(
        "Field cannot be emptied and 'no space', A-Z,a-z,0-9 , point(.) only"
      );
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
          let's Decode your message 👩‍💻
        </span>
      </div>
      <Input
        label="Encoded message"
        placeholder="example:25BZSR.ZMC.CNFR"
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

export default DecodeComponent;

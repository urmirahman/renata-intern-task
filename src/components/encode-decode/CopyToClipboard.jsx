import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const CopyToClipBoard = ({ encodedMessage, copy, copyState }) => {
  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="textforEncoderesult"
        type="text"
        value={encodedMessage}
        placeholder="..."
        readOnly
      />

      <div className="flex items-center">
        <CopyToClipboard text={encodedMessage} onCopy={copyState}>
          {copy === true && encodedMessage !== "" ? (
            <TiTick className="text-green-500 ml-2 rounded-full text-2xl p-0.5 border border-green-500" />
          ) : (
            <FaRegCopy className="text-blue-300 ml-2 " />
          )}
        </CopyToClipboard>
      </div>
    </>
  );
};

export default CopyToClipBoard;

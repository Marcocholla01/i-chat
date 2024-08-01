import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
// import InputEmoji from "react-input-emoji";

const MessageInput = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <>
      {/* <form className="px-4 my-3">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Start Typing..."
            className="w-full input input-bordered input-info rounded-full"
          />

          <button
            type="submit"
            className="absolute inset-y-0 flex items-center pe-3 end-3"
          >
            <BsSend className="w-6 h-6" />{" "}
          </button>
        </div>
      </form> */}

      <form className="w-full flex items-center gap-2 px-4 my-3">
        <input
          type="text"
          placeholder="Start Typing..."
          className="w-full input input-bordered rounded-full input-info"
        />

        {/* <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        /> */}

        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <BsSend className="w-6 h-6 outline-none" />
        </button>
      </form>
    </>
  );
};

export default MessageInput;

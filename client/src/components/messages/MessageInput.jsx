import React, { useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
// import Picker from "emoji-picker-react";
import InputEmoji from "react-input-emoji";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [text, setText] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const formRef = useRef(null); // Reference to the form element

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "") return; // Optionally handle empty submissions
    console.log("Submitted text:", text);
    // if (!text) return;
    await sendMessage(text);
    setText(""); // Clear the input field
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default Enter key behavior
      handleSubmit(e); // Call the submit handler
    }
  };

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
      </form>  */}

      <form
        className="w-full flex items-center gap-2 px-4 my-3"
        onSubmit={handleSubmit}
        ref={formRef}
        // style={{ background: "#b896a3" }}
      >
        {/* <input
          type="text"
          placeholder="Start Typing..."
          className="w-full input input-bordered rounded-full input-info"
        /> */}
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          keepOpened
          onKeyDown={handleKeyDown}
          // onEnter={handleSubmit}
          placeholder="Start Typing..."
          background="#1d232a"
          placeholderColor="#8e96a1"
          borderColor="#00b6ff"
          fontFamily="Poppins"
          color="white"
        />

        <div className="tooltip tooltip-top" data-tip="Send">
          <button
            type="submit"
            className="btn btn-circle bg-sky-500 text-white"
          >
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <BsSend className="w-6 h-6 outline-none" />
            )}
          </button>
        </div>
      </form>

      {/* <form
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-2 px-4 my-3"
      >
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Start Typing..."
          className="w-full input input-bordered rounded-full input-info"
        />
        <button
          type="button"
          onClick={() => setShowPicker(!showPicker)}
          className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          😊
        </button>
        {showPicker && (
          <div className="absolute z-10 right-0 bottom-4">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        )}
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <BsSend className="w-6 h-6 outline-none" />
        </button>
      </form> */}
    </>
  );
};

export default MessageInput;

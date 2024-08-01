import React from "react";
import Backdrop from "../components/Backdrop";
import Sidebar from "../components/sidebar/Sidebar";
import MessageContainer from "../components/messages/MessageContainer";

const Home = () => {
  return (
    <>
      {/* <Backdrop className="">
        <h1>Home</h1>
      </Backdrop> */}

      <div className="flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </>
  );
};

export default Home;

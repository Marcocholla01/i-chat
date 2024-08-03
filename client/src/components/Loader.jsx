import React from "react";
import Backdrop from "./Backdrop";
import { BreedingRhombusSpinner } from "react-epic-spinners";

const Loader = () => {
  return (
    <Backdrop>
      <div className="flex flex-col my-20 p-4 gap-12 items-center space-x-2 ">
        <BreedingRhombusSpinner size={100} color="#202030" />
        <p className="animate-bounce text-lg">Loading....</p>
      </div>
    </Backdrop>
  );
};

export default Loader;

import React from "react";
import Backdrop from "../components/Backdrop";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Backdrop>
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src="/404-page-not-found.svg" alt="" className="h-60" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mt-4 text-white">404 NOT FOUND</h1>
          <p className="text-lg font-md mt-3 text-white">
            Sorry the page you are looking for is unavailable
          </p>
          <Link to={`/`} className="btn btn-block uppercase mt-2">
            {" "}
            Back Home
          </Link>
        </div>
      </div>
    </Backdrop>
  );
};

export default NotFound;

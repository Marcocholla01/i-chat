import React from "react";
import Backdrop from "../components/Backdrop";
import { Link } from "react-router-dom";

const forgotPassword = () => {
  return (
    <div>
      <Backdrop>
        <h1 className="text-3xl font-bold text-center text-blue-500 uppercase">
          I-Chat App
        </h1>
        <h1 className="text-2xl font-semibold text-center text-gray-300 mt-2">
          Forgot Password
        </h1>
        <form>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input input-bordered input-info h-10"
            />
          </div>
          <div className="mt-3">
            <Link
              to="/login"
              className="text-sm text-white hover:underline hover:text-blue-600"
            >
              {" "}
              Remember your password?
            </Link>
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-3 uppercase">
              Submit
            </button>
          </div>
        </form>
      </Backdrop>
    </div>
  );
};

export default forgotPassword;

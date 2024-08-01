import React from "react";
import Backdrop from "../components/Backdrop";

const PasswordReset = () => {
  return (
    <Backdrop>
      <h1 className="text-3xl font-bold text-center text-blue-500 uppercase">
        I-Chat App
      </h1>
      <h1 className="text-2xl font-semibold text-center text-gray-300 mt-2">
        Reset Password
      </h1>
      <form>
        <div>
          <label htmlFor="" className="label p-2">
            <span className="text-base label-text">New password</span>
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full input input-bordered input-info h-10"
          />
        </div>
        <div>
          <label htmlFor="" className="label p-2">
            <span className="text-base label-text">confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter confirm password"
            className="w-full input input-bordered input-info h-10"
          />
        </div>
        <div>
          <button className="btn btn-block btn-sm mt-6 uppercase">
            submit
          </button>
        </div>
      </form>
    </Backdrop>
  );
};

export default PasswordReset;

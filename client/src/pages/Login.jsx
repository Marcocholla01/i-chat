import React from "react";
import { Link } from "react-router-dom";
import Backdrop from "../components/Backdrop";

const Login = () => {
  return (
    <Backdrop>
      <h1 className="text-3xl font-bold text-center text-blue-500 uppercase">
        I-Chat App
      </h1>
      <h1 className="text-2xl font-semibold text-center text-gray-300 mt-2">
        Login
      </h1>
      <form>
        <div>
          <label htmlFor="" className="label p-2">
            <span className="text-base label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full input input-bordered input-info h-10"
          />
        </div>
        <div>
          <label htmlFor="" className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full input input-bordered input-info h-10"
          />
        </div>
        <div className="flex justify-between text-sm text-white mt-2">
          <Link
            to="/register"
            className=" mr-2 hover:underline hover:text-blue-600"
          >
            {" "}
            Don't have an account?
          </Link>
          <Link to={`/forgot-password`} className="hover:text-blue-600">
            Lost password
          </Link>
        </div>
        <div>
          <button className="btn btn-block btn-sm mt-3 uppercase">Login</button>
        </div>
      </form>
    </Backdrop>
  );
};

export default Login;

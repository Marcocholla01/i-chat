import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../components/Backdrop";
import useLogin from "../hooks/useLogin";
import Loader from "../components/Loader";
import useHandleLoginErrors from "../errors/handleLoginErrors";

const Login = () => {
  const { login, loading } = useLogin();
  const [inputs, setInputs] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const { checkErrors } = useHandleLoginErrors(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkErrors()) return; // If errors are found, exit
    // console.log("Inputs: ", inputs);
    await login(inputs);
  };

  if (loading) return <Loader />;

  return (
    <Backdrop>
      <h1 className="text-3xl font-bold text-center text-blue-500 uppercase">
        I-Chat App
      </h1>
      <h1 className="text-2xl font-semibold text-center text-gray-300 mt-2">
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className="label p-2">
            <span className="text-base label-text">Email or Username</span>
          </label>
          <input
            type="text"
            name="identifier"
            value={inputs.identifier}
            onChange={handleChange}
            placeholder="Enter email or username"
            className="w-full input input-bordered input-info h-10"
          />
        </div>
        <div>
          <label htmlFor="" className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
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
          <button type="submit" className="btn btn-block btn-sm mt-3 uppercase">
            Login
          </button>
        </div>
      </form>
    </Backdrop>
  );
};

export default Login;

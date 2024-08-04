import React, { useState } from "react";
import Backdrop from "../components/Backdrop";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
import Loader from "../components/Loader";
import handleSignupEmptyFields from "../errors/handleSignupEmptyFields";

const Signup = () => {
  const { signup, loading } = useSignup();
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    gender: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const { checkErrors } = handleSignupEmptyFields(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkErrors()) return; // If errors are found, exit
    // console.log("Inputs: ", inputs);
    await signup(inputs);
  };

  if (loading) return <Loader />;
  return (
    <div>
      <Backdrop>
        <h1 className="text-3xl font-bold text-center text-blue-500 uppercase">
          I-Chat App
        </h1>
        <h1 className="text-2xl font-semibold text-center text-gray-300 mt-2">
          Signup
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full names"
              className="w-full input input-bordered input-info h-10"
              value={inputs?.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full input input-bordered input-info h-10"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Enter username"
              className="w-full input input-bordered input-info h-10"
              value={inputs.userName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full input input-bordered input-info h-10"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter confirm password"
              className="w-full input input-bordered input-info h-10"
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="form-control mt-2">
            <label className="label cursor-pointer">
              <span className="label-text">Gender</span>
              <div className="flex flex-row justify-between gap-3">
                <div className="flex flex-row justify-center items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="radio radio-info"
                    onChange={handleChange}
                    checked={inputs.gender === "male"}
                  />
                  <label className="radio-label">
                    <span className="radio-text">Male</span>
                  </label>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="radio radio-info"
                    onChange={handleChange}
                    checked={inputs.gender === "female"}
                  />
                  <label className="radio-label">
                    <span className="radio-text">Female</span>
                  </label>
                </div>
              </div>
            </label>
          </div>
          <div className="mt-2">
            <Link
              to="/login"
              className="text-sm text-white hover:underline hover:text-blue-600"
            >
              {" "}
              Already have an account?
            </Link>
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-3 uppercase">
              Register
            </button>
          </div>
        </form>
      </Backdrop>
    </div>
  );
};

export default Signup;

import React, { useEffect, useRef, useState } from "react";
import { InputOtp } from "primereact/inputotp";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Backdrop from "../components/Backdrop";
import { useAuthContext } from "../contexts/AuthContext";

export default function OTP() {
  const { authUser } = useAuthContext();
  const [token, setTokens] = useState(null);
  const toastRef = useRef(null);
  const user = localStorage.getItem("chat-user-unverified")
    ? JSON.parse(localStorage.getItem("chat-user-unverified"))
    : null;
  // console.log(user);
  const customInput = ({ events, props }) => {
    return (
      <>
        <input
          {...events}
          {...props}
          type="text"
          className="custom-otp-input-sample"
        />
        {props.id === 2 && (
          <div className="px-3">
            <i className="pi pi-minus" />
          </div>
        )}
      </>
    );
  };

  const showMessage = (severity, summary, detail) => {
    toastRef.current.show({ severity, summary, detail, life: 3000 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) return showMessage("error", "Error", "No token provided");
    if (token.length !== 6)
      return showMessage("error", "Error", "Enter all 6-digit OTP code");
    console.log("token", token);
  };

  const handleResendOTP = (e) => {
    console.log("Resend code");
  };

  return (
    <>
      <Toast ref={toastRef} position="top-center" />
      <Backdrop>
        <h1 className="text-4xl font-bold text-center text-blue-500 uppercase">
          I-Chat App
        </h1>
        <h1 className="text-3xl font-semibold text-center text-gray-300 mt-2">
          Account Activation
        </h1>

        <div className="card flex flex-column justify-center">
          <style scoped>
            {`
                    .custom-otp-input-sample {
                        width: 48px;
                        height: 48px;
                        font-size: 24px;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        border-radius: 0;
                        border: 1px solid var(--surface-400);
                        background: transparent;
                        outline-offset: -2px;
                        outline-color: transparent;
                        border-right: 0 none;
                        transition: outline-color 0.3s;
                        color: var(--text-color);
                    }

                    .custom-otp-input-sample:focus {
                        outline: 2px solid var(--primary-color);
                    }

                    .custom-otp-input-sample:first-child,
                    .custom-otp-input-sample:nth-child(5) {
                        border-top-left-radius: 12px;
                        border-bottom-left-radius: 12px;
                    }

                    .custom-otp-input-sample:nth-child(3),
                    .custom-otp-input-sample:last-child {
                        border-top-right-radius: 12px;
                        border-bottom-right-radius: 12px;
                        border-right-width: 1px;
                        border-right-style: solid;
                        border-color: var(--surface-400);
                    }
                `}
          </style>
          <div className="flex flex-col items-center">
            {/* <h1 className="font-bold text-xl mb-2">Authenticate Your Account</h1> */}
            <p className="text-color-secondary block mb-5 text-center">
              Please enter the code sent to your email. <br />
              <span>{user?.email}</span>
            </p>
            <form onSubmit={handleSubmit}>
              <InputOtp
                value={token}
                onChange={(e) => setTokens(e.value)}
                length={6}
                inputTemplate={customInput}
                style={{ gap: 0 }}
              />
              <div className="flex justify-between mt-5 self-stretch">
                <Button
                  label="Resend Code"
                  link
                  className="btn btn-outline"
                  type="button"
                  onClick={handleResendOTP}
                ></Button>
                <Button
                  label="Submit Code"
                  className="btn"
                  type="submit"
                ></Button>
              </div>
            </form>
          </div>
        </div>
        {/* <div></div> */}
      </Backdrop>
    </>
  );
}

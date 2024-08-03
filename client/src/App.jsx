import React, { useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";
import OTP from "./pages/OTP";
import Demo from "./pages/Demo";
import { useAuthContext } from "./contexts/AuthContext";
// theme
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <div className="h-screen p-4 flex items-center justify-center">
          <Routes>
            <Route
              path="/"
              element={authUser ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/login"
              element={authUser ? <Navigate to={"/"} /> : <Login />}
            />
            <Route
              path="/register"
              element={authUser ? <Navigate to={"/"} /> : <Signup />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-account" element={<OTP />} />
            <Route
              path="/reset-password/:resetToken"
              element={<PasswordReset />}
            />

            {/* wilcard routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

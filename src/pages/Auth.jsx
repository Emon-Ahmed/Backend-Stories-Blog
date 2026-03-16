import React from "react";
import { Link, Outlet } from "react-router";
import AuthImage from "../assets/images/auth-banner.png";
import Logo from "../assets/images/logo.png";

export default function Auth() {
  return (
    <div className="min-h-screen flex relative">
      <Link to="/" className="absolute top-4 left-8 cursor-pointer">
        <img src={Logo} alt="Logo" className="w-36 h-9" />
      </Link>

      <div className="flex flex-1">
        <div className="flex-1 flex items-center justify-center w-full lg:w-3/5">
          <Outlet />
        </div>

        <div className="hidden lg:flex flex-none w-2/5 items-center justify-center">
          <img
            src={AuthImage}
            alt="Auth Image"
            className="p-4 h-full w-full "
          />
        </div>
      </div>
    </div>
  );
}

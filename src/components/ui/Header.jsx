import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="container mx-auto my-auto">
      <div className="flex justify-around items-center py-6">
        <div className="cursor-pointer">
          <img className="w-52 h-9" src={Logo} alt="techBlog Logo" />
        </div>
        <div className="font-apercu text-sm flex cursor-pointer">
          <div className="px-7 hover:underline">Home</div>
          <div className="px-7 hover:underline">Blogs</div>
          <div className="px-7 hover:underline">Category</div>
          <div className="px-7 hover:underline">Author</div>
          <div className="px-7 hover:underline">Contact</div>
        </div>
        <div className="font-apercu text-sm flex items-center cursor-pointer">
          <Link to="/auth" className="px-7 hover:underline">
            Log in
          </Link>
          <Link
            to="/auth/signup"
            className="text-white rounded bg-[#444BFF] py-2 px-6"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

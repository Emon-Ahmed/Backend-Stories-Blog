import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo (Left) */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img className="w-40 h-8" src={Logo} alt="techBlog Logo" />
          </Link>
        </div>

        {/* Mobile Menu Button (Hidden on md+) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Center Nav Links (Hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center font-apercu text-sm space-x-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/blogs" className="hover:underline">
            Blogs
          </Link>
          <Link to="/categories" className="hover:underline">
            Categories
          </Link>
          <Link to="/authors" className="hover:underline">
            Authors
          </Link>
        </div>

        {/* Right: Login/SignUp */}
        <div className="hidden md:flex items-center font-apercu text-sm space-x-6">
          <Link to="/auth" className="hover:underline">
            Log in
          </Link>
          <Link
            to="/auth/signup"
            className="text-white bg-[#444BFF] py-2 px-6 rounded"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Dropdown Nav (Only on small screens) */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white z-50 shadow-md font-apercu text-sm">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blogs"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/categories"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/authors"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Authors
              </Link>
              <hr className="h-px my-6 bg-[#111]/10 border-0" />
              <Link
                to="/auth"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/auth/signup"
                className="text-white bg-[#444BFF] py-2 px-6 rounded"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

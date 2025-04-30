import React from "react";
import Logo from "../../assets/images/logo.png";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6 md:gap-0">
        {/* Logo */}
        <div className="cursor-pointer">
          <img
            className="w-72 md:w-40 md:h-8 h-12"
            src={Logo}
            alt="techBlog Logo"
          />
        </div>

        {/* Simple Nav Links */}
        <div className="flex flex-wrap justify-center text-sm font-apercu">
          <div className="px-2 hover:underline cursor-pointer">Author</div>
          <div className="px-2 hover:underline cursor-pointer">Blogs</div>
          <div className="px-2 hover:underline cursor-pointer">Category</div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3">
          <RiFacebookFill className="w-5 h-5 cursor-pointer" />
          <RiInstagramLine className="w-5 h-5 cursor-pointer" />
          <RiTwitterFill className="w-5 h-5 cursor-pointer" />
          <RiLinkedinBoxFill className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Divider */}
      <hr className="h-px my-6 bg-[#111]/10 border-0" />

      {/* Copyright */}
      <div className="text-center text-sm font-apercu pb-10 px-4">
        <p>
          © Backend Stories 2025 || Developed by{" "}
          <a
            className="text-[#444BFF]"
            href="https://emonahmed.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emon
          </a>{" "}
          || UI Design by{" "}
          <a
            className="text-[#444BFF]"
            href="https://www.figma.com/community/file/1197824063891898115"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antoine Piedanna (Figma Community)
          </a>
        </p>
      </div>
    </div>
  );
}

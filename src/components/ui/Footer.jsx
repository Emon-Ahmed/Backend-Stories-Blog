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
    <div className="container mx-auto my-auto">
      <div className="flex justify-between items-center py-20">
        <div className="cursor-pointer">
          <img className="w-52 h-9" src={Logo} alt="techBlog Logo" />
        </div>
        <div className="font-apercu text-sm flex cursor-pointer">
          <div className="px-3 hover:underline">Author</div>
          <div className="px-3 hover:underline">Blogs</div>
          <div className="px-3 hover:underline">Category</div>
        </div>
        <div className="font-apercu text-sm flex items-center cursor-pointer">
          <div className="px-1">
            <RiFacebookFill />
          </div>
          <div className="px-1">
            <RiInstagramLine />
          </div>
          <div className="px-1">
            <RiTwitterFill />
          </div>
          <div className="px-1">
            <RiLinkedinBoxFill />
          </div>
        </div>
      </div>
      <hr class="h-px my-8 bg-[#111]/10 border-0 " />
      <div className="flex justify-center items-center pb-20">
        <div className="font-apercu text-sm cursor-pointer ">
          <div className="px-3 underline cursor-text text-center">
            @Copyright Backend Stories 2025 || Develop By{" "}
            <a
              className="text-[#444BFF]"
              target="_blank"
              href="https://emonahmed.xyz/"
            >
              Emon
            </a>{" "}
            || UI Design By{" "}
            <a
              className="text-[#444BFF]"
              target="_blank"
              href="https://www.figma.com/community/file/1197824063891898115"
            >
              Antoine Piedanna (Figma Community)
            </a>
          </div>
          {/* <div className="px-3 underline">Privacy Policy</div> */}
          {/* <div className="px-3 underline">Terms of Service</div> */}
          {/* <div className="px-3 underline">Cookies Settings</div> */}
        </div>
      </div>
    </div>
  );
}

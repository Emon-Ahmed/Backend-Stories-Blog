import React from "react";
import { RiArrowRightSLine } from "@remixicon/react";

export default function BlogButton() {
  return (
    <div className="mt-6 flex items-center cursor-pointer">
      <div className="md:px-4 px-3 md:py-2 py-1 border-black hover:bg-black hover:text-white border-2 inline-block rounded text-sm md:text-lg">
        <div className="flex justify-center items-center">
          <span> Read more</span>
          <RiArrowRightSLine size={18} className="ms-1" />
        </div>
      </div>
    </div>
  );
}

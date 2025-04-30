import React from "react";
import BlogButton from "./BlogButton";

export default function BlogCard({
  url,
  category,
  readTime,
  title,
  description,
}) {
  return (
    <div className="pb-2 md:pb-16 font-apercu">
      <div className="border-2 rounded border-[#111111]/10 ">
        <div>
          <img className="w-full" src={url} alt="Featured Blog Image" />
        </div>
        <div className="md:px-14 px-4 md:py-12 py-4 flex flex-col justify-between">
          <div>
            <div className="pb-4 md:pb-6 text-sm">
              <span className="px-2 py-1 bg-black text-white rounded  cursor-pointer">
                {category}
              </span>
              <span className="ms-4 font-medium">{readTime}</span>
            </div>
            <div className="md:pb-4 pb-2 font-bold text-xl md:text-2xl cursor-pointer">
              {title}
            </div>
            <div className="text-sm text-[#111111]/60">{description}</div>
          </div>
          <BlogButton />
        </div>
      </div>
    </div>
  );
}

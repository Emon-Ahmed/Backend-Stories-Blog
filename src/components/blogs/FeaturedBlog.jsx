import React from "react";
import BlogButton from "./BlogButton";

export default function FeaturedBlog({
  title,
  description,
  category,
  url,
  createdAt,
}) {
  return (
    <div className="bg-[#FAFBFC] md:py-16 py-4  font-apercu">
      <div className="container mx-auto my-auto border-2 rounded border-[#111111]/10 grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <img
            src="https://res.cloudinary.com/dag8439hw/image/upload/v1740220287/tech-blog/blog-images/FeaturedBlog_rdq47i.png"
            alt={title}
          />
        </div>
        <div className="md:px-14 px-7  md:py-12 py-6 flex flex-col justify-between">
          <div>
            <div className="pb-4 md:pb-6 text-sm">
              <span className="px-2 py-1 bg-black text-white rounded cursor-pointer">
                {category}
              </span>
              <span className="ms-4 font-medium">5 min Read</span>
            </div>
            <div className="pb-2 md:pb-4 font-bold text-2xl md:text-4xl cursor-pointer">
              {title}
            </div>
            <div className="text-sm md:text-lg text-[#111111]/60">
              {description}
            </div>
          </div>
          <BlogButton />
        </div>
      </div>
    </div>
  );
}

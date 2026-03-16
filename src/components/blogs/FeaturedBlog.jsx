import React from "react";
import BlogButton from "./BlogButton";
import { formatBlogDate, getReadTime } from "../../utils/blogs";

export default function FeaturedBlog({
  title,
  description,
  category,
  url,
  createdAt,
  author,
}) {
  const fallbackImage =
    "https://res.cloudinary.com/dag8439hw/image/upload/v1740220287/tech-blog/blog-images/FeaturedBlog_rdq47i.png";

  return (
    <div className="bg-[#FAFBFC] md:py-16 py-4  font-apercu">
      <div className="container mx-auto my-auto border-2 rounded border-[#111111]/10 grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <img
            className="w-full h-full min-h-72 object-cover"
            src={url || fallbackImage}
            alt={title}
          />
        </div>
        <div className="md:px-14 px-7  md:py-12 py-6 flex flex-col justify-between">
          <div>
            <div className="pb-4 md:pb-6 text-sm flex flex-wrap items-center gap-y-2">
              <span className="px-2 py-1 bg-black text-white rounded cursor-pointer">
                {category}
              </span>
              <span className="ms-4 font-medium">{getReadTime(description)}</span>
            </div>
            <div className="pb-2 md:pb-4 font-bold text-2xl md:text-4xl cursor-pointer">
              {title}
            </div>
            <div className="text-sm md:text-lg text-[#111111]/60 leading-7">
              {description}
            </div>
            <div className="pt-6 flex flex-wrap items-center gap-4 text-sm text-[#111111]/60">
              <span className="font-medium text-[#111111]">{author || "Backend Stories"}</span>
              <span>{formatBlogDate(createdAt)}</span>
            </div>
          </div>
          <BlogButton />
        </div>
      </div>
    </div>
  );
}

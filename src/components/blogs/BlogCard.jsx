import React from "react";
import BlogButton from "./BlogButton";
import { formatBlogDate, getExcerpt, getReadTime } from "../../utils/blogs";

export default function BlogCard({
  url,
  category,
  readTime,
  title,
  description,
  author,
  createdAt,
}) {
  const metaReadTime = readTime || getReadTime(description);
  const previewText = getExcerpt(description, 120);
  const publishedDate = formatBlogDate(createdAt);

  return (
    <div className="pb-2 md:pb-16 font-apercu">
      <div className="border-2 rounded border-[#111111]/10 bg-white h-full overflow-hidden">
        <div>
          <img className="w-full h-56 object-cover" src={url} alt={title} />
        </div>
        <div className="md:px-14 px-4 md:py-12 py-4 flex flex-col justify-between h-[calc(100%-14rem)]">
          <div>
            <div className="pb-4 md:pb-6 text-sm flex flex-wrap items-center gap-y-2">
              <span className="px-2 py-1 bg-black text-white rounded  cursor-pointer">
                {category}
              </span>
              <span className="ms-4 font-medium">{metaReadTime}</span>
            </div>
            <div className="md:pb-4 pb-2 font-bold text-xl md:text-2xl cursor-pointer">
              {title}
            </div>
            <div className="text-sm text-[#111111]/60 leading-6">{previewText}</div>
          </div>
          <div className="pt-6">
            <div className="h-px bg-[#111111]/10" />
            <div className="pt-4 flex items-center justify-between gap-4 text-sm text-[#111111]/60">
              <span className="font-medium text-[#111111]">{author || "Backend Stories"}</span>
              <span>{publishedDate}</span>
            </div>
          </div>
          <BlogButton />
        </div>
      </div>
    </div>
  );
}

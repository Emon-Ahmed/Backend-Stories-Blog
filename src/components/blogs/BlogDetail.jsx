import React from "react";
import { formatBlogDate, getReadTime } from "../../utils/blogs";

export default function BlogDetail({ blog }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 font-apercu">
      <div className="lg:col-span-8">
        <div className="border-2 border-[#111111]/10 rounded bg-white p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
            <span className="px-3 py-1 bg-black text-white rounded">
              {blog?.categories?.name || "General"}
            </span>
            <span className="text-[#111111]/60">
              {getReadTime(blog?.description)}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
            {blog?.name}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#111111]/60">
            <span className="font-medium text-[#111111]">
              {blog?.author?.name || "Backend Stories"}
            </span>
            <span>{blog?.author?.email}</span>
            <span>{formatBlogDate(blog?.createdAt)}</span>
          </div>

          <div className="my-8 h-px bg-[#111111]/10" />

          <div className="text-base md:text-lg leading-8 text-[#111111]/75 whitespace-pre-wrap break-words">
            {blog?.description}
          </div>
        </div>
      </div>

      <div className="lg:col-span-4">
        <div className="border-2 border-[#111111]/10 rounded bg-white p-6 sticky top-8">
          <div className="text-sm uppercase tracking-[0.2em] text-[#111111]/50">
            Article Info
          </div>
          <div className="mt-6 space-y-6">
            <div>
              <div className="text-xs text-[#111111]/50 mb-1">Category</div>
              <div className="text-lg font-semibold text-[#111111]">
                {blog?.categories?.name || "General"}
              </div>
            </div>
            <div>
              <div className="text-xs text-[#111111]/50 mb-1">Author</div>
              <div className="text-lg font-semibold text-[#111111]">
                {blog?.author?.name || "Backend Stories"}
              </div>
              <div className="text-sm text-[#111111]/60 mt-1">
                {blog?.author?.email}
              </div>
            </div>
            <div>
              <div className="text-xs text-[#111111]/50 mb-1">Published</div>
              <div className="text-lg font-semibold text-[#111111]">
                {formatBlogDate(blog?.createdAt)}
              </div>
            </div>
            <div>
              <div className="text-xs text-[#111111]/50 mb-1">Read Time</div>
              <div className="text-lg font-semibold text-[#111111]">
                {getReadTime(blog?.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

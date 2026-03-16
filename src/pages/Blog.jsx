import React from "react";
import Header from "../components/ui/Header";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import { useParams, Link } from "react-router";
import { useGetBlogQuery, useGetBlogsQuery } from "../features/blogs/blogsApi";
import BlogPostSkeleton from "../components/skeleton/BlogPostSkeleton";
import BlogCard from "../components/blogs/BlogCard";
import BlogDetail from "../components/blogs/BlogDetail";
import BannerBG from "../assets/images/banner-bg.png";
import aiIcon from "../assets/images/ai.svg";
import { formatBlogDate, getReadTime } from "../utils/blogs";

export default function Blog() {
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useGetBlogQuery(id);
  const { data: allBlogsData } = useGetBlogsQuery();

  if (isLoading) {
    return <BlogPostSkeleton />;
  }

  if (isError) {
    return (
      <>
        <Header />
        <div className="bg-[#FAFBFC]">
          <div className="container mx-auto py-16 font-apercu text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#111111]">
              Unable to load blog
            </div>
            <div className="mt-3 text-sm md:text-base text-[#111111]/60">
              The blog could not be found or the server is temporarily
              unavailable.
            </div>
            <button
              type="button"
              onClick={refetch}
              className="mt-6 text-white bg-[#444BFF] py-3 px-8 rounded cursor-pointer"
            >
              Retry
            </button>
            <Link
              to="/blogs"
              className="mt-6 ms-4 text-[#444BFF] bg-white border-2 border-[#444BFF] py-3 px-8 rounded cursor-pointer inline-block"
            >
              Back to blogs
            </Link>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </>
    );
  }

  const blog = data?.data;
  const allBlogs = Array.isArray(allBlogsData?.data) ? allBlogsData.data : [];
  const relatedBlogs = allBlogs
    .filter(
      (b) => b.categories?._id === blog?.categories?._id && b._id !== blog._id,
    )
    .slice(0, 3);

  return (
    <div>
      <Header />

      <div className="bg-[#FAFBFC]">
        <div
          // style={{ backgroundImage: `url(${BannerBG})` }}
          className="bg-cover bg-no-repeat bg-center bg-gray-100"
        >
          <div className="container mx-auto px-4 py-10 md:py-16 font-apercu">
            <Link
              to="/blogs"
              className="text-[#444BFF] text-sm md:text-base hover:underline"
            >
              ← Back to blogs
            </Link>
            <div className="mt-8 max-w-4xl">
              <div className="flex items-center text-lg">
                <div className="mx-0.5">Article</div>
                <img src={aiIcon} alt="AI Icon" className="w-4 h-4 mx-0.5" />
              </div>
              <div className="text-4xl md:text-6xl font-bold py-4 text-[#111111]">
                {blog?.name}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-[#111111]/60">
                <span className="px-3 py-1 bg-black text-white rounded">
                  {blog?.categories?.name}
                </span>
                <span>{blog?.author?.name}</span>
                <span>{formatBlogDate(blog?.createdAt)}</span>
                <span>{getReadTime(blog?.description)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {blog?.image ? (
        <div className="bg-[#FAFBFC] py-6 md:py-10 font-apercu">
          <div className="container mx-auto px-4">
            <div className="border-2 border-[#111111]/10 rounded overflow-hidden bg-white">
              <img
                src={blog.image}
                alt={blog.name}
                className="w-full max-h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="bg-[#FAFBFC] py-8 md:py-12">
        <div className="container mx-auto px-4">
          <BlogDetail blog={blog} />
        </div>
      </div>

      {relatedBlogs.length > 0 && (
        <div className="bg-[#FAFBFC] py-16 md:py-24 font-apercu">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12 text-center">
              More from {blog?.categories?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog._id} to={`/blog/${relatedBlog._id}`}>
                  <BlogCard
                    category={relatedBlog.categories?.name}
                    title={relatedBlog.name}
                    description={relatedBlog.description}
                    author={relatedBlog.author?.name}
                    createdAt={relatedBlog.createdAt}
                    url={
                      relatedBlog.image ||
                      "https://res.cloudinary.com/dag8439hw/image/upload/v1740227041/tech-blog/blog-images/BlogImage_akqn1l.png"
                    }
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Newsletter />
      <Footer />
    </div>
  );
}

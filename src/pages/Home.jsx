import React, { useState } from "react";
import Header from "../components/ui/Header";
import MainBanner from "../components/banner/MainBanner";
import FeaturedBlog from "../components/blogs/FeaturedBlog";
import BlogCard from "../components/blogs/BlogCard";
import Pagination from "../components/pagination/Pagination";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import { Link } from "react-router";
import { useGetBlogsQuery } from "../features/blogs/blogsApi";
import HomePageSkeleton from "../components/skeleton/HomePageSkeleton";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const { data, isLoading, isError, refetch, isFetching } = useGetBlogsQuery();
  const blogs = Array.isArray(data?.data) ? data.data : [];

  if ((isLoading || isFetching) && blogs.length === 0) {
    return <HomePageSkeleton />;
  }
  if (isError && blogs.length === 0) {
    return (
      <>
        <Header />
        <MainBanner setSelectedCategory={setSelectedCategory} />
        <div className="bg-[#FAFBFC]">
          <div className="container mx-auto py-16 font-apercu text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#111111]">
              Unable to load blogs right now
            </div>
            <div className="mt-3 text-sm md:text-base text-[#111111]/60">
              The blog server is temporarily unavailable. Please try again.
            </div>
            <button
              type="button"
              onClick={refetch}
              className="mt-6 text-white bg-[#444BFF] py-3 px-8 rounded cursor-pointer"
            >
              Retry
            </button>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </>
    );
  }

  const filteredBlogs =
    selectedCategory === "View all"
      ? [...blogs]
      : blogs.filter((blog) => blog.categories?.name === selectedCategory);

  const sortedBlogs = filteredBlogs.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  const featuredBlog = sortedBlogs[0];
  const remainingBlogs = sortedBlogs.length > 1 ? sortedBlogs.slice(1) : [];

  return (
    <>
      <Header />
      <MainBanner setSelectedCategory={setSelectedCategory} />

      {featuredBlog && (
        <Link to={`/blog/${featuredBlog._id}`}>
          <FeaturedBlog
            title={featuredBlog.name}
            description={featuredBlog.description}
            category={featuredBlog.categories?.name}
            url={
              featuredBlog.image ||
              "https://res.cloudinary.com/dag8439hw/image/upload/v1740227041/tech-blog/blog-images/BlogImage_akqn1l.png"
            }
            createdAt={featuredBlog.createdAt}
          />
        </Link>
      )}

      <div className="bg-[#FAFBFC]">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {remainingBlogs.map((blog) => (
              <Link key={blog._id} to={`/blog/${blog._id}`}>
                <BlogCard
                  category={blog.categories?.name}
                  title={blog.name}
                  description={blog.description}
                  url={
                    blog.image ||
                    "https://res.cloudinary.com/dag8439hw/image/upload/v1740227041/tech-blog/blog-images/BlogImage_akqn1l.png"
                  }
                  createdAt={blog.createdAt}
                />
              </Link>
            ))}
          </div>
          {remainingBlogs.length > 0 && <Pagination />}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

import React, { useState } from "react";
import Header from "../components/ui/Header";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import BlogCard from "../components/blogs/BlogCard";
import Pagination from "../components/pagination/Pagination";
import { Link } from "react-router";
import { useGetBlogsQuery } from "../features/blogs/blogsApi";
import HomePageSkeleton from "../components/skeleton/HomePageSkeleton";
import aiIcon from "../assets/images/ai.svg";
import Tabs from "../components/banner/Tabs";
import FeaturedBlog from "../components/blogs/FeaturedBlog";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const {
    data: blogsData,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useGetBlogsQuery();

  const blogs = Array.isArray(blogsData?.data) ? blogsData.data : [];

  if ((isLoading || isFetching) && blogs.length === 0) {
    return <HomePageSkeleton />;
  }

  if (isError && blogs.length === 0) {
    return (
      <>
        <Header />
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
  const remainingBlogs = sortedBlogs.slice(1);

  return (
    <div>
      <Header />

      <div className="bg-gray-100 font-apercu">
        <div className="container mx-auto px-4 pt-12 md:pt-16 pb-10 md:pb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mt-6">
            All Blogs & Stories
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg text-[#111111]/60 leading-7">
            Explore practical backend lessons, clean technical writing, and
            thoughtful developer stories.
          </p>
          <div className="mt-8">
            <Tabs onTabChange={setSelectedCategory} />
          </div>
        </div>
      </div>

      <div className="bg-[#FAFBFC] min-h-screen font-apercu">
        <div className="container mx-auto py-12 md:py-16 px-4">
          {sortedBlogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {remainingBlogs.map((blog) => (
                  <Link key={blog._id} to={`/blog/${blog._id}`}>
                    <BlogCard
                      category={blog.categories?.name}
                      title={blog.name}
                      description={blog.description}
                      author={blog.author?.name}
                      createdAt={blog.createdAt}
                      url={
                        blog.image ||
                        "https://res.cloudinary.com/dag8439hw/image/upload/v1740227041/tech-blog/blog-images/BlogImage_akqn1l.png"
                      }
                    />
                  </Link>
                ))}
              </div>
              {remainingBlogs.length > 6 && <Pagination />}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-2xl md:text-3xl font-bold text-[#111111]">
                No blogs found
              </div>
              <div className="mt-3 text-sm md:text-base text-[#111111]/60">
                We couldn't find any blogs in this category. Try a different
                category.
              </div>
            </div>
          )}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

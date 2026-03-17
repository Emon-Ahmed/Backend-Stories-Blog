import React from "react";
import Header from "../components/ui/Header";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import { Link, useParams } from "react-router";
import { useGetCategoryQuery } from "../features/blogs/blogsApi";
import BlogPostSkeleton from "../components/skeleton/BlogPostSkeleton";
import BlogCard from "../components/blogs/BlogCard";

export default function Category() {
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useGetCategoryQuery(id);

  if (isLoading) {
    return <BlogPostSkeleton />;
  }

  if (isError) {
    return (
      <>
        <Header />
        <div className="bg-[#FAFBFC]">
          <div className="container mx-auto py-16 font-apercu text-center px-4">
            <div className="text-2xl md:text-3xl font-bold text-[#111111]">
              Unable to load category
            </div>
            <div className="mt-3 text-sm md:text-base text-[#111111]/60">
              The category could not be found or the server is temporarily
              unavailable.
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={refetch}
                className="text-white bg-[#444BFF] py-3 px-8 rounded cursor-pointer"
              >
                Retry
              </button>
              <Link
                to="/categories"
                className="text-[#444BFF] bg-white border-2 border-[#444BFF] py-3 px-8 rounded inline-block"
              >
                Back to categories
              </Link>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </>
    );
  }

  const category = data?.data;
  const blogs = Array.isArray(category?.blogs)
    ? [...category.blogs].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      )
    : [];

  return (
    <div>
      <Header />

      <div className="bg-gray-100 font-apercu">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <Link
            to="/categories"
            className="text-[#444BFF] text-sm md:text-base hover:underline"
          >
            ← Back to categories
          </Link>
          <div className="mt-8 max-w-4xl">
            <div className="text-sm uppercase tracking-[0.3em] text-[#111111]/45">
              Category archive
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold text-[#111111]">
              {category?.name}
            </h1>
            <p className="mt-5 text-sm md:text-lg text-[#111111]/60 leading-7">
              Discover every post currently attached to this backend-powered
              category.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm md:text-base text-[#111111]/60">
              <span className="px-4 py-2 bg-black text-white rounded-full">
                {blogs.length} article{blogs.length === 1 ? "" : "s"}
              </span>
              {/* <span>Category ID: {category?._id}</span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFBFC] min-h-screen font-apercu">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogs.map((blog) => (
                <Link key={blog._id} to={`/blog/${blog._id}`}>
                  <BlogCard
                    category={blog.categories?.name || category?.name}
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
          ) : (
            <div className="border-2 border-dashed border-[#111111]/15 rounded-3xl bg-white py-16 px-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#111111]">
                No blogs in this category yet
              </div>
              <div className="mt-3 text-sm md:text-base text-[#111111]/60 max-w-2xl mx-auto">
                The category exists successfully in the API, but there are no
                linked blog posts right now.
              </div>
              <Link
                to="/categories"
                className="mt-6 inline-block text-white bg-[#444BFF] py-3 px-8 rounded"
              >
                Explore other categories
              </Link>
            </div>
          )}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

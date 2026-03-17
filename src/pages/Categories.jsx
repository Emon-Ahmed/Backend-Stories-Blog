import React from "react";
import Header from "../components/ui/Header";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import { Link } from "react-router";
import {
  useGetBlogsQuery,
  useGetCategoriesQuery,
} from "../features/blogs/blogsApi";
import HomePageSkeleton from "../components/skeleton/HomePageSkeleton";
import { formatBlogDate, getExcerpt } from "../utils/blogs";

export default function Categories() {
  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    refetch: refetchCategories,
    isFetching: isCategoriesFetching,
  } = useGetCategoriesQuery();
  const {
    data: blogsData,
    isLoading: isBlogsLoading,
    isError: isBlogsError,
    refetch: refetchBlogs,
    isFetching: isBlogsFetching,
  } = useGetBlogsQuery();

  const categories = Array.isArray(categoriesData?.data)
    ? categoriesData.data
    : [];
  const blogs = Array.isArray(blogsData?.data) ? blogsData.data : [];

  const isInitialLoading =
    (isCategoriesLoading ||
      isCategoriesFetching ||
      isBlogsLoading ||
      isBlogsFetching) &&
    categories.length === 0 &&
    blogs.length === 0;

  if (isInitialLoading) {
    return <HomePageSkeleton />;
  }

  if ((isCategoriesError || isBlogsError) && categories.length === 0) {
    return (
      <>
        <Header />
        <div className="bg-[#FAFBFC]">
          <div className="container mx-auto py-16 font-apercu text-center px-4">
            <div className="text-2xl md:text-3xl font-bold text-[#111111]">
              Unable to load categories right now
            </div>
            <div className="mt-3 text-sm md:text-base text-[#111111]/60">
              The category service is temporarily unavailable. Please try again.
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  refetchCategories();
                  refetchBlogs();
                }}
                className="text-white bg-[#444BFF] py-3 px-8 rounded cursor-pointer"
              >
                Retry
              </button>
              <Link
                to="/blogs"
                className="text-[#444BFF] bg-white border-2 border-[#444BFF] py-3 px-8 rounded"
              >
                Browse blogs
              </Link>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </>
    );
  }

  const categoryCards = categories
    .map((category) => {
      const categoryBlogs = blogs
        .filter((blog) => blog.categories?._id === category._id)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return {
        ...category,
        totalBlogs: categoryBlogs.length,
        latestBlog: categoryBlogs[0],
      };
    })
    .sort((a, b) => {
      if (b.totalBlogs !== a.totalBlogs) return b.totalBlogs - a.totalBlogs;
      return a.name.localeCompare(b.name);
    });

  const featuredCategory = categoryCards[0];

  return (
    <div>
      <Header />

      <div className="bg-gray-100 font-apercu">
        <div className="container mx-auto px-4 pt-12 md:pt-16 pb-12 md:pb-14">
          <div className="max-w-3xl text-center mx-auto">
            <div className="text-sm uppercase tracking-[0.3em] text-[#111111]/50">
              Blog categories
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mt-5">
              Explore every writing lane in one place
            </h1>
            <p className="mt-5 text-sm md:text-lg text-[#111111]/60 leading-7">
              Browse category collections powered directly by the backend API,
              then jump into the latest posts inside each topic.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFBFC] min-h-screen font-apercu">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {categoryCards.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {categoryCards.map((category) => (
                <Link
                  key={category._id}
                  to={`/category/${category._id}`}
                  className="group border-2 border-[#111111]/10 rounded-3xl bg-white p-6 md:p-8 transition hover:border-[#111111]/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-[#111111]/45">
                        Category
                      </div>
                      <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#111111] group-hover:text-[#444BFF] transition">
                        {category.name}
                      </h2>
                    </div>
                    <div className="rounded-full bg-[#111111] px-4 py-2 text-sm text-white whitespace-nowrap">
                      {category.totalBlogs} blog
                      {category.totalBlogs === 1 ? "" : "s"}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#111111]/10 pt-6">
                    {category.latestBlog ? (
                      <>
                        <div className="text-sm text-[#111111]/50">
                          Latest post
                        </div>
                        <div className="mt-3 text-xl font-bold text-[#111111]">
                          {category.latestBlog.name}
                        </div>
                        <div className="mt-3 text-sm md:text-base leading-7 text-[#111111]/60">
                          {getExcerpt(category.latestBlog.description, 160)}
                        </div>
                        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-[#111111]/55">
                          <span className="font-medium text-[#111111]">
                            {category.latestBlog.author?.name ||
                              "Backend Stories"}
                          </span>
                          <span>
                            {formatBlogDate(category.latestBlog.createdAt)}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-sm text-[#111111]/50">
                          Latest post
                        </div>
                        <div className="mt-3 text-lg font-medium text-[#111111]">
                          No blogs published in this category yet
                        </div>
                        <div className="mt-3 text-sm md:text-base leading-7 text-[#111111]/60">
                          This category exists in the backend and is ready to
                          receive content as soon as new blogs are published.
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-2xl md:text-3xl font-bold text-[#111111]">
                No categories found
              </div>
              <div className="mt-3 text-sm md:text-base text-[#111111]/60">
                The API did not return any categories yet. Add categories from
                the backend and they will appear here automatically.
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

import React from "react";
import Header from "../components/ui/Header";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import { Link } from "react-router";
import { useGetAuthorsQuery } from "../features/blogs/blogsApi";
import HomePageSkeleton from "../components/skeleton/HomePageSkeleton";

export default function Authors() {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetAuthorsQuery();
  const authors = Array.isArray(data?.data) ? data.data : [];

  if ((isLoading || isFetching) && authors.length === 0) {
    return <HomePageSkeleton />;
  }

  if (isError && authors.length === 0) {
    return (
      <>
        <Header />
        <div className="bg-[#FAFBFC]">
          <div className="container mx-auto py-16 font-apercu text-center px-4">
            <div className="text-2xl md:text-3xl font-bold text-[#111111]">
              Unable to load authors right now
            </div>
            <div className="mt-3 text-sm md:text-base text-[#111111]/60">
              The author service is temporarily unavailable. Please try again.
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

  const sortedAuthors = [...authors].sort((a, b) => {
    const aCount = Array.isArray(a.blogs) ? a.blogs.length : 0;
    const bCount = Array.isArray(b.blogs) ? b.blogs.length : 0;
    if (bCount !== aCount) return bCount - aCount;
    return (a.name || "").localeCompare(b.name || "");
  });

  return (
    <div>
      <Header />

      <div className="bg-gray-100 font-apercu">
        <div className="container mx-auto px-4 pt-12 md:pt-16 pb-12 md:pb-14">
          <div className="max-w-3xl text-center mx-auto">
            <div className="text-sm uppercase tracking-[0.3em] text-[#111111]/50">
              Writers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mt-5">
              Meet the authors behind the stories
            </h1>
            <p className="mt-5 text-sm md:text-lg text-[#111111]/60 leading-7">
              Explore real authors from the backend API and jump straight into
              the posts each person has published.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFBFC] min-h-screen font-apercu">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {sortedAuthors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {sortedAuthors.map((author) => {
                const totalBlogs = Array.isArray(author.blogs)
                  ? author.blogs.length
                  : 0;
                const initials = (author.name || "A")
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part[0]?.toUpperCase())
                  .join("");

                return (
                  <Link
                    key={author._id}
                    to={`/author/${author._id}`}
                    className="group border-2 border-[#111111]/10 rounded-3xl bg-white p-6 md:p-8 transition hover:border-[#111111]/25"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-[#111111] text-white flex items-center justify-center text-xl font-bold">
                        {initials || "A"}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#111111] group-hover:text-[#444BFF] transition">
                          {author.name}
                        </div>
                        <div className="mt-1 text-sm text-[#111111]/55">
                          {author.email}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[#111111]/10 pt-6 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-[#111111]/50">
                          Published articles
                        </div>
                        <div className="mt-2 text-3xl font-bold text-[#111111]">
                          {totalBlogs}
                        </div>
                      </div>
                      <div className="rounded-full bg-[#F3F5F7] px-4 py-2 text-sm text-[#111111]">
                        View profile
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-2xl md:text-3xl font-bold text-[#111111]">
                No authors found
              </div>
              <div className="mt-3 text-sm md:text-base text-[#111111]/60">
                The API did not return any authors yet. Once authors exist in
                the backend, they will appear here automatically.
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

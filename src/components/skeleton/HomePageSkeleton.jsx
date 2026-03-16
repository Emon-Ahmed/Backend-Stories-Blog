import React from "react";
import Header from "../ui/Header";
import MainBanner from "../banner/MainBanner";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../ui/Footer";
import Skeleton from "./Skeleton";

function FeaturedBlogSkeleton() {
  return (
    <div className="bg-[#FAFBFC] md:py-16 py-4 font-apercu">
      <div className="container mx-auto my-auto border-2 rounded border-[#111111]/10 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Skeleton className="w-full h-72 md:h-full min-h-[280px]" />
        </div>
        <div className="md:px-14 px-7 md:py-12 py-6 flex flex-col justify-between">
          <div>
            <div className="pb-4 md:pb-6 text-sm flex items-center">
              <Skeleton className="h-7 w-24 rounded" />
              <Skeleton className="h-5 w-20 rounded ms-4" />
            </div>
            <Skeleton className="pb-2 md:pb-4 h-10 md:h-14 w-4/5 rounded" />
            <Skeleton className="h-4 md:h-5 w-full rounded mb-3" />
            <Skeleton className="h-4 md:h-5 w-11/12 rounded mb-3" />
            <Skeleton className="h-4 md:h-5 w-2/3 rounded" />
          </div>
          <Skeleton className="mt-6 h-11 w-36 rounded" />
        </div>
      </div>
    </div>
  );
}

function BlogCardSkeleton() {
  return (
    <div className="pb-2 md:pb-16 font-apercu">
      <div className="border-2 rounded border-[#111111]/10">
        <div>
          <Skeleton className="w-full h-56" />
        </div>
        <div className="md:px-14 px-4 md:py-12 py-4 flex flex-col justify-between">
          <div>
            <div className="pb-4 md:pb-6 text-sm flex items-center">
              <Skeleton className="h-7 w-20 rounded" />
              <Skeleton className="h-5 w-16 rounded ms-4" />
            </div>
            <Skeleton className="md:pb-4 pb-2 h-8 w-5/6 rounded" />
            <Skeleton className="h-4 w-full rounded mb-2" />
            <Skeleton className="h-4 w-10/12 rounded mb-2" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>
          <Skeleton className="mt-6 h-11 w-32 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function HomePageSkeleton() {
  return (
    <>
      <Header />
      <MainBanner />
      <FeaturedBlogSkeleton />

      <div className="bg-[#FAFBFC]">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}

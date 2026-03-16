import React from "react";
import Header from "../ui/Header";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../ui/Footer";
import Skeleton from "./Skeleton";

export default function BlogPostSkeleton() {
  return (
    <div>
      <Header />
      <div className="my-48 text-center text-6xl flex flex-col items-center">
        <Skeleton className="h-14 w-3/4 max-w-3xl rounded mb-6" />
        <Skeleton className="h-6 w-1/3 max-w-sm rounded" />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

import React from "react";
import Header from "../components/ui/Header";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import { useParams } from "react-router";
import { useGetBlogQuery } from "../features/blogs/blogsApi";
import BlogPostSkeleton from "../components/skeleton/BlogPostSkeleton";

export default function Blog() {
  let { id } = useParams();
  const { data, isLoading } = useGetBlogQuery(id);
  if (isLoading) {
    return <BlogPostSkeleton />;
  }
  return (
    <div>
      <Header />
      <div className="my-48 text-center text-6xl">{data?.data?.name}</div>
      <Newsletter />
      <Footer />
    </div>
  );
}

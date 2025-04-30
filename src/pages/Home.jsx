import React from "react";
import Header from "../components/ui/Header";
import MainBanner from "../components/banner/MainBanner";
import FeaturedBlog from "../components/blogs/FeaturedBlog";
import BlogCard from "../components/blogs/BlogCard";
import Pagination from "../components/pagination/Pagination";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <Link to="/blog/Your passport to the web3 economy">
        <FeaturedBlog />
      </Link>
      <div className="bg-[#FAFBFC] ">
        <div className="container mx-auto my-auto ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            <Link to="/blog/A beginner’s guide to blackchain for-engineers">
              <BlogCard
                category="Blockchain"
                readTime="5 min read"
                title="A beginner’s guide to blackchain for engineers"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                url="https://res.cloudinary.com/dag8439hw/image/upload/v1740227041/tech-blog/blog-images/BlogImage_akqn1l.png"
              />
            </Link>
            <Link to="/blog/How to secure have your crypto wallet">
              <BlogCard
                category="People"
                readTime="3 min read"
                title="How to secure have your crypto wallet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                url="https://res.cloudinary.com/dag8439hw/image/upload/v1740228386/tech-blog/blog-images/BlogImage3_xmeyxm.png"
              />
            </Link>
            <Link to="/blog/A beginner’s guide to blackchain for-engineers">
              <BlogCard
                category="NFT"
                readTime="4 min read"
                title="New NFT projects to watch : December 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                url="https://res.cloudinary.com/dag8439hw/image/upload/v1740228356/tech-blog/blog-images/BlogImage2_jwzu3n.png"
              />
            </Link>
            <Link to="/blog/What is a Decentralized Autonomous Organization ?">
              <BlogCard
                category="Engineering"
                readTime="6 min read"
                title="What is a Decentralized Autonomous Organization ?"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                url="https://res.cloudinary.com/dag8439hw/image/upload/v1740246079/tech-blog/blog-images/BlogImage4_il8jfv.png"
              />
            </Link>
            <Link to="/blog/Crypto state of play : September 2022">
              <BlogCard
                category="NFT"
                readTime="5 min read"
                title="Crypto state of play : September 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                url="https://res.cloudinary.com/dag8439hw/image/upload/v1740246034/tech-blog/blog-images/BlogImage5_qbpgsh.png"
              />
            </Link>
            <Link to="/blog/Guide to buy cryptocurrency safly : September 2022">
              <BlogCard
                category="Crypto"
                readTime="5 min read"
                title="Guide to buy cryptocurrency safly : September 2022"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                url="https://res.cloudinary.com/dag8439hw/image/upload/v1740246014/tech-blog/blog-images/BlogImage6_gvv4os.png"
              />
            </Link>
          </div>
          <Pagination />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

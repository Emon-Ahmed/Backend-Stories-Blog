import React from "react";
import Header from "../components/ui/Header";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";
import { useParams } from "react-router";

export default function Blog() {
  let { id } = useParams();

  return (
    <div>
      <Header />
      <div className="my-48 text-center text-6xl">{id}</div>
      <Newsletter />
      <Footer />
    </div>
  );
}

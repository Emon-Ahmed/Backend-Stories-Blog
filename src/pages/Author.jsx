import React from "react";
import Header from "../components/ui/Header";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/ui/Footer";

export default function Author() {
  return (
    <div>
      <Header />
      <div className="my-48 text-center">Author</div>
      <Newsletter />
      <Footer />
    </div>
  );
}

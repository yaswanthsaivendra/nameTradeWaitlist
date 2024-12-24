import React from "react";
import Hero from "./sections/Hero";
import Faqs from "./sections/Faqs";
import ImageTile from "./sections/ImageTile";
import Footer from "./sections/Footer";
import Features from "./sections/Features";

const Page = () => {
  return (
    <div>
      <Hero />
      <ImageTile />
      <Features />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Page;

import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import FeaturesSecond from "./FeaturesSecond";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <Features />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

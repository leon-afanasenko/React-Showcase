import React from "react";
import CarouselComponent from "../components/categories/carousel/Carousel";
import Form from "../components/form/Form";
import SaleComponent from "../components/sale/Sale";
import Banner from "../components/banner/Hero";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <CarouselComponent />
      <Form />
      <SaleComponent />
    </div>
  );
};

export default HomePage;

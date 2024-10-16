import React, { useEffect } from "react";
import "./Products.css";

const Products = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: [0.1] }
    );

    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <section className="products">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="grid">
          <div className="product-card">
            <img src="/4+Trucks.jpg" alt="Moving Trucks" />
            <h3 className="text-xl font-semibold">Moving Trucks</h3>
            <p className="product-description">
              High-quality moving trucks for safe and efficient relocation.
            </p>
          </div>
          <div className="product-card">
            <img src="/IMG_0272.JPG" alt="Furniture Moving" />
            <h3 className="text-xl font-semibold">Furniture Moving</h3>
            <p className="product-description">
              Professional furniture moving services to handle all your needs.
            </p>
          </div>
          <div className="product-card">
            <img src="/IMG_4177.JPEG" alt="Packing Services" />
            <h3 className="text-xl font-semibold">Packing Services</h3>
            <p className="product-description">
              Expert packing services to ensure your belongings are secure.
            </p>
          </div>
          <div className="product-card">
            <img
              src="/Screen+Shot+2019-10-24+at+2.48.06+PM.png"
              alt="Office Moving"
            />
            <h3 className="text-xl font-semibold">Office Moving</h3>
            <p className="product-description">
              Efficient office moving solutions for minimal downtime.
            </p>
          </div>
          <div className="product-card">
            <img src="/twobrothersmoving-trucks.jpg" alt="Storage Solutions" />
            <h3 className="text-xl font-semibold">Storage Solutions</h3>
            <p className="product-description">
              Safe and secure storage options for all your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

import React, { useEffect } from "react";
import "./Features.css";

const Features = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".features-image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const featuresImages = document.querySelectorAll(".features-image");

      featuresImages.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;
        const scale = Math.max(0.95, 1 - (scrolled - rect.top) * 0.0005);
        const translateY = Math.min(0, (scrolled - rect.top) * 0.05);

        image.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="features-section">
      <div className="features-content">
        <div className="features-text">
          <h2>Key Features</h2>
          <p>
            Discover the key features of our service designed to meet your needs
            and exceed expectations.
          </p>
          <ul>
            <li>Feature 1: Efficient and reliable service.</li>
            <li>Feature 2: Friendly and professional team.</li>
            <li>Feature 3: Affordable pricing with no hidden fees.</li>
          </ul>
        </div>
        <div className="features-images">
          <div className="features-image">
            <video
              className="features-video"
              autoPlay
              loop
              muted
              playsInline
              poster="https://www.shutterstock.com/shutterstock/videos/1080016283/thumb/1.jpg?ip=x480"
            >
              <source
                src="https://www.shutterstock.com/shutterstock/videos/1080016283/preview/stock-footage-two-young-movers-searching-for-right-tools.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="features-image">
            <video
              className="features-video"
              autoPlay
              loop
              muted
              playsInline
              poster="https://www.shutterstock.com/shutterstock/videos/1080016295/thumb/9.jpg?ip=x480"
            >
              <source
                src="https://www.shutterstock.com/shutterstock/videos/1080016295/preview/stock-footage-two-young-movers-in-blue-uniform-working-indoors.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

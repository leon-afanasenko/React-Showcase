import React, { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".hero-content");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroContent = document.querySelector(".hero-content");
      const heroTitle = document.querySelector(".hero-title");
      const heroSubtitle = document.querySelector(".hero-subtitle");

      if (heroContent) {
        heroContent.style.transform = `scale(${1 + scrolled * 0.0002})`;
        heroTitle.style.transform = `translateY(${scrolled * 0.01}px)`;
        heroSubtitle.style.transform = `translateY(${scrolled * 0.01}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Service</h1>
          <p className="hero-subtitle">
            Providing the best moving solutions for you and your loved ones.
          </p>
          <p className="hero-phone">
            <a
              href="https://wa.me/0586919014"
              target="_blank"
              rel="noopener noreferrer"
              className="phone-button"
            >
              Call Us: 0586919014
            </a>
          </p>
          <a
            href="https://www.youtube.com/watch?v=your-video-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

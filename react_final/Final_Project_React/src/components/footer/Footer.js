import React from "react";
import FooterGrid from "./FooterGrid";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <FooterGrid />
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.3699184294233!2d34.76890707572958!3d32.08377062674866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4cbbf6ce75a1%3A0x9c32b51e1315b76b!2sGordon%20Beach!5e0!3m2!1sen!2sil!4v1695908602036!5m2!1sen!2sil"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;

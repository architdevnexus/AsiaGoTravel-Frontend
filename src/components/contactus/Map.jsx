"use client";
import React from "react";

const Map = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 relative">
      <h2 className="font-bold text-xl py-10">
        Find Us on:
      </h2>

      {/* Clickable Overlay */}
      <a
        href="https://www.google.com/maps/place/Jawahar+Nagar,+Jaipur,+Rajasthan+302004/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      ></a>

      {/* Embedded Map */}
      <div className="w-full h-[550px] rounded-lg overflow-hidden relative z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8079805174695!2d75.83306537544288!3d26.892023576649828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d64e812b1b%3A0x8f77ac70e6e3b8c6!2sJawahar%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

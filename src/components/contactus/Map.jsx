"use client";
import React from "react";

const Map = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 relative">
      <h2 className="font-bold text-xl py-10">Find Us on:</h2>

      {/* Clickable Overlay */}
      <a
        href="https://www.google.com/maps/place/Asiago+Travels/@26.8961168,75.8417337,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      ></a>

      {/* Embedded Map */}
      <div className="w-full h-[550px] rounded-lg overflow-hidden relative z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.373989033041!2d75.83915417614062!3d26.8961167767086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db78ed73fd979%3A0x3b13299a26946b53!2sAsiago%20Travels!5e0!3m2!1sen!2sin!4v1733640500000!5m2!1sen!2sin"
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

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
        href="https://www.google.com/maps/place/DevNexus+Solutions+Private+Limited/@28.4287156,77.0183343,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      ></a>

      {/* Embedded Map */}
      <div className="w-full h-[550px] rounded-lg overflow-hidden relative z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28069.49185108725!2d77.01833434795387!3d28.42871559046473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23aa291b5bb3%3A0xf71548fe8ebbb887!2sDevNexus%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1750659776040!5m2!1sen!2sin"
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

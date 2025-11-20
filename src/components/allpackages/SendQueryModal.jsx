"use client";

import Image from "next/image";
import React, { useState } from "react";

export const SendQueryModal = ({ title }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    numberOfTravellers: "",
    monthOfTravel: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // ✅ Loader State

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start Loader

    try {
      const res = await fetch("http://194.238.18.1:3005/api/submitQuery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          mobileNumber: Number(formData.mobileNumber),
          email: formData.email,
          numberOfTravellers: Number(formData.numberOfTravellers),
          monthOfTravel: formData.monthOfTravel,
          message: formData.message,
          packageTitle: title,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Query submitted successfully!");
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          numberOfTravellers: "",
          monthOfTravel: "",
          message: "",
        });
      } else {
        alert(data?.message || "Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      alert("Network error! Try again.");
    } finally {
      setLoading(false); // ✅ Stop Loader
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/img/contactformimg.png"
        alt="contactform"
        width={200}
        height={200}
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        Ready to explore the world? Let’s make it happen!
      </h2>
      <p className="mb-6">
        Your next journey starts with a simple form — fill it out now!
      </p>

      <form className="space-y-2 w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Your Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md bg-[#F8F9FA] px-3 py-1 outline-none focus:border-[#3FA9F5]"
        />

        <input
          type="number"
          name="mobileNumber"
          placeholder="Phone Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md bg-[#F8F9FA] px-3 py-1 outline-none focus:border-[#3FA9F5]"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-[#F8F9FA] rounded-md px-3 py-1 outline-none focus:border-[#3FA9F5]"
        />

        <div className="flex gap-2">
          <input
            type="number"
            name="numberOfTravellers"
            placeholder="No. of Travellers"
            value={formData.numberOfTravellers}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-[#F8F9FA] rounded-md px-3 py-1 outline-none focus:border-[#3FA9F5]"
          />
          <input
            type="text"
            name="monthOfTravel"
            placeholder="Month of Travel"
            value={formData.monthOfTravel}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-[#F8F9FA] rounded-md px-3 py-1 outline-none focus:border-[#3FA9F5]"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full border border-gray-300 bg-[#F8F9FA] rounded-md px-3 py-1 outline-none focus:border-[#3FA9F5]"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="px-6 flex items-center justify-center bg-[#3FA9F5] text-white py-2 rounded-md hover:bg-[#3291d8] transition disabled:bg-gray-400"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

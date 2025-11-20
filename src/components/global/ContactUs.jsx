"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    numberOfTravellers: "",
    monthOfTravel: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("http://194.238.18.1:3005/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        message: formData.message
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Form Submitted Successfully!");
      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        numberOfTravellers: "",
        monthOfTravel: "",
        message: "",
      });
    } else {
      alert(data?.message || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    alert("Error submitting form");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="bg-[#f8fafc] py-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div
        className="
          max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-4 md:p-10 relative 
          flex flex-col md:flex-row justify-between gap-8
        "
      >
        {/* ✅ Contact Form (same) */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1B4965] mb-1.5">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Please don’t hesitate to reach out to us whenever you need assistance.
            We will make sure to respond to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block text-sm text-gray-700 mb-0.5">Name</label>
              <input
                type="text"
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-0.5">Mobile</label>
              <input
                type="number"
                required
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
              />
            </div>

            <div className="flex gap-4 max-sm:flex-col">
              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                  Travellers
                </label>
                <input
                  type="number"
                  required
                  name="numberOfTravellers"
                  value={formData.numberOfTravellers}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                  Month of Travel
                </label>
                <input
                  type="text"
                  required
                  name="monthOfTravel"
                  value={formData.monthOfTravel}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea
                rows={3}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-1/3 bg-[#1B4965] text-white py-2 rounded-md hover:bg-[#163a52] transition disabled:bg-gray-400"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* ✅ Info Box — WEB same, MOBILE repositioned */}
        <div
          className="
            bg-[#1B4965] z-10 text-white justify-center rounded-l-xl w-1/3 pl-10 flex flex-col gap-5 shadow-md
            md:absolute md:h-1/2 md:-right-30 md:top-1/2 md:-translate-y-1/2
            max-sm:static max-sm:w-full max-sm:rounded-xl max-sm:p-6
          "
        >
          <h3 className="text-2xl font-semibold mb-2">Info</h3>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-white text-2xl" />
            <p className="text-sm wrap-break-word">asiagotravels@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-white text-2xl" />
            <p className="text-sm">+91-9119119641</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-white text-2xl" />
            <p className="text-sm">
         Jawahar Nagar, Jaipur 302004, Rajasthan India.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <FaClock className="text-white text-2xl" />
            <p className="text-sm">
      10.00 AM to 07.00 PM
            </p>
          </div>
        </div>

        {/* ✅ Hide this blue shape on mobile */}
        <div className="bg-[#3FA9F5] w-70 h-full absolute -right-40 top-0 rounded-l-xl max-sm:hidden" />
      </div>
    </section>
  );
};

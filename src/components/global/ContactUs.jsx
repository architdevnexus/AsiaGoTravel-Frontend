"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

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
      const res = await fetch("http://194.238.18.1:3005/api/submitQuery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          mobileNumber: Number(formData.mobileNumber),
          numberOfTravellers: Number(formData.numberOfTravellers),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Query Submitted Successfully!");
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
    <section className="bg-[#f8fafc] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12 relative flex flex-col md:flex-row justify-between gap-8">
        
        {/* Contact Form */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1B4965] mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Please don’t hesitate to reach out to us whenever you need assistance.
            We will make sure to respond to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Mobile</label>
              <input
                type="number"
                required
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                  Travellers
                </label>
                <input
                  type="number"
                  required
                  name="numberOfTravellers"
                  value={formData.numberOfTravellers}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                  Month of Travel
                </label>
                <input
                  type="text"
                  required
                  name="monthOfTravel"
                  value={formData.monthOfTravel}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1B4965]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
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

        {/* Info Box */}
        <div className="bg-[#1B4965] z-10 text-white justify-center rounded-l-xl md:absolute h-1/2 -right-30 md:top-1/2 md:-translate-y-1/2 w-1/3 pl-10 flex flex-col gap-5 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Info</h3>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-white text-2xl" />
            <p className="text-sm wrap-break-word">help@aisagotravel.in</p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-white text-2xl" />
            <p className="text-sm">+91 9711034055</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-white text-2xl" />
            <p className="text-sm">
              26/B, Tower B-2, Spaze Itech Park
            </p>
          </div>
        </div>

        <div className="bg-[#3FA9F5] w-70 h-full absolute -right-40 top-0 rounded-l-xl" />
      </div>
    </section>
  );
};

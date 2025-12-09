"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { DatePickerDemo } from "../ui/DatePickerDemo";

export const ContactSection = () => {
  const [packagesList, setPackagesList] = useState([]);
  const [loadingPackages, setLoadingPackages] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    numberOfTravellers: "",
    package: "",
    monthOfTravel: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ⭐ Fetch all packages → FLATTEN → Dropdown
  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoadingPackages(true);

      const res = await fetch("https://www.backend.ghardekhoapna.com/api/allPackage");
      const data = await res.json();

      const rawArr = data?.data || data;
      const flattened = rawArr?.flatMap((item) => item?.Packages || []);

      setPackagesList(flattened || []);
    } catch (err) {
      console.error("Error fetching packages", err);
    } finally {
      setLoadingPackages(false);
    }
  };

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
      const res = await fetch(
        "https://www.backend.ghardekhoapna.com/api/contact-us",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            message: formData.message,
            mobile: formData.mobileNumber,
            travellers: formData.numberOfTravellers,
            package: formData.package,
            travelMonth: formData.monthOfTravel,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Form Submitted Successfully!");
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          numberOfTravellers: "",
          monthOfTravel: "",
          package: "",
          message: "",
        });
      } else {
        alert(data?.message || "Something went wrong");
      }
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f8fafc] py-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-4 md:p-10 relative flex flex-col md:flex-row justify-between gap-8">

        {/* FORM */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1B4965] mb-1.5">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Please don’t hesitate to reach out to us whenever you need assistance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-0.5">Name</label>
              <input
                type="text"
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm text-gray-700 mb-0.5">Mobile</label>
              <input
                type="number"
                required
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5"
              />
            </div>

            {/* Travellers + Package */}
            <div className="flex gap-4 max-sm:flex-col">

              {/* Travellers */}
              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                 No of Travellers
                </label>
                <input
                  type="number"
                  required
                  name="numberOfTravellers"
                  value={formData.numberOfTravellers}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5"
                />
              </div>

              {/* Package Dropdown */}
              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                  Package
                </label>
                <select
                  name="package"
                  required
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5"
                >
                  <option value="">Select Package</option>

                  {loadingPackages ? (
                    <option>Loading...</option>
                  ) : (
                    packagesList?.map((pkg) => (
                      <option value={pkg?.title} key={pkg?._id}>
                        {pkg?.title}
                      </option>
                    ))
                  )}
                </select>
              </div>

            </div>

            {/* Month */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Date of Travel
              </label>

              <DatePickerDemo
                onChange={(d) =>
                  setFormData({
                    ...formData,
                    monthOfTravel: d.toString(),
                  })
                }
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea
                rows={3}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-1/3 bg-[#1B4965] text-white py-2 rounded-md hover:bg-[#163a52]"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* INFO BOX + BLUE BG SHAPE */}
        <div className="relative w-full md:w-1/3 flex items-center">

          {/* BLUE SHAPE — stays only behind info box */}
          <div className="bg-[#3FA9F5] w-60 h-full absolute -right-26 top-0 rounded-l-xl max-sm:hidden" />

          {/* INFO BOX */}
          <div className="bg-[#1B4965] text-white rounded-l-xl relative z-10 w-full pl-10 py-8 flex flex-col gap-5 shadow-md
              max-sm:rounded-xl max-sm:p-6">

            <h3 className="text-2xl font-semibold mb-2">Info</h3>

            <Link href="mailto:asiagotravels@gmail.com" className="flex items-center gap-3">
              <FaEnvelope className="text-white text-2xl" />
              <p className="text-sm">asiagotravels@gmail.com</p>
            </Link>

            <Link href="tel:+919119119641" className="flex items-center gap-3">
              <FaPhoneAlt className="text-white text-2xl" />
              <p className="text-sm">+91-9119119641</p>
            </Link>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white text-2xl" />
              <p className="text-sm">Jawahar Nagar, Jaipur 302004, Rajasthan</p>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-white text-2xl" />
              <p className="text-sm">10.00 AM to 07.00 PM</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

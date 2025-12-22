"use client";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { DatePickerDemo } from "../ui/DatePickerDemo";

// 🔎 Searchable selector
import Select from "react-select";

// Country/State library
import { Country, State } from "country-state-city";

export const ContactSection = () => {
  const [packagesList, setPackagesList] = useState([]);
  const [loadingPackages, setLoadingPackages] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    numberOfTravellers: "",
    package: null,          // now selected option
    destinationType: "",
    destination: null,      // now selected option
    monthOfTravel: "",
    travelDays: "",
    travelNights: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoadingPackages(true);
      const res = await fetch("https://backend.asiagotravels.com/api/allPackage");
      const data = await res.json();
      const rawArr = data?.data || data;
      const flattened = rawArr?.flatMap((item) => item?.Packages || []);
      setPackagesList(flattened || []);
    } catch (err) {
      console.error(err);
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

  // 👉 Prepare searchable options
  const packageOptions = useMemo(
    () =>
      packagesList.map((pkg) => ({
        label: pkg.title,
        value: pkg.title,
      })),
    [packagesList]
  );

  const countryOptions = useMemo(
    () =>
      Country.getAllCountries().map((c) => ({
        label: c.name,
        value: c.name,
      })),
    []
  );

  const stateOptions = useMemo(
    () =>
      State.getStatesOfCountry("IN").map((s) => ({
        label: s.name,
        value: s.name,
      })),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const travelDuration = `${formData.travelDays} Days / ${formData.travelNights} Nights`;

    try {
      const res = await fetch("https://backend.asiagotravels.com/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
          mobile: formData.mobileNumber,
          travellers: formData.numberOfTravellers,
          package: formData.package?.value,
          destinationType: formData.destinationType,
          destination: formData.destination?.value,
          travelMonth: formData.monthOfTravel,
          travelDuration,
        }),
      });

      if (res.ok) {
        alert("Form Submitted Successfully!");
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          numberOfTravellers: "",
          package: null,
          destinationType: "",
          destination: null,
          monthOfTravel: "",
          message: "",
        });
      } else {
        alert("Error submitting form");
      }
    } catch {
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f8fafc] py-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-4 md:p-10 flex flex-col md:flex-row gap-8">
        {/* FORM */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1B4965] mb-1.5">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Mobile</label>
              <input
                type="number"
                required
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5"
              />
            </div>

            {/* Travellers + Package (searchable) */}
            <div className="flex gap-4 max-sm:flex-col">
              <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                  No of Travellers
                </label>
                <input
                  type="number"
                  required
                  value={formData.numberOfTravellers}
                  onChange={(e) => setFormData({ ...formData, numberOfTravellers: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5"
                />
              </div>
    {/* Date */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Date of Travel
              </label>
              <DatePickerDemo
                onChange={(d) =>
                  setFormData({ ...formData, monthOfTravel: d.toString() })
                }
              />
            </div>
              {/* <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-700 mb-1">
                  Package
                </label>
                <Select
                  options={packageOptions}
                  value={formData.package}
                  onChange={(selected) => setFormData({ ...formData, package: selected })}
                  className="w-full border border-gray-300 rounded-md"
                />
              </div> */}
            </div>

            {/* Destination Type */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Destination Type
              </label>
              <select
                required
                value={formData.destinationType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    destinationType: e.target.value,
                    destination: null,
                  })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-1.5"
              >
                <option value="">Select</option>
                <option value="Domestic">Domestic</option>
                <option value="International">International</option>
              </select>
            </div>

            {/* Destination (searchable country/state) */}
            {formData.destinationType && (
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Destination
                </label>
                <Select
                  options={
                    formData.destinationType === "Domestic"
                      ? stateOptions
                      : countryOptions
                  }
                  value={formData.destination}
                  onChange={(selected) =>
                    setFormData({ ...formData, destination: selected })
                  }
                  className="w-full border border-gray-300 rounded-md"
                />
              </div>
            )}


            {/* ⭐ Travel Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Days */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  No of Days
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="Days"
                  required
                  name="travelDays"
                  value={formData.travelDays}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>

              {/* Nights */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  No of Nights
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="Nights"
                  required
                  name="travelNights"
                  value={formData.travelNights}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>


        

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

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

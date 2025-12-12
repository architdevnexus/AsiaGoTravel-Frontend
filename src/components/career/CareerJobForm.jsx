"use client";
import React, { useState } from "react";

export const JoinOurTeamForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Position: "",
    Message: "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle Text Inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle File Input
  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      alert("Please upload your CV file!");
      return;
    }

    setLoading(true);

    try {
      const form = new FormData();
      form.append("Name", formData.Name);
      form.append("Email", formData.Email);
      form.append("Position", formData.Position);
      form.append("Message", formData.Message);
      form.append("cvFile", cvFile);

      const res = await fetch("https://backend.ghardekhoapna.com/api/jointeam", {
        method: "POST",
        body: form,
        credentials: "include", // sends cookies automatically
        // headers: { Cookie: "refreshToken=xxx" }  // ONLY if needed
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        alert(data.message || "Failed to submit");
        setLoading(false);
        return;
      }

      alert("Application submitted successfully!");

      // Reset form
      setFormData({
        Name: "",
        Email: "",
        Position: "",
        Message: "",
      });
      setCvFile(null);
      setLoading(false);

    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting.");
      setLoading(false);
    }
  };

  return (
    <div className="w-[340px] h-fit bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 my-20">
      
      {/* Header */}
      <div className="bg-[#0B3C59] text-white text-center py-4 text-lg font-semibold">
        Join Our Team
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-2">
        
        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            name="Name"
            type="text"
            value={formData.Name}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            name="Email"
            type="email"
            value={formData.Email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Position */}
        <div>
          <label className="text-sm text-gray-600">Position</label>
          <input
            name="Position"
            type="text"
            value={formData.Position}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Position you are applying for"
          />
        </div>

        {/* Upload CV */}
        <div>
          <label className="text-sm text-gray-600">Upload CV (PDF)</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 w-full px-3 py-[10px] bg-white rounded-xl border border-gray-300 cursor-pointer"
            accept=".pdf"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-gray-600">Message</label>
          <textarea
            name="Message"
            rows="3"
            value={formData.Message}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0B3C59] text-white py-3 rounded-xl font-medium hover:bg-[#093348] transition"
        >
          {loading ? "Submitting..." : "Send Application"}
        </button>
      </form>
    </div>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import { CareerJobCard } from "./CareerJobCard";
import { JoinOurTeamForm } from "./CareerJobForm";
import { OurBenefitsSection } from "./OurBenefitsSection";
import { JobDetailModal } from "./JobDetailModal";

const CareerJobComponent = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedJob, setSelectedJob] = useState(null); // ⭐ added

  const fetchJobs = async () => {
    try {
      const res = await fetch("https://backend.asiagotravels.com/api/jobs/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to fetch jobs");

      const data = await res.json();
      setJobs(data?.jobs);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load job openings.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-[#F7FAFC]">
      <div className="flex flex-col justify-between items-center text-center pt-20">
        <h2 className="text-[#3FA9F5] text-4xl font-bold mb-3">
          Join Our <span className="text-[#1B4965]">Team</span>
        </h2>
        <p className="text-[#656565] text-md">
          Where ambitious minds come together to build something great.
        </p>
      </div>

      <div className="flex justify-center items-start gap-10 mt-10 px-4">

        {/* JOB LIST */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-9 w-full max-w-3xl mt-6">
          {loading && <p className="text-center text-gray-600">Loading jobs...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error &&
            jobs?.map((job, index) => (
              <CareerJobCard
                key={index}
                job={job}
                onOpen={() => setSelectedJob(job)} // ⭐ added
              />
            ))}
        </section>

        {/* STICKY FORM */}
        <div className="hidden lg:block sticky top-6">
          <JoinOurTeamForm />
        </div>
      </div>

      <OurBenefitsSection />

      {/* ⭐ MODAL ADDED — does not affect design */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
};

export default CareerJobComponent;

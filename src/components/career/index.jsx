import React from 'react'
import { CareerJobCard } from './CareerJobCard'
import { JoinOurTeamForm } from './CareerJobForm';
import { OurBenefitsSection } from './OurBenefitsSection';

const CareerJobComponent = () => {
  const jobs = [
    {
      type: "Remote / Full Time",
      title: "Senior React Developer",
      description: "Build complex UI systems using React and Next.js.",
    },
    {
      type: "Full Time",
      title: "UI/UX Designer",
      description: "Design engaging and user-friendly products.",
    },
    {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
        {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
        {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
        {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
        {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
        {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
        {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
        {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
        {
      type: "Internship",
      title: "Digital Marketing Intern",
      description: "Assist in campaigns and learn analytics tools.",
    },
  ];

  return (
    <div className='bg-[#F7FAFC]'>
      <div className='flex flex-col justify-between items-center text-center mt-20'>
        <h2 className='text-[#3FA9F5] text-4xl font-bold mb-3'>
          Join Our <span className='text-[#1B4965]'>Team</span>
        </h2>
        <p className='text-[#656565] text-md'>
          Where ambitious minds come together to build something great.
        </p>
      </div>

      <div className="flex justify-center items-start gap-10 mt-10 px-4">

        {/* JOB CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-9 w-full max-w-3xl mt-6">
          {jobs.map((job, index) => (
            <CareerJobCard key={index} job={job} />
          ))}
        </section>

        {/* STICKY FORM */}
        <div className="hidden lg:block sticky top-6">
          <JoinOurTeamForm />
        </div>

      </div>
      <OurBenefitsSection />
    </div>
  );
};

export default CareerJobComponent;

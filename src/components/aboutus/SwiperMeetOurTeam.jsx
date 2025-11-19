"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mr. Vansh Kaushik",
      role: "Chief Executing Officer (CEO)",
      img: "/img/man1.png",
    },
    {
      name: "Ms. Riya Sharma",
      role: "Marketing Head",
      img: "/img/man1.png",
    },
    {
      name: "Mr. Aditya Singh",
      role: "Lead Developer",
      img: "/img/man3.png",
    },
    {
      name: "Ms. Ananya Verma",
      role: "Operations Manager",
      img: "/img/man1.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const getMember = (offset) =>
    teamMembers[(index + offset + teamMembers.length) % teamMembers.length];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
  };

  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
  };
  const handleMouseUp = (e) => {
    touchEndX.current = e.clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
  };

  return (
    <section className="bg-[#F9FCFF] py-10 px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
      
      {/* ✅ Left Section */}
      <div className="flex flex-col items-start max-sm:items-center space-y-6 pt-10 max-w-sm">
        <h2 className="text-4xl font-bold text-black leading-12 font-[Nunito Sans] max-sm:text-center">
          Meet Our <br /> Talented Team
        </h2>

        <div className="flex items-center gap-2 mt-4">
          <button onClick={handlePrev}>
            <IoIosArrowRoundBack className="w-10 h-10" />
          </button>

          <div className="w-10 bg-black h-1" />
          <div className="w-16 bg-[#F0F0F0] h-1" />

          <button onClick={handleNext}>
            <IoIosArrowRoundForward className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* ✅ Team Cards Section */}
      <div
        className="
          flex gap-6 justify-center items-center select-none relative overflow-hidden
          max-sm:flex-col max-sm:gap-0
        "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* ✅ Center card — always visible */}
        <div className="relative w-72 h-[380px] flex justify-center items-center max-sm:w-64 max-sm:h-[340px]">
          <AnimatePresence custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? 150 : -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -150 : 150, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="
                bg-black text-white rounded-lg w-72 h-[380px] 
                flex flex-col items-center justify-end relative shadow-lg cursor-grab active:cursor-grabbing
                max-sm:w-64 max-sm:h-[340px]
              "
            >
              <div className="absolute top-6">
                <Image
                  src={getMember(0).img}
                  alt={getMember(0).name}
                  width={220}
                  height={220}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="bg-white text-black w-[85%] rounded-b-md p-3 mb-5 shadow text-center">
                <p className="font-semibold text-[15px]">{getMember(0).name}</p>
                <p className="text-sm text-gray-500">{getMember(0).role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ✅ Side cards — HIDE on mobile */}
        <motion.div
          key={`side1-${index}`}
          initial={{ x: direction > 0 ? 80 : -80, opacity: 0.3, scale: 0.95 }}
          animate={{ x: 0, opacity: 0.7, scale: 1 }}
          exit={{ x: direction > 0 ? -80 : 80, opacity: 0.3, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-[#EBEBEB] rounded-lg w-55 h-[340px] flex flex-col items-center justify-center max-sm:hidden"
        >
          <Image
            src={getMember(1).img}
            alt={getMember(1).name}
            width={180}
            height={180}
            className="rounded-md object-cover"
          />
        </motion.div>

        <motion.div
          key={`side2-${index}`}
          initial={{ x: direction > 0 ? 80 : -80, opacity: 0.3, scale: 0.95 }}
          animate={{ x: 0, opacity: 0.7, scale: 1 }}
          exit={{ x: direction > 0 ? -80 : 80, opacity: 0.3, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-[#EBEBEB] rounded-xl w-55 h-[340px] flex flex-col items-center justify-center max-sm:hidden"
        >
          <Image
            src={getMember(2).img}
            alt={getMember(2).name}
            width={180}
            height={180}
            className="rounded-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

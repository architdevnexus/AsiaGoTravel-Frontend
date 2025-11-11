"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CgProfile } from "react-icons/cg";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Software Engineer",
    text: "Framer Motion makes creating animations so simple and powerful. I love how natural it feels to use!",
    image: "/img/user1.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Product Designer",
    text: "Using motion in React components has never been easier. This card stack interaction is amazing!",
    image: "/img/user2.jpg",
  },
  {
    id: 3,
    name: "Karan Mehta",
    role: "Frontend Developer",
    text: "Such a fun and interactive way to showcase testimonials. Smooth animations and great usability.",
    image: "/img/user3.jpg",
  },
];

export const TestimonialCardStack = () => {
  const [stack, setStack] = useState(TESTIMONIALS);
  const containerRef = useRef(null);
  const THROW_DISTANCE = 120;

  function handleThrow(index, x, velocityX, controls) {
    const shouldThrow = Math.abs(x) > THROW_DISTANCE || Math.abs(velocityX) > 1000;
    if (!shouldThrow) {
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: { type: "spring", stiffness: 400, damping: 30 },
      });
      return;
    }

    const direction = x > 0 ? 1 : -1;
    const offX = direction * (window.innerWidth + 400);

    controls.start({
      x: offX,
      rotate: direction * 40,
      transition: { duration: 0.4 },
    }).then(() => {
      setStack((prev) => {
        const next = [...prev];
        const removed = next.splice(index, 1)[0];
        next.push(removed);
        return next;
      });
    });
  }

  return (
    <div ref={containerRef} className="w-full min-h-[50vh] flex items-center justify-center p-8">
      <div className="relative w-[320px] h-[320px]">
        {stack.map((item, i) => {
          const zIndex = stack.length - i;
          return (
            <StackCard
              key={item.id}
              index={i}
              zIndex={zIndex}
              onThrow={handleThrow}
              testimonial={item}
            />
          );
        })}
      </div>
    </div>
  );
};

const StackCard = ({ testimonial, index, zIndex, onThrow }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-400, 400], [-15, 15]);

  // Increase the visible offset for cards underneath
  const offsetX = index * -14; // move slightly left
  const offsetY = index * 92; // move slightly down

  return (
    <motion.div
      style={{ x, y, rotate, zIndex }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
      onDragEnd={(event, info) => {
        const velocityX = info.velocity.x;
        const finalX =
          info.point.x -
          (event.target?.getBoundingClientRect?.()?.left ?? 0) -
          (event.target?.offsetWidth ?? 0) / 2;
        onThrow(index, finalX, velocityX, { start: () => Promise.resolve() });
      }}
      className="absolute left-0 top-6 w-full h-62 rounded-xl shadow-2xl bg-white overflow-hidden select-none"
      whileTap={{ scale: 0.98 }}    
      initial={{
         x: offsetX,
        y: offsetY,
        scale: 1 - index * 0.06,
        y: index * 8,
        opacity: 1 - index * 0.07,
      }}
      animate={{
         x: offsetX,
        y: offsetY,
        scale: 1 - index * 0.03,
        y: index * 8,
        opacity: 1 - index * 0.03,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className=" flex flex-col p-5">
        <div className="">
          {testimonial.image ? (
             <CgProfile size={30} className="mb-4" />
          ) : (
            <CgProfile size={40} className="mb-2" />
          )}
          <p className="text-sm text-gray-600 italic leading-relaxed mb-6">
            “<br/>{testimonial.text}”
          </p>
                 <div className="pt-3 border-t ">
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

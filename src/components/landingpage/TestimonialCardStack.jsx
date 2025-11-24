"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CgProfile } from "react-icons/cg";

export const TestimonialCardStack = () => {
  const [stack, setStack] = useState([]);  
  const containerRef = useRef(null);
  const THROW_DISTANCE = 120;

  // ⭐ Fetch Testimonials from API
  const fetchTestimonials = async () => {
    try {
      const res = await fetch("https://www.backend.ghardekhoapna.com/api/allTestimonials");

      if (!res.ok) {
        console.error("Failed to fetch testimonials");
        return;
      }

      const data = await res.json();
      console.log("Fetched:", data);

      setStack(data?.data || []); // API returns inside data.data
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  // Load testimonials when component mounts
  useEffect(() => {
    fetchTestimonials();
  }, []);

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

      {/* Loader */}
      {stack.length === 0 && (
        <p className="text-gray-500">Loading testimonials...</p>
      )}

      <div className="relative w-[320px] h-[320px]">
        {stack.map((item, i) => {
          const zIndex = stack.length - i;
          return (
            <StackCard
              key={item._id || item.id}
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

  const offsetX = index * -14;
  const offsetY = index * 42;

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
        y: index * 8,
        scale: 1 - index * 0.06,
        opacity: 1 - index * 0.07,
      }}
      animate={{
        x: offsetX,
        y: index * 8,
        scale: 1 - index * 0.03,
        opacity: 1 - index * 0.03,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex flex-col p-5">
        <div>
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt="user"
              className="w-10 h-10 rounded-full mb-4 object-cover"
            />
          ) : (
            <CgProfile size={30} className="mb-4" />
          )}

         <p className="text-sm text-gray-600 italic leading-relaxed mb-6 line-clamp-4">
  “<br />{testimonial.message}”
</p>


          <div className="pt-3 border-t">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

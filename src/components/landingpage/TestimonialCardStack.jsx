"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// ⭐ Rating Stars Component
const RatingStars = ({ rating = 0 }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return <div className="flex items-center gap-1 mt-1">{stars}</div>;
};

export const TestimonialCardStack = () => {
  const [stack, setStack] = useState([]);
  const containerRef = useRef(null);
  const THROW_DISTANCE = 120;

  const LoaderSpinner = () => (
    <div className="flex justify-center items-center h-40">
      <div className="w-12 h-12 border-4 border-[#1B4965] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  // ⭐ Fetch Testimonials
  const fetchTestimonials = async () => {
    try {
      const res = await fetch(
        "https://backend.asiagotravels.com/api/allTestimonials"
      );
      const data = await res.json();
      setStack(data?.data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const forceThrow = (direction) => {
    if (stack.length === 0) return;

    setStack((prev) => {
      const next = [...prev];
      const removed = direction === "next" ? next.shift() : next.pop();

      if (direction === "next") next.push(removed);
      else next.unshift(removed);

      return next;
    });
  };

  useEffect(() => {
    const prev = () => forceThrow("prev");
    const next = () => forceThrow("next");

    window.addEventListener("testimonial-prev", prev);
    window.addEventListener("testimonial-next", next);

    return () => {
      window.removeEventListener("testimonial-prev", prev);
      window.removeEventListener("testimonial-next", next);
    };
  }, [stack]);

  function handleThrow(index, x, velocityX, controls) {
    const shouldThrow =
      Math.abs(x) > THROW_DISTANCE || Math.abs(velocityX) > 1000;

    if (!shouldThrow) {
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: { type: "spring", stiffness: 400, damping: 30 },
      });
      return;
    }

    const direction = x > 0 ? "next" : "prev";
    forceThrow(direction);
  }

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[50vh] flex items-center justify-center p-8"
    >
      {stack.length === 0 && <LoaderSpinner />}

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
              total={stack.length}
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

          <p className="text-sm text-gray-600 italic leading-relaxed mb-6 line-clamp-3">
            “{testimonial?.message}”
          </p>

          <div className="pt-3 border-t">
            <h3 className="text-lg font-semibold">{testimonial?.name}</h3>
            <p className="text-sm text-gray-500">{testimonial?.role}</p>

            {/* ⭐ SHOW RATING IF AVAILABLE */}
            {testimonial?.rating && (
              <RatingStars rating={testimonial?.rating} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const WhoWeAre = () => {
  return (
    <section>
      <h2 className="flex justify-center items-center text-center text-2xl font-bold">
        Who We Are?
      </h2>

      <div className="flex justify-center items-center">

        <div
          className="
            flex items-center gap-10 absolute
            max-sm:static max-sm:flex-col max-sm:gap-6 max-sm:z-10
          "
        >

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              opacity: { duration: 0.7 }
            }}
            className="
              bg-[#1B4965] rounded-xl text-white flex-col justify-center items-center text-center p-4 w-60 h-75 shadow-[0_0_15px_4px_rgb(172,183,191)]
              max-sm:w-72 max-sm:h-auto
            "
          >
            <span className="text-2xl">
              Professional <br /> & <br /> Trustworthy
            </span>
            <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10">
              Our team of travel experts works tirelessly to curate handpicked destinations, exclusive deals, and personalized itineraries.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              opacity: { duration: 0.7, delay: 0.2 }
            }}
            className="
              bg-[#0D1B2A] rounded-xl text-white flex-col justify-center items-center text-center p-7 w-70 h-80 shadow-[0_0_15px_4px_rgb(172,183,191)]
              max-sm:w-72 max-sm:h-auto
            "
          >
            <span className="text-2xl">
              Friendly  <br /> & <br /> Modern
            </span>
            <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10">
              With transparent pricing, 24/7 support, and curated experiences, we turn your travel dreams into unforgettable stories.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              opacity: { duration: 0.7, delay: 0.4 }
            }}
            className="
              bg-[#1B4965] rounded-xl text-white flex-col justify-center items-center text-center p-4 w-60 h-75 shadow-[0_0_15px_4px_rgb(172,183,191)]
              max-sm:w-72 max-sm:h-auto
            "
          >
            <span className="text-2xl">
              Premium <br /> & <br /> Elegant
            </span>
            <p className="text-[#EAEAEA] text-[12px] leading-6 pt-10">
              With a focus on luxury, comfort, and personalization, we curate premium travel experiences across the world’s most stunning destinations.
            </p>
          </motion.div>

        </div>

        <Image
          src="/img/background.jpg"
          width={200}
          height={100}
          alt="background"
          className="object-cover w-full h-full max-sm:hidden"
        />
      </div>
    </section>
  );
};

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

export const BlogsCard = ({
  grid = "grid-cols-1 md:grid-cols-3",
  blogs = [],
}) => {
  return (
    <div>
      <div className={`grid gap-8 ${grid}`}>
        {blogs.length > 0 ? (
          blogs.map((pkg, index) => (
            <div
              key={pkg?._id || index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={pkg?.featureImage}
                  alt={pkg?.location || "Blog Image"}
                  width={400}
                  height={200}
                  className="w-full h-56 object-cover p-3 rounded-4xl"
                />

                <div className="absolute top-5 left-4 text-white text-lg px-3 py-1 rounded-full flex items-center gap-1">
                  <IoLocationOutline className="text-[20px]" />
                  {pkg?.location}
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1">
                <div className="bg-[#3FA9F5] w-2"></div>

                <div className="px-5 py-3 space-y-4 flex-1">
                  <h3 className="text-2xl font-semibold line-clamp-2">{pkg?.title}</h3>

                  <div
                    className="text-gray-500 text-sm line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: pkg?.blogContent }}
                  />
                </div>
              </div>

              {/* LEARN MORE — FIXED AT BOTTOM */}
              <div className="px-5 pb-5 mt-auto">
                <Link href={`/all-blogs/${pkg?._id}`}>
                  <span className="inline-flex items-center gap-6 bg-[#1B4965] text-white px-4 py-1.5 rounded-full hover:bg-[#357ca8] transition">
                    Learn More
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
                      <FaArrowRightLong />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No Blogs found.
          </p>
        )}
      </div>
    </div>
  );
};

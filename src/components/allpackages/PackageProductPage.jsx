"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import ImagePreviewModal from "./ImagePreviewModal";
import { GallerySkeleton } from "./GallerySkeleton";


export const PackageProductPage = ({ images = [], title = "" }) => {
  const scrollRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gray-50 p-5 rounded-lg relative">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>

        <div className="relative">
          {/* LEFT ARROW — hidden on mobile */}
          <div
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 
            items-center justify-center w-10 h-[325px] 
            bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100 transition"
          >
            <FaChevronLeft className="text-gray-600 text-lg" />
          </div>

          {/* SCROLLABLE IMAGE AREA */}
          <div
            ref={scrollRef}
            className="flex gap-3 px-0 md:px-12 overflow-x-auto md:overflow-visible"
          >
            {/* Left Large Image */}
            {images.length === 0 ? (
              <GallerySkeleton />
            ) : (
              // images[0]?.url && (
              <div
                onClick={() => setPreviewImage(images[0].url)}
                className="
                  relative rounded-lg overflow-hidden shrink-0 cursor-pointer
                  w-[260px] h-[200px]
                  md:w-[320px] md:h-[260px]
                  lg:w-[400px] lg:h-[325px]
                "
              >
                <Image src={images[0].url} alt="" fill className="object-cover" />
              </div>
            )}

            {/* Middle stacked images */}
            <div className="hidden md:flex flex-col gap-2 shrink-0">
              {[1, 2].map(
                (i) =>
                  images[i]?.url && (
                    <div
                      key={i}
                      onClick={() => setPreviewImage(images[i].url)}
                      className="
                        relative rounded-lg overflow-hidden cursor-pointer
                        w-[240px] h-[120px]
                        lg:w-[300px] lg:h-40
                      "
                    >
                      <Image
                        src={images[i].url}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
              )}
            </div>

            {/* Right Large Image */}
            {images[3]?.url && (
              <div
                onClick={() => setPreviewImage(images[3].url)}
                className="
                  relative rounded-lg overflow-hidden shrink-0 cursor-pointer
                  w-[260px] h-[200px]
                  md:w-[320px] md:h-[260px]
                  lg:w-[400px] lg:h-[325px]
                "
              >
                <Image src={images[3].url} alt="" fill className="object-cover" />
              </div>
            )}
          </div>

          {/* RIGHT ARROW — hidden on mobile */}
          <div
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 
            items-center justify-center w-10 h-[325px] 
            bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100 transition"
          >
            <FaChevronRight className="text-gray-600 text-lg" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImagePreviewModal
        images={images}
        image={previewImage}
        onClose={() => setPreviewImage(null)}
      />
    </>
  );
};

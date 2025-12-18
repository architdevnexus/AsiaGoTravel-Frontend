"use client";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const ImagePreviewModal = ({ images = [], image, onClose }) => {
  const [activeImage, setActiveImage] = useState(image);

  // Sync when opening modal
  useEffect(() => {
    setActiveImage(image);
  }, [image]);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!image) return null;

  return (
  <div
  onClick={onClose}
  className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md 
             flex items-center justify-center px-4 pt-10"
>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl h-[85vh] flex flex-col"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl"
        >
          <IoClose />
        </button>

        {/* Main Image */}
        <div className="relative flex-1 rounded-lg overflow-hidden">
          <Image
            src={activeImage}
            alt="Image Preview"
            fill
            className="object-contain"
          />
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img.url)}
              className={`relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer shrink-0
                ${
                  activeImage === img.url
                    ? "ring-2 ring-white"
                    : "opacity-70 hover:opacity-100"
                }`}
            >
              <Image
                src={img.url}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;

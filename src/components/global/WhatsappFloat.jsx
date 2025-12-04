"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  return (
    <Link
      href="https://wa.me/919119119641"
      target="_blank"
      className="fixed right-0 top-1/2 -translate-y-1/2 bg-white border border-green-600 text-green-600 
                 px-3 py-6 rounded-l-2xl shadow-lg flex flex-col items-center justify-between``
                 hover:bg-green-600 hover:text-white transition-all z-50 cursor-pointer"
    >
      <FaWhatsapp className="text-2xl mb-1" />
      <span
        className="font-medium text-sm"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Whatsapp
      </span>
    </Link>
  );
}

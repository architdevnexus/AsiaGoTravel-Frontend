import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa";

export const Footer = () => {
  const destinations = [
    { src: "/img/aboutimg1.jpg", name: "Bangalore" },
    { src: "/img/aboutimg2.jpg", name: "Kashmir" },
    { src: "/img/aboutimg3.jpg", name: "GOA" },
    { src: "/img/aboutimg1.jpg", name: "Kashmir" },
    { src: "/img/aboutimg2.jpg", name: "GOA" },
    { src: "/img/aboutimg3.jpg", name: "Kashmir" },
    { src: "/img/aboutimg3.jpg", name: "GOA" },
    { src: "/img/aboutimg2.jpg", name: "Kashmir" },
    { src: "/img/aboutimg1.jpg", name: "Bangalore" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div
        className="
        max-w-7xl mx-auto 
        px-6 sm:px-8 md:px-16 
        py-10 
        grid grid-cols-1 
        md:grid-cols-3 lg:grid-cols-4 
        gap-8
        "
      >
        {/* Contact Details */}
        <div className="text-left">
          <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
          <p className="text-sm text-gray-600 mb-6">
            If you have any questions or need help feel free to contact our
            team!
          </p>

          <Link
            href="tel:+919119119641"
            className="flex items-center gap-2 text-gray-700 text-sm mb-4 cursor-pointer 
             transition transform  hover:text-[#0E3A55]"
          >
            <FaPhoneAlt className="text-gray-500 transition hover:text-[#0E3A55]" />
            +91-9119119641
          </Link>

          <Link
            href="mailto:asiagotravels@gmail.com"
            className="flex items-center gap-2 text-gray-700 text-sm mb-4 cursor-pointer 
             transition transform hover:scale-105 hover:text-[#0E3A55]"
          >
            <FaEnvelope className="text-gray-500 transition hover:text-[#0E3A55]" />
            asiagotravels@gmail.com
          </Link>

          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaMapMarkerAlt className="text-gray-500" /> Jawahar Nagar, Jaipur
            302004, Rajasthan India.
          </div>
        </div>

        <div className="space-y-8 px-0 md:px-20 text-left">
          <h3 className="font-semibold text-lg mb-3">Links</h3>

          <ul className="space-y-2 text-sm text-gray-700">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/aboutus" },
              { name: "Packages", href: "/all-packages" },
              { name: "Blogs", href: "/all-blogs" },
              { name: "Contact", href: "/contactus" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="
            hover:text-blue-600 
            transition 
            duration-200 
            cursor-pointer
            inline-block
          "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-left">
          <h3 className="font-semibold text-lg mb-3">Follow us on</h3>
          <div className="flex items-center gap-3">
            <FaInstagram className="text-pink-500 text-xl cursor-pointer hover:scale-110 transition" />
            <FaYoutube className="text-red-600 text-xl cursor-pointer hover:scale-110 transition" />
            <FaLinkedin className="text-blue-600 text-xl cursor-pointer hover:scale-110 transition" />
            <FaTelegram className="text-sky-500 text-xl cursor-pointer hover:scale-110 transition" />
          </div>

          <ul className="text-sm text-gray-700 space-y-4 mt-6">
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Cancellation Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {destinations.map((dest, index) => (
            <div key={index} className="relative group">
              <Image
                src={dest.src}
                alt={dest.name}
                width={150}
                height={100}
                className="w-full h-20 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 rounded-md flex items-center justify-center">
                <p className="text-white text-xs font-medium">{dest.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#1B4965] text-white text-left text-xs sm:text-sm py-3 px-6">
        ©2025 Asia Go Travels Pvt. Ltd. | All Rights Reserved
      </div>
    </footer>
  );
};

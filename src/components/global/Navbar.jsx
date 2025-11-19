"use client";
import { useState } from "react";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      name: "Honeymoon Trips",
      href: "/honeymoon-trips",
      // options: [
      //   { name: "November", href: "/upcoming/himalayan-trek" },
      //   { name: "December", href: "/trips/upcoming/beach-getaway" },
      //   { name: "January", href: "/trips/upcoming/beach-getaway" },
      //   { name: "February", href: "/trips/upcoming/beach-getaway" },
      //   { name: "March", href: "/trips/upcoming/beach-getaway" },
      //   { name: "April", href: "/trips/upcoming/beach-getaway" },
      // ],
    },
    {
      name: "Family Holidays",
      href: "/family-holiday",
      // options: [
      //   { name: "Himachal", href: "/trips/domestic/rajasthan" },
      //   { name: "Kashmir", href: "/trips/domestic/kerala" },
      //   { name: "Kerala", href: "/trips/domestic/kerala" },
      //   { name: "Rajasthan", href: "/trips/domestic/kerala" },
      //   { name: "Uttarakhand", href: "/trips/domestic/kerala" },
      //   { name: "Haryana", href: "/trips/domestic/kerala" },
      //   { name: "Kerala ", href: "/trips/domestic/kerala" },
      // ],
    },
    {
      name: "Family Group Tours",
      href: "/family-group-tours",
      // options: [
      //   { name: "Rishikesh Adventure", href: "/trips/weekend/rishikesh" },
      //   { name: "Manali Escape", href: "/trips/weekend/manali" },
      // ],
    },
    {
      name: "Bachelor Tours",
      href: "/bachelor-tours",
      // options: [
      //   { name: "Europe Backpacking", href: "/trips/backpacking/europe" },
      //   { name: "South Asia Circuit", href: "/trips/backpacking/asia" },
      // ],
    },
    {
      name: "Luxury Tours",
      href: "/luxury-tours",
      // options: [
      //   { name: "Team Retreat", href: "/trips/corporate/team-retreat" },
      //   { name: "Leadership Camp", href: "/trips/corporate/leadership-camp" },
      // ],
    },
      {
      name: "Premium Holiday Packages",
      href: "/premium-holiday-packages",
      // options: [
      //   { name: "Team Retreat", href: "/trips/corporate/team-retreat" },
      //   { name: "Leadership Camp", href: "/trips/corporate/leadership-camp" },
      // ],
    },
          {
      name: "Personalized Tours",
      href: "/personalized-tours",
      // options: [
      //   { name: "Team Retreat", href: "/trips/corporate/team-retreat" },
      //   { name: "Leadership Camp", href: "/trips/corporate/leadership-camp" },
      // ],
    },
    
  ];

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Packages", href: "/all-packages" },
    { name: "Blogs", href: "/all-blogs" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <nav className="w-full bg-white text-white font-sans relative">
      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-[#0E3A55] h-18 pr-4 font-medium">

        {/* ✅ LEFT (unchanged) */}
        <div
          className="w-[560px] h-18 bg-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 99%, 0 100%)",
          }}
        >
          <Link href="/">
            <Image
              src="/img/asiagologo.svg"
              alt="Logo"
              width={200}
              height={13}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* ✅ DESKTOP MAIN LINKS  — unchanged */}
        <div className="hidden lg:flex items-center space-x-8">
          {mainLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:font-bold">
              {link.name}
            </Link>
          ))}

          <button className="flex items-center bg-[#F5F7FA] border border-gray-300 text-[#0E3A55] px-4 py-2 mx-3 rounded-xl ">
            <FaPhoneAlt className="mr-2" />
          +91-9119119641
          </button>
        </div>

        {/* ✅ MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ DESKTOP BOTTOM NAV — unchanged */}
      <div className="hidden lg:flex justify-center space-x-8 py-3 bg-[#1B4965] text-sm">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link href={item.href} className="flex items-center space-x-1">
              <span>{item.name}</span>
              {/* <FaChevronDown className="text-xs" /> */}
            </Link>

            {activeDropdown === index && item.options && (
              <div className="absolute left-0 mt-2 bg-white text-[#0E3A55] shadow-lg rounded-md w-48 py-2 z-50">
                {item.options.map((option, i) => (
                  <Link key={i} href={option.href} className="block px-4 py-2">
                    {option.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ✅ ✅ MOBILE MENU — added only */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B4965] text-white px-4 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-white/20 py-2">
              <button
                className="flex justify-between w-full"
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
              >
                {item.name}
                <FaChevronDown
                  className={`transition ${
                    activeDropdown === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === index && (
                <div className="pl-4 mt-2 space-y-1">
                  {item.options.map((option, i) => (
                    <Link key={i} href={option.href} className="block py-1">
                      {option.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 space-y-2">
            {mainLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block">
                {link.name}
              </Link>
            ))}

            <button className="flex items-center bg-[#F5F7FA] border border-gray-300 text-[#0E3A55] px-4 py-2 rounded-xl w-fit">
              <FaPhoneAlt className="mr-2" />
           +91-9119119641
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

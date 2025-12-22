"use client";
import { useState } from "react";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);


  const closeMobileMenu = () => {
  setMobileOpen(false);
  setActiveDropdown(null);
};


  const menuItems = [
 

    { name: "Honeymoon Trips", href: "/honeymoon-trips" },
    { name: "Family Holidays", href: "/family-holidays" },
    { name: "Family Group Tours", href: "/family-group-tours" },
    { name: "Bachelor Tours", href: "/bachelor-tours" },
    { name: "Luxury Tours", href: "/luxury-tours" },
    { name: "Premium Holidays", href: "/premium-holiday-packages" },
    { name: "Personalized Tours", href: "/personalized-tours" },
     
  ];

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },

    {
      name: "Packages",
      href: "/all-packages",
      subMenu: [
        { name: "Domestic Trips", href: "/all-packages/domestic-trips" },
        { name: "International Trips", href: "/all-packages/international-trips" },
      ],
    },
    { name: "Career", href: "/career" },

    { name: "Blogs", href: "/all-blogs" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
<nav className="w-full bg-white text-white font-sans sticky top-0 z-50">








      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-[#0E3A55] h-18 pr-4 font-medium">
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

        {/* DESKTOP MAIN LINKS */}
        <div className="hidden lg:flex items-center space-x-8">
          {mainLinks.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() =>
                link.subMenu && setActiveDropdown(link.name)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={link.href} className="hover:font-bold flex items-center">
                {link.name}
                {link.subMenu && <FaChevronDown className="ml-1 text-xs" />}
              </Link>

              {/* DESKTOP DROPDOWN */}
              {link.subMenu && activeDropdown === link.name && (
                <div className="absolute left-0 mt-0 bg-white text-black shadow-lg rounded-md w-48 py-2 px-4 z-50">
                  {link.subMenu.map((item, i) => (
               <Link
  key={i}
  href={item.href}
  className="block py-1"
  onClick={closeMobileMenu}
>
  {item.name}
</Link>

                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="tel:+919119119641"
            className="flex items-center bg-[#F5F7FA] border border-gray-300 text-[#0E3A55] px-4 py-2 mx-3 rounded-xl "
          >
            <FaPhoneAlt className="mr-2" />
            +91-9119119641
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* DESKTOP BOTTOM NAV */}
      <div className="hidden lg:flex justify-center space-x-8 py-3 bg-[#1B4965] text-sm">
        {menuItems.map((item, index) => (
          <div key={index}>
            <Link href={item.href}>{item.name}</Link>
          </div>
        ))}
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B4965] text-white px-4 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-white/20 py-2">
            <Link href={item.href} onClick={closeMobileMenu}>
  {item.name}
</Link>

            </div>
          ))}

          {/* MOBILE PACKAGES DROPDOWN */}
          <div className="border-b border-white/20 py-2">
            <button
              className="flex justify-between w-full"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "Packages" ? null : "Packages"
                )
              }
            >
              Packages
              <FaChevronDown
                className={`transition ${activeDropdown === "Packages" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "Packages" && (
              <div className="pl-4 mt-2 space-y-1">
                {mainLinks[2].subMenu.map((item, i) => (
                  <Link key={i} href={item.href} className="block py-1">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Links */}
          <div className="mt-4 space-y-2">
            {mainLinks.map((link) => (
    <Link
  key={link.name}
  href={link.href}
  className="block"
  onClick={closeMobileMenu}
>
  {link.name}
</Link>

            ))}

     <Link
  href="tel:+919119119641"
  onClick={closeMobileMenu}
  className="flex items-center bg-[#F5F7FA] border border-gray-300 
             text-[#0E3A55] px-4 py-2 mx-3 rounded-xl"
>

              <FaPhoneAlt className="mr-2" />
              +91-9119119641
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { MdFamilyRestroom, MdOutlineRestaurant, MdPhotoCamera, MdSportsVolleyball } from 'react-icons/md';
import { GiAnimalSkull } from 'react-icons/gi';



export const FamilyTourComponent = () => {
      const images = [
    { src: "https://images.unsplash.com/photo-1622610607501-32ac9c927216?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbWlseSUyMHZhY2F0aW9ufGVufDB8fDB8fHww", text: "Family-friendly stays", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1541542684-be0c46417a12?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D", text: "Everyone's adventure, perfectly planned", href: "/family-holidays" },
    { src: "https://plus.unsplash.com/premium_photo-1718146019127-ebfb31a4af15?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91ciUyMGd1aWRlfGVufDB8fDB8fHww", text: "Private transfers and guided sightseeing", href: "/bachelor-tours" },
    { src: "https://plus.unsplash.com/premium_photo-1701113010478-b16fb74e6b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "24/7 on-trip assistance", href: "/luxury-tours" },
    { src: "https://plus.unsplash.com/premium_photo-1681505189991-157ecae8c0e6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cHBvcnR8ZW58MHx8MHx8fDA%3D", text: "Easy visa assistance and documentation support", href: "/premium-holiday-packages" },
  ];

  // DYNAMIC DATA
  const activitiesData = [
  {
    icon: <MdOutlineRestaurant />,
    title: "Family Picnic Day",
    points: [
      "Fun outdoor meal with games for all ages",
      "Beautiful parks or scenic spots with room to play",
    ],
  },
  {
    icon: <TbBeach />,
    title: "Beach Fun & Sandcastle Time",
    points: [
      "Safe, shallow beaches perfect for kids",
      "Beach games, swimming, and family sandcastle contests",
    ],
  },
  {
    icon: <MdSportsVolleyball />,
    title: "Interactive Games & Sports",
    points: [
      "Friendly family competitions and team activities",
      "Options like mini-golf, bowling, or relay races",
    ],
  },
  {
    icon: <GiAnimalSkull />,
    title: "Wildlife & Nature Exploration",
    points: [
      "Zoo visits, aquarium tours, or nature trail walks",
      "Educational and exciting for both kids and adults",
    ],
  },
  {
    icon: <MdFamilyRestroom />,
    title: "Family Pool Time",
    points: [
      "Resorts with kid-friendly and adult pool areas",
      "Splash zones, water slides, and relaxed swimming",
    ],
  },
  {
    icon: <MdPhotoCamera />,
    title: "Family Photo Session",
    points: [
      "Professional photos in beautiful, relaxed settings",
      "Captures genuine moments and smiles from everyone",
    ],
  },
];
  return (
    <div>
        <HeroBannerTours  title="Travel Together, Celebrate Together"
  description="We believe the greatest souvenir is a strengthened bond. Let us handle the details so you can focus on what truly matters." />
        <Activites activitiesData={activitiesData} title="Activities We Offer"   />
     <AboutPackage
  title="Family Holidays"
  description="Family holidays are the perfect way to bond, relax, and create lifelong memories together. Designed to suit all age groups, our family holiday packages combine comfort, fun, sightseeing, and leisure. From kid-friendly attractions and scenic destinations to relaxing resorts and cultural experiences, we ensure a stress-free and enjoyable vacation for every member of the family"
  images={[
    "https://images.unsplash.com/photo-1588979355313-6711a095465f?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503431153573-96e959f4d9b7?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1578496780896-7081cc23c111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]}
/>

       <WhatWeOfferComponent images={images} />
     <BookPackage
            title="Plan Your Perfect Family Holiday"
            description="Let us design a family holiday that suits your travel style, season, and budget. Get in touch with us today to explore customized family holiday packages for India and abroad."
            bgImage="/img/BookingImage.png"
          />
         <PopularPackages />
        <FaqSection />
    </div>
  )
}

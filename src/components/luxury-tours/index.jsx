import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';
import { GiCandleLight, GiCrown, GiDiamondRing, GiSailboat } from 'react-icons/gi';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { BsSunrise } from 'react-icons/bs';
import { MdAir, MdBeachAccess, MdMonochromePhotos, MdPhotoCamera, MdPhotoCameraBack, MdPool, MdRestaurant } from 'react-icons/md';
import HoneymoonSeasonSection from '../global/HoneymoonSeasonSection';
 


export const LuxuryComponent = () => {
      const images = [
    { src: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Tailor-made travel plans", href: "/honeymoon-trips" },
    { src: "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Luxury stays & villas", href: "/family-holidays" },
    { src: "/img/aboutimg5.jpg", text: "Private transfers & guides", href: "/bachelor-tours" },
    { src: "/img/aboutimg3.jpg", text: "Concierge & visa services", href: "/luxury-tours" },
    { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Personalized support throughout the journey", href: "/premium-holiday-packages" },
  ];

const activitiesData = [
  {
    icon: <GiDiamondRing />,
    title: "Private Guided City Tour (Luxury Vehicle)",
    points: [
      "Chauffeur-driven cars with flexible timings",
      "Expert local guides and VIP access to attractions",
    ],
  },
  {
    icon: <GiSailboat />,
    title: "Luxury Yacht / Private Cruise Experience",
    points: [
      "Sunset cruises with champagne evenings",
      "Gourmet dining experiences onboard",
    ],
  },
  {
    icon: <MdRestaurant />,
    title: "Fine Dining & Michelin-Star Experiences",
    points: [
      "Curated dining at award-winning restaurants",
      "Private chef and exclusive tasting experiences",
    ],
  },
  {
    icon: <TbMassage />,
    title: "Spa, Wellness & Signature Treatments",
    points: [
      "Premium spa sessions and wellness retreats",
      "Hammams, private yoga, and signature therapies",
    ],
  },
  {
    icon: <GiCrown />,
    title: "Exclusive Experiences & VIP Access",
    points: [
      "Skip-the-line museum and monument entries",
      "Private palace tours and behind-the-scenes access",
    ],
  },
  {
    icon: <MdAir />,
    title: "Scenic Experiences with Comfort",
    points: [
      "Hot air balloon rides and helicopter tours",
      "Luxury train journeys and private island visits",
    ],
  },
];



 const SEASONS_CONFIG = [
  {
    key: "summer",
    title: "Summer Luxury Destinations",
    period: "(March – June)",
    desc: "Ideal for cool climates, scenic beauty, and serene retreats.",
  },
  {
    key: "monsoon",
    title: "Monsoon Luxury Destinations",
    period: "(July – September)",
    desc: "Best for nature retreats and wellness escapes.",
  },
  {
    key: "winter",
    title: "Winter Luxury Destinations",
    period: "(October – February)",
    desc: "Perfect for heritage, beaches, and exclusive wildlife experiences.",
  },
];


const DESTINATION_DATA = {
  domestic: {
    summer: [
      {
        title: "Kashmir",
        image: "https://images.unsplash.com/photo-1614056965546-42fbe24eb36c?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Luxury houseboats", "Private shikara rides", "Scenic valleys"],
        featured: true,
      },
      {
        title: "Shimla & Manali",
        image: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Heritage hotels", "Mountain resorts"],
      },
      {
        title: "Mussoorie & Ranikhet",
        image: "https://images.unsplash.com/photo-1513494620969-1e35db419529?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Colonial luxury", "Peaceful surroundings"],
      },
      {
        title: "Darjeeling",
        image: "https://images.unsplash.com/photo-1698753864905-a447aa362ec9?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Boutique heritage stays", "Himalayan views"],
      },
      {
        title: "Ooty & Coonoor",
        image: "https://plus.unsplash.com/premium_photo-1697730310113-e44fced8e86c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Premium hill resorts", "Tea gardens"],
      },
    ],

    monsoon: [
      {
        title: "Munnar",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
        points: ["Luxury spa resorts", "Tea plantations"],
        featured: true,
      },
      {
        title: "Coorg",
        image: "https://images.unsplash.com/photo-1710612198146-77512950a4b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Private villas", "Rainforest retreats"],
      },
      {
        title: "Udaipur",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        points: ["Royal palace hotels", "Lakeside luxury"],
      },
      {
        title: "Wayanad",
        image: "https://plus.unsplash.com/premium_photo-1661962772428-f17249503156?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Eco-luxury resorts", "Forest experiences"],
      },
    ],

    winter: [
      {
        title: "Rajasthan",
        image: "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Palace hotels", "Royal experiences"],
        featured: true,
      },
      {
        title: "Goa",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Luxury beach resorts", "Private villas"],
      },
      {
        title: "Kerala (Alleppey & Kovalam)",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        points: ["Premium houseboats", "Wellness resorts"],
      },
      {
        title: "Andaman & Nicobar",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        points: ["Exclusive beachfront resorts"],
      },
      {
        title: "Ranthambore & Jim Corbett",
        image: "https://images.unsplash.com/photo-1641405290606-d406173389dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Luxury wildlife lodges", "Safari experiences"],
      },
    ],
  },

  international: {
    summer: [
      {
        title: "Switzerland",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        points: ["Private scenic trains", "Luxury alpine resorts"],
        featured: true,
      },
      {
        title: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        points: ["Parisian elegance", "Riviera luxury"],
      },
      {
        title: "Italy",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        points: ["Historic cities", "Luxury shopping", "Side villas"],
      },
      {
        title: "Maldives",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Overwater villas", "Private islands"],
      },
      {
        title: "Mauritius",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        points: ["Beachfront resorts", "Golf experiences"],
      },
    ],

    winter: [
      {
        title: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        points: ["Ultra-luxury hotels", "Private yachts", "Desert experiences"],
        featured: true,
      },
      {
        title: "Thailand",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Private beach resorts", "Luxury spas"],
      },
      {
        title: "Sri Lanka",
        image: "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Boutique luxury hotels", "Scenic rail journeys"],
      },
      {
        title: "Australia",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
        points: ["Luxury city stays", "Great Barrier Reef"],
      },
      {
        title: "New Zealand",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
        points: ["Private lodges", "Scenic drives", "Adventure luxury"],
      },
    ],
  },
};



  return (
    <div>
        <HeroBannerTours  title="Indulge in Exclusive Experiences & World-Class Comfort"
  description="Curated luxury for the connoisseur. Our tours deliver exclusivity through bespoke journeys, private transfers, and impeccable stays. Discover a world of elegance, detail, and unparalleled comfort." />
        <Activites activitiesData={activitiesData}  title="Activities We Offer Luxury Tours" />
         <AboutPackage
         title="Luxury Tours"
         description="Luxury tours are designed for discerning travelers who seek the finest experiences, personalized services, and unparalleled comfort. From opulent hotels and private transfers to bespoke itineraries and curated experiences, luxury travel is about exclusivity, elegance, and attention to detail. Whether it’s a royal heritage stay, a private island escape, or a tailor-made international journey, our luxury tours redefine travel in style."
         images={[
                     "https://images.unsplash.com/photo-1518860308377-800f02d5498a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

           "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
           "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
         ]}
       />
       <WhatWeOfferComponent images={images} />
       <BookPackage
              title="Experience Luxury Like Never Before"
              description="Let us craft a luxury journey that reflects your style and aspirations. Contact us today to design a tailor-made luxury tour with exclusive experiences, premium comfort, and flawless service."
              bgImage="https://images.unsplash.com/photo-1568115286680-d203e08a8be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

               <HoneymoonSeasonSection
              title="Best Luxury Destinations"
              destinationData={DESTINATION_DATA}
              seasonsConfig={SEASONS_CONFIG}
            />
         <PopularPackages />
       <FaqSection
  title="Luxury Tours – Frequently Asked Questions"
  subtitle="Everything you need to know about planning a world-class luxury travel experience"
  defaultOpen="item-0"
  faqs={[
    {
      id: 1,
      question: "What makes a tour a luxury tour?",
      answer: [
        "Luxury tours are defined by exclusive experiences, premium accommodations, private transfers, and personalized services.",
        "Asiago Travels curates luxury tours that focus on comfort, elegance, privacy, and unforgettable experiences tailored to your lifestyle."
      ],
    },
    {
      id: 2,
      question: "Can Asiago Travels customize luxury tour packages?",
      answer: [
        "Yes, Asiago Travels specializes in tailor-made luxury tour packages.",
        "Each itinerary is thoughtfully designed based on your preferences, travel style, pace, and budget to deliver a truly personalized journey."
      ],
    },
    {
      id: 3,
      question: "What destinations are ideal for luxury tours?",
      answer: [
        "Some of the most popular luxury destinations include Europe, the Maldives, Dubai, Switzerland, Japan, and exclusive island getaways.",
        "Asiago Travels helps you choose the perfect destination based on season, experiences desired, and your travel preferences."
      ],
    },
    {
      id: 4,
      question: "What services are included in Asiago Travels’ luxury tours?",
      answer: [
        "Asiago Travels provides comprehensive end-to-end luxury travel services.",
        "This includes business or first-class flights, premium hotels and resorts, private transfers, exclusive sightseeing experiences, visa assistance, and travel insurance for a seamless and stress-free journey."
      ],
    },
  ]}
/>

    </div>
  )
}

import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';
import { GiCandleLight } from "react-icons/gi";
import { TbBeach, TbMassage } from "react-icons/tb";
import { BsSunrise } from "react-icons/bs";
import { MdMonochromePhotos, MdPool } from 'react-icons/md';
import HoneymoonSeasonSection from '../global/HoneymoonSeasonSection';


export const HoneyMoonComponent = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1758523672990-4a16a5536595?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Customized itineraries for every couple", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1714138083505-fc47d575e3b1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Handpicked Romantic Stay", href: "/family-holidays" },
    { src: "https://media.istockphoto.com/id/531933608/photo/better-mortgage-rates.jpg?s=612x612&w=0&k=20&c=zEqDG58F7Pz3SAjG5vTyocFzQt8J8n5bUYlbLJwtG3k=", text: "Hassle-free visa assistance", href: "/bachelor-tours" },
    { src: "https://plus.unsplash.com/premium_photo-1701113010478-b16fb74e6b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "24/7 travel support", href: "/luxury-tours" },
    { src: "https://images.unsplash.com/photo-1546702071-a8a8b0afdf11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Private transfers and special honeymoon inclusions", href: "/premium-holiday-packages" },
  ];

  // DYNAMIC DATA
  const activitiesData = [
    {
      icon: <GiCandleLight />,
      title: "Candlelight Dinner",
      points: [
        "Enjoy a private, romantic dinner setup",
        "Often includes soft music & beautiful views",
      ],
    },
    {
      icon: <TbBeach />,
      title: "Private Beach Time",
      points: [
        "Relax together by the sea",
        "Sunrise & sunset walks on quiet beaches",
      ],
    },
    {
      icon: <TbMassage />,
      title: "Couple Spa & Massage",
      points: [
        "Rejuvenating full-body couple massages",
        "Helps you relax after wedding stress",
      ],
    },
    {
      icon: <BsSunrise />,
      title: "Sunset Cruise",
      points: [
        "Peaceful boat ride during sunset",
        "Perfect for photos & romantic moments",
      ],
    },
    {
      icon: <MdPool />,
      title: "Private Pool",
      points: [
        "Stay in villas with private pools",
        "Great for relaxation & romantic photos",
      ],
    },
    {
      icon: <MdMonochromePhotos />,
      title: "Romantic Photoshoots",
      points: [
        "Professional shoots at scenic spots",
        "Beach, waterfalls, gardens & resorts",
      ],
    },
  ];


const SEASONS_CONFIG = [
  {
    key: "summer",
    title: "Summer Honeymoon Destinations",
    period: "(March – June)",
    desc: "Perfect for cool climates and scenic mountain views.",
  },
  {
    key: "monsoon",
    title: "Monsoon Honeymoon Destinations",
    period: "(July – September)",
    desc: "Ideal for lush landscapes, misty hills, and peaceful escapes.",
  },
  {
    key: "winter",
    title: "Winter Honeymoon Destinations",
    period: "(October – February)",
    desc: "Best for beaches, cultural tours, and festive experiences.",
  },
];


const DESTINATION_DATA = {
  domestic: {
    summer: [
      {
        title: "Kashmir",
        image: "https://images.unsplash.com/photo-1614056965546-42fbe24eb36c?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Snow-clad mountains", "Houseboats", "Lush valleys"],
        featured: true,
      },
      {
        title: "Manali",
        image: "https://images.unsplash.com/photo-1579689189009-874f5cac2db5?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Romantic hill station", "Adventure", "Cozy stays"],
      },
      {
        title: "Shimla",
        image: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Colonial charm", "Pleasant weather"],
      },
      {
        title: "Darjeeling",
        image: "https://images.unsplash.com/photo-1698753864905-a447aa362ec9?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Tea gardens", "Himalayan views"],
      },
      {
        title: "Ooty & Coonoor",
        image: "https://images.unsplash.com/photo-1638886540342-240980f60d25?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Tranquil hills", "Greenery", "Waterfalls"],
      },
    ],

    monsoon: [
      {
        title: "Munnar",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
        points: ["Tea plantations", "Waterfalls", "Romantic resorts"],
        featured: true,
      },
      {
        title: "Coorg",
        image: "https://images.unsplash.com/photo-1709730705114-74080546e165?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Coffee estates", "Nature retreats"],
      },
      {
        title: "Udaipur",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        points: ["Lakes", "Palaces", "Royal ambiance"],
      },
      {
        title: "Goa (Monsoon)",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        points: ["Quiet beaches", "Great value stays"],
      },
    ],

    winter: [
      {
        title: "Goa",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Beaches", "Nightlife", "Luxury resorts"],
        featured: true,
      },
      {
        title: "Kerala (Alleppey & Varkala)",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        points: ["Backwaters", "Houseboat stays"],
      },
      {
        title: "Rajasthan",
        image: "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Royal palaces", "Desert romance"],
      },
      {
        title: "Andaman & Nicobar Islands",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        points: ["White-sand beaches", "Turquoise waters"],
      },
    ],
  },

  international: {
    summer: [
      {
        title: "Maldives",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Luxury overwater villas", "Private beaches"],
        featured: true,
      },
      {
        title: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        points: ["Tropical beaches", "Romantic villas", "Cultural charm"],
      },
      {
        title: "Switzerland",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        points: ["Snowy Alps", "Scenic trains", "Lakeside towns"],
      },
      {
        title: "Turkey",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
        points: ["Hot air balloon rides", "Beaches", "Historic cities"],
      },
      {
        title: "Mauritius",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        points: ["Pristine beaches", "Luxury resorts", "Island romance"],
      },
    ],

    winter: [
      {
        title: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        points: ["Luxury hotels", "Shopping", "Desert safaris"],
        featured: true,
      },
      {
        title: "Thailand",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
        points: ["Beautiful islands", "Nightlife", "Island hopping"],
      },
      {
        title: "Sri Lanka",
        image: "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Beaches", "Tea gardens", "Cultural heritage"],
      },
      {
        title: "Singapore",
        image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac",
        points: ["Modern city charm", "Attractions", "Cruises"],
      },
      {
        title: "Vietnam",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592",
        points: ["Halong Bay cruises", "Scenic landscapes"],
      },
    ],
  },
};





  return (
    <div>
      <HeroBannerTours title="Celebrate Love with Perfectly Curated Romantic Getaways"
        description="Your honeymoon, personalized. We create intimate, unforgettable escapes—from misty hills to luxury beaches—tailored to your idea of romance, adventure, and perfect relaxation." />
      <Activites activitiesData={activitiesData} title="Activities We Offer HoneyMoon Trips" />
      <AboutPackage
        title="Honeymoon Trips"
        description="A honeymoon marks the beginning of a beautiful journey together. Our honeymoon trips are thoughtfully designed to offer romance, comfort, privacy, and unforgettable experiences. From serene beaches and misty hill stations to luxurious international escapes, we help couples create memories that last a lifetime. Whether you seek relaxation, adventure, culture, or indulgence, our honeymoon packages are tailored to match your dream holiday."
        images={[
          "https://images.unsplash.com/photo-1576158831003-d41033ec31fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1736259762030-69d6ccff5cca?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        ]}

      />

      <WhatWeOfferComponent images={images} />
      <BookPackage
        title="Start Your Dream Honeymoon Today"
        description="Let us plan a honeymoon that reflects your love story. Contact us now to create a tailor-made honeymoon package that suits your style, season, and budget."
        bgImage="/img/BookingImage.png"
      />
      <HoneymoonSeasonSection
  title="Best Honeymoon Destinations"
  destinationData={DESTINATION_DATA}
  seasonsConfig={SEASONS_CONFIG}
/>;
      <PopularPackages />
 <FaqSection
  title="Honeymoon Trips - Frequently Asked Questions"
  subtitle="Everything you need to know to plan a perfect romantic getaway"
  defaultOpen="item-0"
  faqs={[
    {
      id: 1,
      question: "What is the best time to plan a honeymoon trip?",
      answer: [
        "The ideal time depends on your chosen destination and weather preferences.",
        "Asiago Travels recommends booking your honeymoon 4–6 months in advance to enjoy the best deals and exclusive romantic inclusions."
      ],
    },
    {
      id: 2,
      question: "Can honeymoon packages be customized by Asiago Travels?",
      answer: [
        "Yes, Asiago Travels specializes in fully customized honeymoon packages.",
        "Packages are tailored according to your budget, travel dates, preferred destinations, and special romantic experiences."
      ],
    },
    {
      id: 3,
      question: "Do Asiago Travels honeymoon packages include romantic arrangements?",
      answer: [
        "Yes, most honeymoon packages include special romantic benefits.",
        "These may include honeymoon room décor, welcome drinks, candlelight dinners, surprise cakes, or couple spa sessions, subject to hotel policies."
      ],
    },
    {
      id: 4,
      question: "Does Asiago Travels assist with visas and travel documentation?",
      answer: [
        "Absolutely. Asiago Travels provides complete assistance with visas and travel documentation.",
        "This includes visa support, travel insurance, flight tickets, hotel vouchers, and other essential paperwork for a hassle-free honeymoon."
      ],
    },
  ]}
/>


    </div>
  )
}

import { AboutPackage } from '@/components/bachelor-tours/AboutPackage';
import { Activites } from '@/components/bachelor-tours/Activites';
import { BookPackage } from '@/components/bachelor-tours/BookPackage';
import { HeroBannerTours } from '@/components/bachelor-tours/HeroBannerTours';
import { FaqSection } from '@/components/global/Faq';
import { PopularPackages } from '@/components/landingpage/PopularTravel';
import { WhatWeOfferComponent } from '@/components/landingpage/WhatweOffer';
import React from 'react'

import { GiCandleLight, GiDesert } from 'react-icons/gi';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { BsSunrise } from 'react-icons/bs';
import { MdEventSeat, MdMonochromePhotos, MdPool, MdRestaurant, MdShoppingBag } from 'react-icons/md';
import HoneymoonSeasonSection from '@/components/global/HoneymoonSeasonSection';
import { FaCarSide } from 'react-icons/fa';




 const PremiumHolidayPackage = () => {
    const images = [
        { src: "https://images.unsplash.com/photo-1669043962012-a5b8496cd664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Premium hotels & resorts", href: "/honeymoon-trips" },
        { src: "https://plus.unsplash.com/premium_photo-1663018215282-ef11af8fd8e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Personalized attentive service", href: "/family-holidays" },
        { src: "/img/aboutimg5.jpg", text: "Private transfers & guides", href: "/bachelor-tours" },
        { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Visa & travel assistance", href: "/luxury-tours" },
        { src: "https://images.unsplash.com/photo-1612257998531-70e0d0a15f6d?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Thoughtfully planned itineraries ", href: "/premium-holiday-packages" },
    ];

    // DYNAMIC DATA
const activitiesData = [
  {
    icon: <FaCarSide />,
    title: "Comfortable City Tours with Premium Transport",
    points: [
      "Luxury coaches or premium SUVs for city sightseeing",
      "Professional guides ensuring a smooth and enriching experience",
    ],
  },
  {
    icon: <GiDesert />,
    title: "Signature Experience (One Highlight Activity)",
    points: [
      "Premium desert safari with luxury camps",
      "Luxury cruise or iconic attraction experience",
    ],
  },
  {
    icon: <TbMassage />,
    title: "Wellness & Leisure Time",
    points: [
      "Access to premium spa and wellness facilities",
      "Relaxed leisure time at resorts or scenic locations",
    ],
  },
  {
    icon: <MdEventSeat />,
    title: "Cultural Show with Reserved Seating",
    points: [
      "Top-category reserved seats for cultural performances",
      "Premium access to shows, events, or live entertainment",
    ],
  },
  {
    icon: <MdShoppingBag />,
    title: "Curated Shopping Experience",
    points: [
      "Visits to premium malls and designer outlets",
      "Exploration of artisan boutiques and local luxury markets",
    ],
  },
  {
    icon: <MdRestaurant />,
    title: "Special Dining Experience",
    points: [
      "Themed restaurants and scenic-view dining",
      "Premium buffet or curated dining experiences",
    ],
  },
];



const SEASONS_CONFIG = [
  {
    key: "summer",
    title: "Summer Premium Holiday Gateways",
    period: "(March – June)",
    desc: "Perfect for cool climates and serene surroundings.",
  },
  {
    key: "monsoon",
    title: "Monsoon Premium Holiday Gateways",
    period: "(July – September)",
    desc: "Best for lush landscapes and tranquil stays.",
  },
  {
    key: "winter",
    title: "Winter Premium Holiday Gateways",
    period: "(October – February)",
    desc: "Ideal for beaches, culture, and leisure travel.",
  },
];


const DESTINATION_DATA = {
  domestic: {
    summer: [
      {
        title: "Kashmir",
        image: "https://images.unsplash.com/photo-1614056965546-42fbe24eb36c?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Premium houseboats", "Scenic valleys", "Shikara rides"],
        featured: true,
      },
      {
        title: "Shimla & Manali",
        image: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Boutique hotels", "Mountain retreats"],
      },
      {
        title: "Mussoorie & Ranikhet",
        image: "https://images.unsplash.com/photo-1655916187603-0f7010146b79?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Colonial charm", "Peaceful escapes"],
      },
      {
        title: "Darjeeling",
        image: "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Premium heritage stays", "Himalayan views"],
      },
      {
        title: "Ooty & Coonoor",
        image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d",
        points: ["Tea garden resorts", "Nature retreats"],
      },
    ],

    monsoon: [
      {
        title: "Munnar",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
        points: ["Premium resorts", "Tea plantations"],
        featured: true,
      },
      {
        title: "Coorg",
        image: "https://images.unsplash.com/photo-1710612198146-77512950a4b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Coffee estate stays", "Nature lodges"],
      },
      {
        title: "Udaipur",
        image: "https://images.unsplash.com/photo-1561312514-1d71b2b7e495?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Lakeside premium hotels", "Royal experiences"],
      },
      {
        title: "Wayanad",
        image: "https://plus.unsplash.com/premium_photo-1661962772428-f17249503156?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Eco-premium resorts", "Forest retreats"],
      },
    ],

    winter: [
      {
        title: "Goa",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Premium beach resorts", "Private villas"],
        featured: true,
      },
      {
        title: "Kerala (Alleppey & Kovalam)",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        points: ["Premium houseboats", "Wellness retreats"],
      },
      {
        title: "Rajasthan",
        image: "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Heritage premium hotels", "Cultural experiences"],
      },
      {
        title: "Andaman & Nicobar Islands",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        points: ["Beachfront premium resorts"],
      },
      {
        title: "Ranthambore & Jim Corbett",
        image: "https://images.unsplash.com/photo-1641405290606-d406173389dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Premium wildlife lodges", "Safari experiences"],
      },
    ],
  },

  international: {
    summer: [
      {
        title: "Switzerland",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        points: ["Scenic train journeys", "Alpine towns", "Premium stays"],
        featured: true,
      },
      {
        title: "Italy",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        points: ["Historic cities", "Countryside charm"],
      },
      {
        title: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        points: ["Parisian elegance", "Riviera leisure"],
      },
      {
        title: "Maldives",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Premium island resorts", "Beach villas"],
      },
      {
        title: "Mauritius",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        points: ["Beach resorts", "Water sports", "Relaxed luxury"],
      },
    ],

    winter: [
      {
        title: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        points: ["Premium hotels", "Shopping", "Desert experiences"],
        featured: true,
      },
      {
        title: "Thailand",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Premium beach resorts", "Spa experiences"],
      },
      {
        title: "Sri Lanka",
        image: "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Boutique hotels", "Scenic rail journeys"],
      },
      {
        title: "Australia",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
        points: ["Premium city stays", "Natural wonders"],
      },
      {
        title: "New Zealand",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
        points: ["Scenic drives", "Premium lodges"],
      },
    ],
  },
};



    return (
        <div>
            <HeroBannerTours title="Refined Travel Experiences with Comfort, Style & Exclusivity"
                description="Premium holidays blend elegance with exceptional value. Enjoy curated comfort, handpicked hotels, and tailored experiences—perfect for refined leisure travelers, couples, and families." />
            <Activites activitiesData={activitiesData} title="Activities We Offer Premium Holiday Packages" />
              <AboutPackage
                    title="Premium holidays"
                    description="Premium Holiday Gateways are curated for travelers who seek a perfect balance of comfort, elegance, and exclusive experiences—without being overly extravagant. These holidays feature handpicked premium hotels and resorts, personalized services, scenic destinations, and thoughtfully planned itineraries. Ideal for couples, families, and refined leisure travelers, premium holidays offer elevated travel experiences with excellent value and sophistication."
                    images={[
                      "https://plus.unsplash.com/premium_photo-1738099062448-7f6194176524?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1589129140837-67287c22521b?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1509721926668-25a8dd274c1b",
                    ]}
                  />
            <WhatWeOfferComponent images={images} />
            <BookPackage
                title="Elevate Your Next Holiday"
              description="Discover destinations that offer comfort, style, and memorable experiences. Contact us today to plan your Premium Holiday Gateway, customized to your preferred season, destination, and travel style."
                bgImage="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
            />
                <HoneymoonSeasonSection
              title="Best Premium Holiday Destinations"
              destinationData={DESTINATION_DATA}
              seasonsConfig={SEASONS_CONFIG}
            />
            <PopularPackages />
       <FaqSection
  title="Premium Holidays – Frequently Asked Questions"
  subtitle="Everything you need to know about enjoying comfort-driven, thoughtfully curated holidays"
  defaultOpen="item-0"
  faqs={[
    {
      id: 1,
      question: "What are premium holidays?",
      answer: [
        "Premium holidays are designed to offer the perfect balance of comfort, quality services, and carefully curated travel experiences.",
        "Asiago Travels creates premium holiday packages featuring handpicked hotels, seamless travel arrangements, and memorable experiences for discerning travelers."
      ],
    },
    {
      id: 2,
      question: "Can Asiago Travels customize premium holiday packages?",
      answer: [
        "Yes, Asiago Travels specializes in tailor-made premium holiday packages.",
        "Each package is customized based on your travel preferences, destination choices, travel pace, and budget to ensure a personalized experience."
      ],
    },
    {
      id: 3,
      question: "Which destinations are best for premium holidays?",
      answer: [
        "Popular destinations for premium holidays include Europe, the Maldives, Dubai, Bali, Japan, and select luxury resorts worldwide.",
        "Asiago Travels helps you select the ideal destination based on the season, comfort level, and experiences you wish to enjoy."
      ],
    },
    {
      id: 4,
      question: "What services are included in Asiago Travels’ premium holidays?",
      answer: [
        "Asiago Travels provides complete end-to-end travel solutions for premium holidays.",
        "Services include premium hotels, comfortable flight options, private or semi-private transfers, curated sightseeing experiences, visa assistance, and travel insurance for a smooth and stress-free vacation."
      ],
    },
  ]}
/>

        </div>
    )
}

export default PremiumHolidayPackage;

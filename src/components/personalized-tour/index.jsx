import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';
import { GiCandleLight, GiPartyPopper, GiPathDistance, GiVillage } from 'react-icons/gi';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { BsSunrise } from 'react-icons/bs';
import { MdAccessTime, MdAddCircleOutline, MdMonochromePhotos, MdPool } from 'react-icons/md';
import HoneymoonSeasonSection from '../global/HoneymoonSeasonSection';
import { FaUserTie } from 'react-icons/fa';


export const PersonalizedTourComponent = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Fully flexible itineraries", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1518860308377-800f02d5498a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Hotels, activities choice", href: "/family-holidays" },
    { src: "https://media.istockphoto.com/id/531933608/photo/better-mortgage-rates.jpg?s=612x612&w=0&k=20&c=zEqDG58F7Pz3SAjG5vTyocFzQt8J8n5bUYlbLJwtG3k=", text: "Expert travel planning", href: "/bachelor-tours" },
    { src: "https://images.unsplash.com/photo-1612257998531-70e0d0a15f6d?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Visa & documentation support", href: "/luxury-tours" },
    { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Dedicated assistance before and during travel", href: "/premium-holiday-packages" },
  ];

  // DYNAMIC DATA
const activitiesData = [
  {
    icon: <GiPathDistance />,
    title: "Tailor-Made Sightseeing",
    points: [
      "Customized themes including history, nature, shopping, food, architecture, or photography",
      "Sightseeing planned fully around traveler preferences",
    ],
  },
  {
    icon: <GiVillage />,
    title: "Unique Local Experiences",
    points: [
      "Home-hosted meals and authentic village visits",
      "Hands-on artisan workshops and cultural interactions",
    ],
  },
  {
    icon: <MdAccessTime />,
    title: "Flexible Leisure & Free Time",
    points: [
      "Relaxed, unrushed schedules with complete flexibility",
      "10-hour private vehicle service with water bottles, dry & wet tissues",
    ],
  },
  {
    icon: <GiPartyPopper />,
    title: "Special Occasion Experiences",
    points: [
      "Anniversary dinners and surprise celebrations",
      "Proposal planning and personalized romantic moments",
    ],
  },
  {
    icon: <FaUserTie />,
    title: "Private Transfers & Dedicated Guide",
    points: [
      "Experienced private guide with personal attention",
      "Seamless transfers and full itinerary flexibility",
    ],
  },
  {
    icon: <MdAddCircleOutline />,
    title: "Optional Add-ons Chosen by the Traveler",
    points: [
      "Adventure activities, spa sessions, shows, or cruises",
      "Only experiences selected by the traveler are included",
    ],
  },
];


const DESTINATION_DATA = {
  domestic: {
    summer: [
      {
        title: "Kashmir",
        image: "https://images.unsplash.com/photo-1614056965546-42fbe24eb36c?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Customized sightseeing", "Houseboat stays", "Private experiences"],
        featured: true,
      },
      {
        title: "Shimla – Manali – Dharamshala",
        image: "https://images.unsplash.com/photo-1625401586082-9a9b17bc4ce5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Flexible hill itineraries", "Scenic drives", "Relaxed exploration"],
      },
      {
        title: "Leh – Ladakh",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        points: ["Personalized road trips", "Adventure tours", "High-altitude landscapes"],
      },
      {
        title: "Darjeeling & Sikkim",
        image: "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Nature", "Culture", "Slow travel experiences"],
      },
      {
        title: "Ooty & Coonoor",
        image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d",
        points: ["Leisure-focused escapes", "Hill views", "Calm surroundings"],
      },
    ],

    monsoon: [
      {
        title: "Munnar",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
        points: ["Nature retreats", "Tea plantation stays", "Wellness travel"],
        featured: true,
      },
      {
        title: "Coorg & Wayanad",
        image: "https://images.unsplash.com/photo-1607054931379-95e37fc6684b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Coffee estates", "Eco-lodges", "Green landscapes"],
      },
      {
        title: "Udaipur",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        points: ["Heritage stays", "Flexible sightseeing", "Cultural experiences"],
      },
      {
        title: "Goa (Monsoon)",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        points: ["Peaceful beaches", "Boutique hotels", "Off-season charm"],
      },
    ],

    winter: [
      {
        title: "Rajasthan",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        points: ["Custom heritage tours", "Forts & palaces", "Cultural exploration"],
        featured: true,
      },
      {
        title: "Kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        points: ["Backwaters", "Wellness travel", "Personalized itineraries"],
      },
      {
        title: "Andaman & Nicobar Islands",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        points: ["Private beach experiences", "Relaxed island travel"],
      },
      {
        title: "Ranthambore & Jim Corbett",
        image: "https://images.unsplash.com/photo-1641405290606-d406173389dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Tailor-made wildlife safaris", "Nature-focused stays"],
      },
      {
        title: "Goa",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Beach holidays", "Flexible activities", "Relaxed pacing"],
      },
    ],
  },

  international: {
    summer: [
      {
        title: "Switzerland",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        points: ["Custom scenic routes", "Train journeys", "Alpine towns"],
        featured: true,
      },
      {
        title: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        points: ["City stays", "Countryside travel", "Wine regions"],
      },
      {
        title: "Italy",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        points: ["Historic cities", "Countryside villas", "Flexible exploration"],
      },
      {
        title: "Maldives",
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Private island stays", "Bespoke experiences"],
      },
      {
        title: "Mauritius",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        points: ["Beach stays", "Custom activities", "Relaxed pace"],
      },
    ],

    winter: [
      {
        title: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        points: ["Luxury shopping", "Desert adventures", "Flexible itineraries"],
        featured: true,
      },
      {
        title: "Thailand",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
        points: ["Custom island hopping", "City stays"],
      },
      {
        title: "Sri Lanka",
        image: "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Personalized culture routes", "Nature experiences"],
      },
      {
        title: "Australia",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
        points: ["Custom road trips", "City experiences"],
      },
      {
        title: "New Zealand",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
        points: ["Scenic drives", "Adventure tours"],
      },
    ],
  },
};



const SEASONS_CONFIG = [
  {
    key: "summer",
    title: "Summer Personalized Destinations",
    period: "(March – June)",
    desc: "Ideal for cool weather, scenic beauty, and relaxed exploration.",
  },
  {
    key: "monsoon",
    title: "Monsoon Personalized Destinations",
    period: "(July – September)",
    desc: "Best for greenery, wellness, and off-season travel.",
  },
  {
    key: "winter",
    title: "Winter Personalized Destinations",
    period: "(October – February)",
    desc: "Perfect for beaches, heritage, and wildlife experiences.",
  },
];





  return (
    <div>
      <HeroBannerTours title="Travel Designed Your Way"
        description="Your Dream Trip, Your Way. Personalized Tours offer fully customizable travel. From destinations to daily pace, we tailor every detail for your perfect adventure, celebration, or cultural getaway." />
      <Activites activitiesData={activitiesData} title="Activities We Offer Personalized Tours" />
      <AboutPackage
        title="Personalized holidays"
        description="Personalized Tours are tailor-made travel experiences crafted to match your interests, pace, budget, and travel style. Unlike fixed itineraries, these tours are fully customizable—allowing you to choose destinations, hotels, activities, and travel dates that suit you best. Whether it’s a relaxed holiday, an adventure trip, a cultural exploration, or a special celebration, personalized tours offer flexibility, comfort, and a truly unique journey."
        images={[
          "https://images.unsplash.com/photo-1589481448787-42cd868394ef?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1662771551016-ffacbfa356dd?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1702919883263-81a8ce8b83fb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      />
      <WhatWeOfferComponent images={images} />
      <BookPackage
        title="Start Planning Your Personalized Tour"
        description="Turn your travel ideas into reality with a tour designed just for you. Contact us today to create a personalized travel experience tailored to your preferences, season, and budget."
        bgImage="https://images.unsplash.com/photo-1656427502140-84640f4134cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

          <HoneymoonSeasonSection
              title="Best Personalized Tour Destinations"
              destinationData={DESTINATION_DATA}
              seasonsConfig={SEASONS_CONFIG}
            />
      <PopularPackages />
      <FaqSection
  title="Personalized Holidays – Frequently Asked Questions"
  subtitle="Everything you need to know about creating a holiday designed just for you"
  defaultOpen="item-0"
  faqs={[
    {
      id: 1,
      question: "What are personalized holidays?",
      answer: [
        "Personalized holidays are tailor-made travel experiences designed entirely around your interests, travel pace, and personal preferences.",
        "Asiago Travels crafts customized itineraries to ensure every holiday truly reflects your unique travel style and expectations."
      ],
    },
    {
      id: 2,
      question: "How does Asiago Travels customize personalized holiday packages?",
      answer: [
        "Asiago Travels carefully plans each personalized holiday by understanding your budget, travel dates, preferred destinations, and accommodation choices.",
        "We also incorporate special experiences, activities, and themes you wish to include for a truly bespoke journey."
      ],
    },
    {
      id: 3,
      question: "Are personalized holidays suitable for families, couples, or solo travelers?",
      answer: [
        "Yes, personalized holidays are suitable for all types of travelers.",
        "Asiago Travels designs customized travel experiences for families, couples, groups of friends, and solo travelers, ensuring comfort and enjoyment for everyone."
      ],
    },
    {
      id: 4,
      question: "What services are included in Asiago Travels’ personalized holidays?",
      answer: [
        "Asiago Travels provides complete end-to-end travel assistance for personalized holidays.",
        "Our services include flights, hotels, airport and local transfers, sightseeing arrangements, visa assistance, travel insurance, and on-trip support for a truly hassle-free holiday experience."
      ],
    },
  ]}
/>

    </div>
  )
}

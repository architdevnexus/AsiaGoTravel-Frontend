import React from 'react'
import { HeroBannerTours } from './HeroBannerTours'
import { PopularPackages } from '../landingpage/PopularTravel'
import { FaqSection } from '../global/Faq'
import { Activites } from './Activites'
import { BookPackage } from './BookPackage'
import { AboutPackage } from './AboutPackage'
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer'
import { OurBenefitsSection } from '../career/OurBenefitsSection'
import { GiBeerStein, GiCandleLight, GiParachute } from 'react-icons/gi';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { BsMusicNoteBeamed, BsSunrise } from 'react-icons/bs';
import { MdBeachAccess, MdCameraAlt, MdMonochromePhotos, MdPool } from 'react-icons/md';
import { FaCar } from 'react-icons/fa'
import HoneymoonSeasonSection from '../global/HoneymoonSeasonSection'


export const BachelorToursComponent = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1612257998531-70e0d0a15f6d?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Group-customized itineraries", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Budget & luxury options", href: "/family-holidays" },
    { src: "https://images.unsplash.com/photo-1506699311528-5be252edc26a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Adventure, nightlife & parties", href: "/bachelor-tours" },
    { src: "https://plus.unsplash.com/premium_photo-1663018215282-ef11af8fd8e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Hassle-free visa support", href: "/luxury-tours" },
    { src: "https://plus.unsplash.com/premium_photo-1701113010478-b16fb74e6b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "24/7 travel assistance", href: "/premium-holiday-packages" },
  ];



  const activitiesData = [
    {
      icon: <BsMusicNoteBeamed />,
      title: "Nightlife Experience (Clubs / Pub Crawl)",
      points: [
        "Entry to popular clubs & bars",
        "Dance, DJ nights & party vibes",
      ],
    },
    {
      icon: <GiBeerStein />,
      title: "Adventure Activities",
      points: [
        "Options like desert safari, dune bashing, bungee jumping, skydiving, ATV rides, rafting, or zip-lining.",
        // "Group fun with drinks & music",
      ],
    },
    {
      icon: <GiParachute />,
      title: "Party Boat / Yacht Cruise",
      points: [
        "Private or shared yacht parties, booze cruises, or sunset party boats with music and dancing.",
        // "Adrenaline-filled group experiences",
      ],
    },
    {
      icon: <MdBeachAccess />,
      title: "Beach & Pool Parties",
      points: [
        "Access to beach clubs, pool parties, or resort day passes with DJs and entertainment.",
        // "Beach games & chill sessions",
      ],
    },
    {
      icon: <FaCar />,
      title: "Local Street Food & Bar-Hopping Tour",
      points: [
        "Guided food trails combined with local bars or breweries—fun, social, and relaxed.",
        // "Explore local hotspots together",
      ],
    },
    {
      icon: <MdCameraAlt />,
      title: "Live Entertainment Show",
      points: [
        "Comedy shows, concerts, casino nights, or themed party nights depending on the destination.",
        // "Create memories for social media",
      ],
    },
  ];



  const DESTINATION_DATA = {
    domestic: {
      summer: [
        {
          title: "Manali",
          image: "https://images.unsplash.com/photo-1579689189009-874f5cac2db5?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          points: ["Adventure sports", "Cafes", "Road trips"],
          featured: true,
        },
        {
          title: "Leh – Ladakh",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
          points: ["Biking trips", "High-altitude adventure"],
        },
        {
          title: "Kasol & Tosh",
          image: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fzb2x8ZW58MHx8MHx8fDA%3D",
          points: ["Backpacker vibes", "Nature retreats"],
        },
        {
          title: "Rishikesh",
          image: "https://images.unsplash.com/photo-1720819029162-8500607ae232?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          points: ["River rafting", "Camping", "Nightlife cafés"],
        },
        {
          title: "Spiti Valley",
          image: "https://images.unsplash.com/photo-1628782379401-4fff9cdcbbfe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          points: ["Offbeat adventure", "Scenic drives"],
        },
      ],

      monsoon: [
        {
          title: "Goa (Monsoon)",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          points: ["Budget stays", "Quiet beaches", "Monsoon vibes"],
          featured: true,
        },
        {
          title: "Lonavala – Pawna",
          image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
          points: ["Camping", "Weekend trips"],
        },
        {
          title: "Coorg & Chikmagalur",
          image: "https://images.unsplash.com/photo-1710612198146-77512950a4b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          points: ["Coffee estates", "Waterfalls"],
        },
        {
          title: "Udaipur",
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
          points: ["Lakeside nightlife", "Heritage experiences"],
        },
      ],

      winter: [
        {
          title: "Goa",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          points: ["Nightclubs", "Beach parties", "Music festivals"],
          featured: true,
        },
        {
          title: "Gokarna",
          image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
          points: ["Laid-back beaches", "Nightlife"],
        },
        {
          title: "Jaipur",
          image: "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          points: ["Heritage", "Rooftop nightlife"],
        },
        {
          title: "Andaman Islands",
          image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
          points: ["Beach parties", "Water activities"],
        },
      ],
    },

    international: {
      summer: [
        {
          title: "Bali, Indonesia",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
          points: ["Beach clubs", "Nightlife", "Adventure"],
          featured: true,
        },
        {
          title: "Thailand",
          image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          points: ["Bangkok nightlife", "Phuket & Pattaya beaches"],
        },
        {
          title: "Maldives (Budget)",
          image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          points: ["Budget resorts", "Water sports", "Island vibes"],
        },
        {
          title: "Turkey",
          image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
          points: ["Beach towns", "Nightlife", "Culture"],
        },
        {
          title: "Vietnam",
          image: "https://images.unsplash.com/photo-1528127269322-539801943592",
          points: ["Nightlife", "Cruises", "Adventure activities"],
        },
      ],

      winter: [
        {
          title: "Dubai, UAE",
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
          points: ["Luxury clubs", "Desert parties", "Nightlife"],
          featured: true,
        },
        {
          title: "Sri Lanka",
          image: "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          points: ["Surfing", "Beaches", "Nightlife cafés"],
        },
        {
          title: "Malaysia",
          image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07",
          points: ["Nightlife", "Casinos", "Theme parks"],
        },
        {
          title: "Hong Kong",
          image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
          points: ["Clubs", "Theme parks", "City nightlife"],
        },
        {
          title: "Cambodia",
          image: "https://images.unsplash.com/photo-1558980664-10c236b87b98",
          points: ["Party islands", "Nightlife"],
        },
      ],
    },
  };

  const SEASONS_CONFIG = [
    {
      key: "summer",
      title: "Summer Bachelor Tour Destinations",
      period: "(March – June)",
      desc: "Best for hill escapes, road trips, and adventure.",
    },
    {
      key: "monsoon",
      title: "Monsoon Bachelor Tour Destinations",
      period: "(July – September)",
      desc: "Ideal for greenery, short trips, and relaxed partying.",
    },
    {
      key: "winter",
      title: "Winter Bachelor Tour Destinations",
      period: "(October – February)",
      desc: "Perfect for beaches, festivals, and party scenes.",
    },
  ];





  return (
    <div>
      <HeroBannerTours title="Travel Hard, Party Hard, Make Memories Forever"
        description="A Bachelors Tours is more than just a holiday—it’s the first chapter of your life together." />
      <Activites activitiesData={activitiesData} title="Activities We Offer Bachelour Tours" />
      <AboutPackage
        title="Bachelor Tours"
        description="Bachelor tours are all about fun, freedom, adventure, nightlife, and unforgettable experiences with friends. Whether it’s beach parties, thrilling adventures, road trips, or international nightlife hubs, bachelor tours are designed for groups looking to celebrate friendships and milestones in style. Our bachelor tour packages focus on exciting destinations, vibrant nightlife, adventure activities, and hassle-free travel planning."
        images={[
          "https://images.unsplash.com/photo-1615561479656-46419d14de5a?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1492462543947-040389c4a66c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      />


      <WhatWeOfferComponent images={images} />
      <OurBenefitsSection />
      <BookPackage
        title="Plan the Ultimate Bachelor Tour"
        description="Gather your gang and get ready for an epic trip. Contact us today to create a customized bachelor tour package tailored to your destination, season, and budget."
        bgImage="/img/bachelour.jpg"
      />

      <HoneymoonSeasonSection
        title="Best Bachelor Tour Destinations"
        destinationData={DESTINATION_DATA}
        seasonsConfig={SEASONS_CONFIG}
      />
      <PopularPackages />
<FaqSection
  title="Bachelor Tours – Frequently Asked Questions"
  subtitle="Everything you need to know to plan the ultimate bachelor getaway"
  defaultOpen="item-0"
  faqs={[
    {
      id: 1,
      question: "What are bachelor tours?",
      answer: [
        "Bachelor tours are specially designed trips for groups of friends looking to celebrate, explore, and create unforgettable memories together.",
        "Asiago Travels curates exciting bachelor tour experiences that perfectly blend nightlife, adventure, relaxation, and unique party moments."
      ],
    },
    {
      id: 2,
      question: "Can Asiago Travels customize bachelor tour packages?",
      answer: [
        "Yes, Asiago Travels offers fully customized bachelor tour packages.",
        "Packages are tailored based on your destination preferences, group size, budget, and preferred travel style."
      ],
    },
    {
      id: 3,
      question: "What destinations are popular for bachelor tours?",
      answer: [
        "Popular bachelor tour destinations include Goa, Thailand, Dubai, Bali, and various European cities.",
        "Asiago Travels helps you select the best destination based on the season, budget, nightlife options, and group interests."
      ],
    },
    {
      id: 4,
      question: "What services are included in Asiago Travels’ bachelor tours?",
      answer: [
        "Asiago Travels provides complete travel arrangements to ensure a stress-free bachelor trip.",
        "Services include flights, hotels, airport and local transfers, sightseeing, curated party experiences, visa assistance, and travel insurance."
      ],
    },
  ]}
/>

    </div>
  )
}

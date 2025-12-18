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
    title: "Nightlife & Clubbing",
    points: [
      "Entry to popular clubs & bars",
      "Dance, DJ nights & party vibes",
    ],
  },
  {
    icon: <GiBeerStein />,
    title: "Pub Crawling",
    points: [
      "Hop across top pubs & lounges",
      "Group fun with drinks & music",
    ],
  },
  {
    icon: <GiParachute />,
    title: "Adventure Activities",
    points: [
      "Paragliding, water sports & treks",
      "Adrenaline-filled group experiences",
    ],
  },
  {
    icon: <MdBeachAccess />,
    title: "Beach & Pool Parties",
    points: [
      "Poolside parties with music",
      "Beach games & chill sessions",
    ],
  },
  {
    icon: <FaCar />,
    title: "Road Trips & Sightseeing",
    points: [
      "Scenic drives with friends",
      "Explore local hotspots together",
    ],
  },
  {
    icon: <MdCameraAlt />,
    title: "Group Photos & Reels",
    points: [
      "Fun group photos & videos",
      "Create memories for social media",
    ],
  },
];



  return (
    <div>
      <HeroBannerTours title="Travel Hard, Party Hard, Make Memories Forever"
        description="A Bachelors Tours is more than just a holiday—it’s the first chapter of your life together." />
      <Activites activitiesData={activitiesData} title="Activities We Offer" />
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
        bgImage="https://images.unsplash.com/photo-1627556704243-5f0771d90783?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PopularPackages />
      <FaqSection />
    </div>
  )
}

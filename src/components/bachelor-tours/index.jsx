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
    { src: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Group-customized itineraries", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Budget & luxury options", href: "/family-holidays" },
    { src: "/img/aboutimg5.jpg", text: "Adventure, nightlife & parties", href: "/bachelor-tours" },
    { src: "/img/aboutimg3.jpg", text: "Hassle-free visa support", href: "/luxury-tours" },
    { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "24/7 travel assistance", href: "/premium-holiday-packages" },
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
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1509721926668-25a8dd274c1b",
  ]}
/>


      <WhatWeOfferComponent images={images} />
      <OurBenefitsSection />
      <BookPackage
        title="Plan the Ultimate Bachelor Tour"
        description="Gather your gang and get ready for an epic trip. Contact us today to create a customized bachelor tour package tailored to your destination, season, and budget."
        bgImage="/img/BookingImage.png"
      />
      <PopularPackages />
      <FaqSection />
    </div>
  )
}

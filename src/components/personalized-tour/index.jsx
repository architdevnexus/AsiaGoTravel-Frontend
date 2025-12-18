import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';
import { GiCandleLight } from 'react-icons/gi';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { BsSunrise } from 'react-icons/bs';
import { MdMonochromePhotos, MdPool } from 'react-icons/md';


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
      icon: <GiCandleLight />,
      title: "Customized Dining Experiences",
      points: [
        "Dining plans tailored to your taste",
        "Choose location, cuisine & ambience",
      ],
    },
    {
      icon: <TbBeach />,
      title: "Personalized Leisure Time",
      points: [
        "Beach or city time as per your preference",
        "Flexible schedules for complete comfort",
      ],
    },
    {
      icon: <TbMassage />,
      title: "Wellness as You Like",
      points: [
        "Spa & wellness sessions on request",
        "Select treatments that suit your needs",
      ],
    },
    {
      icon: <BsSunrise />,
      title: "Tailored Sunset Experiences",
      points: [
        "Cruises or viewpoints chosen by you",
        "Perfectly timed to your travel style",
      ],
    },
    {
      icon: <MdPool />,
      title: "Handpicked Stays",
      points: [
        "Hotels or villas selected to match your comfort",
        "Pool, views & amenities as you prefer",
      ],
    },
    {
      icon: <MdMonochromePhotos />,
      title: "Personalized Photo Moments",
      points: [
        "Photoshoots at locations you love",
        "Capture memories your way",
      ],
    },
  ];

  return (
    <div>
      <HeroBannerTours title="Travel Designed Your Way"
        description="Your Dream Trip, Your Way. Personalized Tours offer fully customizable travel. From destinations to daily pace, we tailor every detail for your perfect adventure, celebration, or cultural getaway." />
      <Activites activitiesData={activitiesData} title="Fun Activities to Do with Personalized Tours" />
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
      <PopularPackages />
      <FaqSection />
    </div>
  )
}

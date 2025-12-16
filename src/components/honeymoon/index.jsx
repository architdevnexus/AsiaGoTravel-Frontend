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


export const HoneyMoonComponent = () => {
      const images = [
    { src: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Customized itineraries for every couple", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Handpicked Romantic Stay", href: "/family-holidays" },
    { src: "/img/aboutimg5.jpg", text: "Hassle-free visa assistance", href: "/bachelor-tours" },
    { src: "/img/aboutimg3.jpg", text: "24/7 travel support", href: "/luxury-tours" },
    { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Private transfers and special honeymoon inclusions", href: "/premium-holiday-packages" },
  ];

  // DYNAMIC DATA
  const activitiesData = [
    {
      icon: <GiCandleLight /> ,
      title: "Candlelight Dinner",
      points: [
        "Enjoy a private, romantic dinner setup",
        "Often includes soft music & beautiful views",
      ],
    },
    {
      icon: <TbBeach /> ,
      title: "Private Beach Time",
      points: [
        "Relax together by the sea",
        "Sunrise & sunset walks on quiet beaches",
      ],
    },
    {
       icon: <TbMassage /> ,
      title: "Couple Spa & Massage",
      points: [
        "Rejuvenating full-body couple massages",
        "Helps you relax after wedding stress",
      ],
    },
    {
      icon: <BsSunrise /> ,
      title: "Sunset Cruise",
      points: [
        "Peaceful boat ride during sunset",
        "Perfect for photos & romantic moments",
      ],
    },
    {
      icon: <MdPool /> ,
      title: "Private Pool",
      points: [
        "Stay in villas with private pools",
        "Great for relaxation & romantic photos",
      ],
    },
    {
       icon: <MdMonochromePhotos /> ,
      title: "Romantic Photoshoots",
      points: [
        "Professional shoots at scenic spots",
        "Beach, waterfalls, gardens & resorts",
      ],
    },
  ];
  return (
    <div>
        <HeroBannerTours  title="HoneyMoon Trips"
  description="Celebrate Love with Perfectly Curated Romantic Getaways" />
        <Activites activitiesData={activitiesData} title="Activities We Offer HoneyMoon Trips"  />
     <AboutPackage
  title="Luxury Holiday Packages"
  description="Experience world-class luxury with handpicked resorts, private transfers, and bespoke itineraries designed for comfort and elegance."
  images={[
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1509721926668-25a8dd274c1b",
  ]}
/>

       <WhatWeOfferComponent images={images} />
     <BookPackage
                    title="Start Your Dream Honeymoon Today"
                    description="Let us plan a honeymoon that reflects your love story. Contact us now to create a tailor-made honeymoon package that suits your style, season, and budget."
                    bgImage="/img/BookingImage.png"
                />
         <PopularPackages />
        <FaqSection />
    </div>
  )
}

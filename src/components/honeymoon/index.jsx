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
  return (
    <div>
      <HeroBannerTours title="Celebrate Love with Perfectly Curated Romantic Getaways"
        description="Your honeymoon, personalized. We create intimate, unforgettable escapes—from misty hills to luxury beaches—tailored to your idea of romance, adventure, and perfect relaxation." />
      <Activites activitiesData={activitiesData} title="Activities We Offer HoneyMoon Trips" />
      <AboutPackage
        title="Honeymoon Trips"
        description="A honeymoon marks the beginning of a beautiful journey together. Our honeymoon trips are thoughtfully designed to offer romance, comfort, privacy, and unforgettable experiences. From serene beaches and misty hill stations to luxurious international escapes, we help couples create memories that last a lifetime. Whether you seek relaxation, adventure, culture, or indulgence, our honeymoon packages are tailored to match your dream holiday."
        images={[
          "https://images.unsplash.com/photo-1643001844892-2f425bdce12d?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1664304269494-429add5bec74?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

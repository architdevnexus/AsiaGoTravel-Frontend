import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';


export const PersonalizedTourComponent = () => {
      const images = [
    { src: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Beautiful Beaches / Lakes", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Local Markets", href: "/family-holidays" },
    { src: "/img/aboutimg5.jpg", text: "Adventure Hotspots", href: "/bachelor-tours" },
    { src: "/img/aboutimg3.jpg", text: "Scenic Viewpointss", href: "/luxury-tours" },
    { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Premium Holiday Packages", href: "/premium-holiday-packages" },
  ];

  // DYNAMIC DATA
  const activitiesData = [
    {
      icon: "/icons/candle.svg",
      title: "Candlelight Dinner",
      points: [
        "Enjoy a private, romantic dinner setup",
        "Often includes soft music & beautiful views",
      ],
    },
    {
      icon: "/icons/beach.svg",
      title: "Private Beach Time",
      points: [
        "Relax together by the sea",
        "Sunrise & sunset walks on quiet beaches",
      ],
    },
    {
      icon: "/icons/spa.svg",
      title: "Couple Spa & Massage",
      points: [
        "Rejuvenating full-body couple massages",
        "Helps you relax after wedding stress",
      ],
    },
    {
      icon: "/icons/cruise.svg",
      title: "Sunset Cruise",
      points: [
        "Peaceful boat ride during sunset",
        "Perfect for photos & romantic moments",
      ],
    },
    {
      icon: "/icons/pool.svg",
      title: "Private Pool",
      points: [
        "Stay in villas with private pools",
        "Great for relaxation & romantic photos",
      ],
    },
    {
      icon: "/icons/photo.svg",
      title: "Romantic Photoshoots",
      points: [
        "Professional shoots at scenic spots",
        "Beach, waterfalls, gardens & resorts",
      ],
    },
  ];
  return (
    <div>
        <HeroBannerTours  title="Bachelors Tours"
  description="A honeymoon is more than just a holiday—it’s the first chapter of your life together." />
        <Activites activitiesData={activitiesData} />
       <AboutPackage />
       <WhatWeOfferComponent images={images} />
         <BookPackage
                        title="Book Your Family Tour Now!"
                        bgImage="/img/BookingImage.png"
                    />
         <PopularPackages />
        <FaqSection />
    </div>
  )
}

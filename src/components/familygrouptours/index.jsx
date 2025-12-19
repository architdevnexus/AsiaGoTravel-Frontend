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



export const FamilyGroupTourComponent = () => {
    const images = [
        { src: "https://plus.unsplash.com/premium_photo-1666184129856-e421e3edc1db?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Group-friendly stays & transport", href: "/honeymoon-trips" },
        { src: "https://plus.unsplash.com/premium_photo-1718146019127-ebfb31a4af15?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91ciUyMGd1aWRlfGVufDB8fDB8fHww", text: "Expert guides & managers", href: "/family-holidays" },
        { src: "https://images.unsplash.com/photo-1522777642-5cd2999bca62?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Flexible plans for all", href: "/bachelor-tours" },
        { src: "https://plus.unsplash.com/premium_photo-1661537729535-7d06399fe95b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Visa & travel assistance", href: "/luxury-tours" },
        { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "End-to-end tour support", href: "/premium-holiday-packages" },
    ];

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
            <HeroBannerTours title="Multi-Generation & Large Family Tours"
                description="Perfect for large families and multi-generational groups. We handle the logistics, safety, and planning so you can focus on making memories together with guided tours and group-friendly accommodations." />
            <Activites activitiesData={activitiesData} title="Fun Activities to Do with Family" />
                <AboutPackage
              title="Family Group Holidays"
              description="Family Group Tours are specially designed for large families, multi-generation travelers, and groups looking to explore destinations together in a comfortable and well-organized manner. These tours focus on convenience, safety, group-friendly hotels, guided sightseeing, and seamless logistics. With planned itineraries, shared experiences, and dedicated support, family group tours make traveling together enjoyable, memorable, and stress-free."
              images={[
                "https://plus.unsplash.com/premium_photo-1664391877478-c81dd0d181ec?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1551559347-b2df2a690bd5?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/flagged/photo-1559425704-7bea20c777de?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ]}
            />
            <WhatWeOfferComponent images={images} />
            <BookPackage
                       title="Plan Your Next Family Group Tour"
                       description="Travel together, explore together, and create unforgettable memories. Contact us today to design a customized family group tour tailored to your group size, travel season, and budget."
                       bgImage="https://plus.unsplash.com/premium_photo-1664367173144-7e854e199524?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     />
            <PopularPackages />
            <FaqSection />
        </div>
    )
}

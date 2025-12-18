import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';
import { GiCandleLight, GiDiamondRing, GiSailboat } from 'react-icons/gi';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { BsSunrise } from 'react-icons/bs';
import { MdBeachAccess, MdMonochromePhotos, MdPhotoCamera, MdPhotoCameraBack, MdPool } from 'react-icons/md';
 


export const LuxuryComponent = () => {
      const images = [
    { src: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Tailor-made travel plans", href: "/honeymoon-trips" },
    { src: "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Luxury stays & villas", href: "/family-holidays" },
    { src: "/img/aboutimg5.jpg", text: "Private transfers & guides", href: "/bachelor-tours" },
    { src: "/img/aboutimg3.jpg", text: "Concierge & visa services", href: "/luxury-tours" },
    { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Personalized support throughout the journey", href: "/premium-holiday-packages" },
  ];

const activitiesData = [
  {
    icon: <GiDiamondRing />,
    title: "Fine Dining Experiences",
    points: [
      "Gourmet meals at luxury restaurants",
      "Curated menus with premium service",
    ],
  },
  {
    icon: <MdBeachAccess />,
    title: "Exclusive Beach Access",
    points: [
      "Private beach lounges & cabanas",
      "Premium seaside relaxation experience",
    ],
  },
  {
    icon: <TbMassage />,
    title: "Luxury Spa & Wellness",
    points: [
      "World-class spa & therapy sessions",
      "Relaxation treatments in premium resorts",
    ],
  },
  {
    icon: <GiSailboat />,
    title: "Private Yacht Cruise",
    points: [
      "Luxury yacht with sunset views",
      "Personalized service & refreshments",
    ],
  },
  {
    icon: <MdPool />,
    title: "Private Pool Villas",
    points: [
      "Stay in high-end private pool villas",
      "Elite comfort with stunning views",
    ],
  },
  {
    icon: <MdPhotoCameraBack />,
    title: "Premium Photoshoots",
    points: [
      "Professional luxury travel photography",
      "Iconic locations & curated backdrops",
    ],
  },
];


  return (
    <div>
        <HeroBannerTours  title="Indulge in Exclusive Experiences & World-Class Comfort"
  description="Curated luxury for the connoisseur. Our tours deliver exclusivity through bespoke journeys, private transfers, and impeccable stays. Discover a world of elegance, detail, and unparalleled comfort." />
        <Activites activitiesData={activitiesData}  title="Activities We Offer" />
         <AboutPackage
         title="Luxury Tours"
         description="Luxury tours are designed for discerning travelers who seek the finest experiences, personalized services, and unparalleled comfort. From opulent hotels and private transfers to bespoke itineraries and curated experiences, luxury travel is about exclusivity, elegance, and attention to detail. Whether it’s a royal heritage stay, a private island escape, or a tailor-made international journey, our luxury tours redefine travel in style."
         images={[
                     "https://images.unsplash.com/photo-1518860308377-800f02d5498a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

           "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
           "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
         ]}
       />
       <WhatWeOfferComponent images={images} />
       <BookPackage
              title="Experience Luxury Like Never Before"
              description="Let us craft a luxury journey that reflects your style and aspirations. Contact us today to design a tailor-made luxury tour with exclusive experiences, premium comfort, and flawless service."
              bgImage="https://images.unsplash.com/photo-1568115286680-d203e08a8be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
         <PopularPackages />
        <FaqSection />
    </div>
  )
}

import { AboutPackage } from '@/components/bachelor-tours/AboutPackage';
import { Activites } from '@/components/bachelor-tours/Activites';
import { BookPackage } from '@/components/bachelor-tours/BookPackage';
import { HeroBannerTours } from '@/components/bachelor-tours/HeroBannerTours';
import { FaqSection } from '@/components/global/Faq';
import { PopularPackages } from '@/components/landingpage/PopularTravel';
import { WhatWeOfferComponent } from '@/components/landingpage/WhatweOffer';
import React from 'react'

import { GiCandleLight } from 'react-icons/gi';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { BsSunrise } from 'react-icons/bs';
import { MdMonochromePhotos, MdPool } from 'react-icons/md';




 const PremiumHolidayPackage = () => {
    const images = [
        { src: "https://images.unsplash.com/photo-1669043962012-a5b8496cd664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Premium hotels & resorts", href: "/honeymoon-trips" },
        { src: "https://plus.unsplash.com/premium_photo-1663018215282-ef11af8fd8e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Personalized attentive service", href: "/family-holidays" },
        { src: "/img/aboutimg5.jpg", text: "Private transfers & guides", href: "/bachelor-tours" },
        { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Visa & travel assistance", href: "/luxury-tours" },
        { src: "https://images.unsplash.com/photo-1612257998531-70e0d0a15f6d?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Thoughtfully planned itineraries ", href: "/premium-holiday-packages" },
    ];

    // DYNAMIC DATA
const activitiesData = [
  {
    icon: <GiCandleLight />,
    title: "Premium Dining Experiences",
    points: [
      "Curated meals at top-rated restaurants",
      "Elegant ambience with personalized service",
    ],
  },
  {
    icon: <TbBeach />,
    title: "Scenic Leisure Time",
    points: [
      "Relax at pristine beaches or viewpoints",
      "Enjoy sunrise & sunset at premium locations",
    ],
  },
  {
    icon: <TbMassage />,
    title: "Wellness & Spa Sessions",
    points: [
      "Rejuvenating spa & wellness therapies",
      "Perfect for relaxation during the holiday",
    ],
  },
  {
    icon: <BsSunrise />,
    title: "Sunset Experiences",
    points: [
      "Sunset cruises or viewpoint visits",
      "Comfortable, peaceful evening moments",
    ],
  },
  {
    icon: <MdPool />,
    title: "Premium Stays & Pools",
    points: [
      "High-end hotels with pool access",
      "Comfort-focused stays with modern amenities",
    ],
  },
  {
    icon: <MdMonochromePhotos />,
    title: "Travel Photography",
    points: [
      "Capture memories at scenic locations",
      "Beautiful backdrops across the destination",
    ],
  },
];


    return (
        <div>
            <HeroBannerTours title="Refined Travel Experiences with Comfort, Style & Exclusivity"
                description="Premium holidays blend elegance with exceptional value. Enjoy curated comfort, handpicked hotels, and tailored experiences—perfect for refined leisure travelers, couples, and families." />
            <Activites activitiesData={activitiesData} title="Fun Activities to Do with Premium Holiday Packages" />
              <AboutPackage
                    title="Premium holidays"
                    description="Premium Holiday Gateways are curated for travelers who seek a perfect balance of comfort, elegance, and exclusive experiences—without being overly extravagant. These holidays feature handpicked premium hotels and resorts, personalized services, scenic destinations, and thoughtfully planned itineraries. Ideal for couples, families, and refined leisure travelers, premium holidays offer elevated travel experiences with excellent value and sophistication."
                    images={[
                      "https://plus.unsplash.com/premium_photo-1738099062448-7f6194176524?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1589129140837-67287c22521b?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1509721926668-25a8dd274c1b",
                    ]}
                  />
            <WhatWeOfferComponent images={images} />
            <BookPackage
                title="Elevate Your Next Holiday"
              description="Discover destinations that offer comfort, style, and memorable experiences. Contact us today to plan your Premium Holiday Gateway, customized to your preferred season, destination, and travel style."
                bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <PopularPackages />
            <FaqSection />
        </div>
    )
}

export default PremiumHolidayPackage;

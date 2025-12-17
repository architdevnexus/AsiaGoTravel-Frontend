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
        { src: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Premium hotels & resorts", href: "/honeymoon-trips" },
        { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Personalized attentive service", href: "/family-holidays" },
        { src: "/img/aboutimg5.jpg", text: "Private transfers & guides", href: "/bachelor-tours" },
        { src: "/img/aboutimg3.jpg", text: "Visa & travel assistance", href: "/luxury-tours" },
        { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Thoughtfully planned itineraries ", href: "/premium-holiday-packages" },
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
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
                      "https://images.unsplash.com/photo-1509721926668-25a8dd274c1b",
                    ]}
                  />
            <WhatWeOfferComponent images={images} />
            <BookPackage
                title="Elevate Your Next Holiday"
              description="Discover destinations that offer comfort, style, and memorable experiences. Contact us today to plan your Premium Holiday Gateway, customized to your preferred season, destination, and travel style."
                bgImage="/img/BookingImage.png"
            />
            <PopularPackages />
            <FaqSection />
        </div>
    )
}

export default PremiumHolidayPackage;

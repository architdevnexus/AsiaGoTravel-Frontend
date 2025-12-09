import React from 'react'
import { AboutUsComponent } from './HomeAboutUs'
import { WhatWeOfferComponent } from './WhatweOffer'
import { BestDestinationComponent } from './BestSelling'
import { PopularPackages } from './PopularTravel'
import { WhyChooseUs } from './WhyChooseUs'
import { HeroSection } from './HeroSection'
import HomePageSearchPackages from '../global/HomePageSearch'
import { Testimonial } from './Testimonial'


export const LandingPageComponent = () => {
    const images = [
    { src: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Honeymoon Trips", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Family Holidays", href: "/family-holidays" },
    { src: "/img/aboutimg5.jpg", text: "Bachelor Tours", href: "/bachelor-tours" },
    { src: "/img/aboutimg3.jpg", text: "Luxury Tours", href: "/luxury-tours" },
    { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Premium Holiday Packages", href: "/premium-holiday-packages" },
  ];
  return (
    <div>
        <HeroSection />
        <HomePageSearchPackages />
        <AboutUsComponent />
        <WhatWeOfferComponent images={images} />
        <BestDestinationComponent />
        <PopularPackages />
        <WhyChooseUs />
        <Testimonial />
    </div>
  )
}

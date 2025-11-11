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
  return (
    <div>
        <HeroSection />
        <HomePageSearchPackages />
        <AboutUsComponent />
        <WhatWeOfferComponent />
        <BestDestinationComponent />
        <PopularPackages />
        <WhyChooseUs />
        <Testimonial />
    </div>
  )
}

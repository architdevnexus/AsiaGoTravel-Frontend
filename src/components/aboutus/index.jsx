import React from 'react'
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer'
import { WhoWeAre } from './WhoWeAre'
import { TeamSection } from './SwiperMeetOurTeam'
import { HeroBannerAbout } from './HeroBannerAbout'
import ValuesMissionVision from './ValuesMissionVision'


export const AboutUsComponent = () => {
  return (
    <div>
        <HeroBannerAbout />
        <WhoWeAre />
      
        <TeamSection />
        <ValuesMissionVision />
          <WhatWeOfferComponent />
    </div>
  )
}

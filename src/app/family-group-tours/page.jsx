import { AllPackageComponent } from '@/components/allpackages'
import { HeroAllPackage } from '@/components/allpackages/HeroAllPackage';
import React from 'react'

 const CorporateTrips = ({ params }) => {
    const { slug } = params;
  return (
    <div>
          <HeroAllPackage
              title="Family Group Tour"
              description="Discover personalized travel experiences designed around you."
              imageSrc="/img/allpackagebg.png"
            />
      
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default CorporateTrips



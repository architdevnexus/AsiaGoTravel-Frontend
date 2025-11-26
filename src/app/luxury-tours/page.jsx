import { AllPackageComponent } from '@/components/allpackages'
import { HeroAllPackage } from '@/components/allpackages/HeroAllPackage';
import React from 'react'

 const WeekendGroupTrips = ({ params }) => {
    const { slug } = params;
  return (
    <div>
          <HeroAllPackage
              title="Luxury Tours"
              description="Discover personalized travel experiences designed around you."
              imageSrc="/img/allpackagebg.png"
            />
      
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default WeekendGroupTrips


import { AllPackageComponent } from '@/components/allpackages'
import { HeroAllPackage } from '@/components/allpackages/HeroAllPackage';
import React from 'react'

 const PremiumHolidayPackage = ({ params }) => {
    const { slug } = params;
  return (
    <div>
          <HeroAllPackage
              title="Premium Holiday Packages"
              description="Discover personalized travel experiences designed around you."
              imageSrc="/img/allpackagebg.png"
            />
      
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default PremiumHolidayPackage

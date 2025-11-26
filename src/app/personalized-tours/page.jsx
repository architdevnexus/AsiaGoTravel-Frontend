import { AllPackageComponent } from '@/components/allpackages'
import { HeroAllPackage } from '@/components/allpackages/HeroAllPackage';
import React from 'react'

 const PersonalizedTours = ({ params }) => {
    const { slug } = params;
  return (
    <div>
          <HeroAllPackage
              title="Personalized Tours"
              description="Discover personalized travel experiences designed around you."
              imageSrc="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
      
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default PersonalizedTours

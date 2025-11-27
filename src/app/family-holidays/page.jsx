import { AllPackageComponent } from '@/components/allpackages'
import { HeroAllPackage } from '@/components/allpackages/HeroAllPackage';
import React from 'react'

 const DomesticGroupTrips = ({ params }) => {
    const { slug } = params;
  return (
    <div>
          <HeroAllPackage
              title="Family Holiday Packages"
              description="Discover personalized travel experiences designed around you."
              imageSrc="https://images.unsplash.com/photo-1547948577-438c80482068?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
      
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default DomesticGroupTrips


import { AllPackageComponent } from '@/components/allpackages'
import { HeroAllPackage } from '@/components/allpackages/HeroAllPackage'
import React from 'react'

 const UpcomingGroupTrips = () => {
  return (
    <div>
          <HeroAllPackage
              title="HoneyMoon Trips"
              description="Discover personalized travel experiences designed around you."
              imageSrc="https://plus.unsplash.com/premium_photo-1683121054777-acb80e8c5dc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
      
        <AllPackageComponent  />
    </div>
  )
}

export default UpcomingGroupTrips

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
              imageSrc="https://images.unsplash.com/photo-1618168140399-bed9cc74ab72?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
      
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default WeekendGroupTrips


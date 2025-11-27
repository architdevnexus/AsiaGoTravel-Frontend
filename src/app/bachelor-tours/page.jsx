import { AllPackageComponent } from '@/components/allpackages'
import { HeroAllPackage } from '@/components/allpackages/HeroAllPackage';
import React from 'react'

 const BackpackingGroup = ({ params }) => {
    const { slug } = params;
  return (
    <div>
          <HeroAllPackage
              title="Bachelor Tour Packages"
              description="Discover personalized travel experiences designed around you."
              imageSrc="https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
      
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default BackpackingGroup

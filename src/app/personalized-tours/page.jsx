import { AllPackageComponent } from '@/components/allpackages'
import React from 'react'

 const PersonalizedTours = ({ params }) => {
    const { slug } = params;
  return (
    <div>
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default PersonalizedTours

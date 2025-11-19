import { AllPackageComponent } from '@/components/allpackages'
import React from 'react'

 const BackpackingGroup = ({ params }) => {
    const { slug } = params;
  return (
    <div>
         <AllPackageComponent slug={slug} />
    </div>
  )
}

export default BackpackingGroup

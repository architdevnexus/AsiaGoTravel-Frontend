import { HeroAllPackage } from '@/components/allpackages/HeroAllPackage'
import CareerJobComponent from '@/components/career'
import React from 'react'

 const Careerpage = () => {
  return (
    <div>
       <HeroAllPackage
                    title="Career Opportunities"
                    description="Work with a team that values ideas, growth, and innovation. Join us to make a difference in the travel industry."
                    imageSrc="https://plus.unsplash.com/premium_photo-1687653079484-12a596ddf7a9?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <CareerJobComponent />
    </div>
  )
}

export default Careerpage

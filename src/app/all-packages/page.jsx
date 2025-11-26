import { AllPackageComponent } from "@/components/allpackages";
import { HeroAllPackage } from "@/components/allpackages/HeroAllPackage";
import React from "react";

const AllPackage = ({ params }) => {
  const { slug } = params;
  return (
    <div>
          <HeroAllPackage
              title="Popular Travel Packages"
              description="Discover personalized travel experiences designed around you."
              imageSrc="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
      
      <AllPackageComponent slug={slug} />
    </div>
  );
};

export default AllPackage;

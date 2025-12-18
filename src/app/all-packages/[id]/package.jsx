"use client";

import { useEffect, useState } from "react";
import { getPackageById } from "@/components/services/getPackageById";
import OverviewSection from "@/components/allpackages/OverviewPackage";
import { PackageProductPage } from "@/components/allpackages/PackageProductPage";
import { useParams } from "next/navigation";
import { BestDestinationComponent } from "@/components/landingpage/BestSelling";
import NeedToKnow from "./NeedToKnow";

const PackageDetailPage = () => {
  const { id } = useParams();

  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetchPackageById();
  }, [id]);

  const fetchPackageById = async () => {
    const data = await getPackageById(id);

    console.log("afgnh" , data)

    setPackageData(data);
  };

  if (!packageData) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-5">
      <PackageProductPage
        images={packageData?.overviewCategory?.[0]?.images}
        title={packageData?.title}
      />

      <OverviewSection overviewData={packageData} />
      <NeedToKnow />
      <BestDestinationComponent />


    </div>
  );
};

export default PackageDetailPage;

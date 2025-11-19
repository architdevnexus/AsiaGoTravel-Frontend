"use client";

import { useEffect, useState } from "react";
import { getPackageById } from "@/components/services/getPackageById";
import OverviewSection from "@/components/allpackages/OverviewPackage";
import { PackageProductPage } from "@/components/allpackages/PackageProductPage";
import { useParams } from "next/navigation";

const BackPackingSlugPage = ({ params }) => {
  const { id } = useParams();

  console.log("Page Param ID:", id);

  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetchPackageById();
  }, [id]);

  const fetchPackageById = async () => {
    const data = await getPackageById(id);
    console.log(data, "Package by ID");
    setPackageData(data);
  };

  if (!packageData) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-5">
      {/* ✅ Image Slider */}
      <PackageProductPage
        images={packageData?.images}
        title={packageData?.title}
      />

      {/* ✅ Overview Section */}
      <OverviewSection overviewData={packageData} />
    </div>
  );
};

export default BackPackingSlugPage;

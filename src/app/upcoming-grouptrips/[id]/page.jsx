import OverviewSection from "@/components/allpackages/OverviewPackage";
import { PackageProductPage } from "@/components/allpackages/PackageProductPage";
import React from "react";

const PackageSlugPage = ({ params }) => {
  const { slug } = params;

  // Example data map for multiple slugs
  const packageData = {
    kerala: {
      title: "OVERVIEW !",
      description:
        "Experience the serene beauty of Kerala with this 6-day journey through Munnar, Thekkady, and Alleppey.",
      itinerary: [
        {
          title: "Arrival at Kochi",
          details: [
            "Arrive at Kochi Airport / Railway Station.",
            "Meet and greet by our representative.",
            "Visit Fort Kochi, Dutch Palace, and Marine Drive.",
          ],
        },
        {
          title: "Kochi to Munnar (130 km / 4 hrs)",
          details: ["Enjoy scenic drive", "Check-in at hotel", "Leisure time"],
        },
      ],
      inclusions: [
        "Accommodation in 3★ / 4★ hotels",
        "Daily breakfast",
        "Private AC vehicle for transfers",
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Personal expenses",
        "Entry fees at monuments",
      ],
      summary: [
        "Explore Kochi, Munnar, Thekkady, and Alleppey.",
        "Enjoy backwaters, tea gardens, and wildlife.",
      ],
      priceDetails: {
        amount: "28,999",
        perPersonText: "Per Person on Triple Sharing Occupancy",
        options: [
          { label: "Double", active: true },
          { label: "Triple", active: false },
        ],
      },
    },
    kashmir: {
      title: "OVERVIEW !",
      description:
        "Explore the paradise on earth — Kashmir, with scenic valleys, Dal Lake, and snow-capped mountains.",
      itinerary: [
        { title: "Arrival at Srinagar", details: ["Welcome & Shikara ride"] },
        {
          title: "Gulmarg Visit",
          details: ["Cable car ride", "Snow activities", "Dinner at hotel"],
        },
      ],
      inclusions: [
        "4-star stay with breakfast and dinner",
        "Shikara ride on Dal Lake",
      ],
      exclusions: ["Airfare", "Personal expenses"],
      summary: [
        "Visit Srinagar, Gulmarg, and Pahalgam.",
        "Experience snow and natural beauty.",
      ],
      priceDetails: {
        amount: "34,999",
        perPersonText: "Per Person on Twin Sharing",
        options: [
          { label: "Double", active: true },
          { label: "Triple", active: false },
        ],
      },
    },
  };

  // Get data based on slug, or fallback
  const overviewData = packageData[slug] || {
    title: "Package Not Found",
    description: "Sorry, we couldn’t find details for this package.",
  };

  return (
    <div>
      <PackageProductPage />
      <OverviewSection overviewData={overviewData} />
    </div>
  );
};

export default PackageSlugPage;

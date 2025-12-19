"use client";

import { HolidayCard } from "../global/HolidayCard";


export default function PackageList({ filteredPackages, slug, loading }) {
  return (
    <div className="p-3 md:p-10 lg:p-20">
      <HolidayCard
        grid="grid-cols-1 md:grid-cols-2 gap-9"
        packages={filteredPackages.flatMap((pkg) => pkg.Packages || [])}
        slug={slug}
        loading={loading}
      />
    </div>
  );
}

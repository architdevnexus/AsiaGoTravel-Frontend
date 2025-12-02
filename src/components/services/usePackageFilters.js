"use client";
import { useEffect, useState } from "react";
import { getAllPackages } from "../services/getAllPackages";

export default function usePackageFilters(destination, filters, activeTab) {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const res = await getAllPackages();
      const data = res?.data || [];
      setPackages(data);
      applyFilters(data, activeTab);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (allPackages, tab = activeTab) => {
    let result = allPackages;

    // Domestic / International Filter
    result = result.filter((pkg) =>
      tab === "domestic"
        ? pkg.tripCategory === "DomesticTrips"
        : pkg.tripCategory === "InternationalTrips"
    );

    // Search Filter
    result = result.map((pkg) => {
      const nested = pkg?.Packages?.filter((p) =>
        filters
          ? p.title.toLowerCase().includes(filters.toLowerCase())
          : true
      );
      return { ...pkg, Packages: nested };
    });

    // Destination Filter
    if (destination) {
      result = result.filter((pkg) =>
        pkg?.Packages?.some((p) =>
          p.location?.toLowerCase().includes(destination.toLowerCase())
        )
      );
    }

    // Remove Empty
    result = result.filter((pkg) => pkg.Packages?.length > 0);

    setFilteredPackages(result);
  };

  // Refilter when query/tab changes
  useEffect(() => {
    if (packages.length > 0) {
      applyFilters(packages, activeTab);
    }
  }, [destination, filters, activeTab]);

  return { filteredPackages, loading, setFilteredPackages };
}

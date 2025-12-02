"use client";
import { useEffect, useState } from "react";

export default function useQueryParams() {
  const [destination, setDestination] = useState("");
  const [filters, setFilters] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = new URLSearchParams(window.location.search);
      setDestination(query.get("destination") || "");
      setFilters(query.get("search") || "");
    }
  }, []);

  return { destination, filters };
}

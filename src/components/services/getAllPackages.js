// services/getAllPackages.js
export const getAllPackages = async () => {
  try {
    const res = await fetch("https://backend.asiagotravels.com/api/allPackage", {
      method: "GET",
    });

    if (!res.ok) throw new Error("Failed to fetch packages");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching packages:", error);
    return [];
  }
};




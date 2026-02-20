// services/getAllPackages.js
export const getAllPackages = async () => {
  // // console.log(process.env.NEXT_PUBLIC_BASE_URL);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allPackage`, {
      method: "GET",
    });

    if (!res.ok) throw new Error("Failed to fetch packages");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching packages:", error);
    return [];
  }
};;

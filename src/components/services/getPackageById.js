export const getPackageById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/allPackage/${id}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    const data = await res.json();
    // console.log(data, "aspjfeiu");

    return data?.data || {};
  } catch (err) {
    console.log("❌ Error fetching package:", err);
    return {};
  }
};

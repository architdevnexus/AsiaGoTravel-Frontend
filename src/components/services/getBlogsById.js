export const getBlogseById = async (id) => {
  try {
    const res = await fetch(`https://backend.asiagotravels.com/api/AllBlog/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    console.log(data, 'blogdata')
    return data?.data || {};
  } catch (err) {
    console.log("❌ Error fetching package:", err);
    return {};
  }
};

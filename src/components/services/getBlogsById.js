export const getBlogseById = async (id) => {
  try {
    const res = await fetch(`http://194.238.18.1:3005/api/AllBlog/${id}`, {
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

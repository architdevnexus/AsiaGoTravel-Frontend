"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogseById } from "@/components/services/getBlogsById";
import { BlogContent, BlogsProductPage } from "@/components/blogs/BlogsProduct";

const BlogSlugPage = () => {

  const { id } = useParams();

  console.log("Page Param ID:", id);

  // const [blogsData, setBlogData] = useState(null);

  // useEffect(() => {
  //   if (!id) return;
  //   fetchPackageById();
  // }, [id]);

  // const fetchPackageById = async () => {
  //   const data = await getBlogseById(id);
  //   console.log(data, "Package by ID");
  //   setBlogData(data);
  // };

  // if (!blogsData) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-5">
   <BlogContent   />
    </div>
  );
};

export default BlogSlugPage;

"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export const BlogContent = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  console.log("fvhdf", blog?.blog?.title);

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const res = await fetch(
          `https://backend.asiagotravels.com/api/AllBlog/${id}`,
          { cache: "no-store" }
        );
        const data = await res.json();

        console.log(data, "blogsdata");

        // FIX HERE 🔥
        setBlog(data);
      } catch (error) {
        console.log("Error fetching blog:", error);
      }
    };

    if (id) fetchBlogById();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <div className="relative h-[450px] w-full">
        <Image
          src={blog?.blog?.featureImage || ""}
          alt="Blog banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <h1 className="text-4xl w-[50%] font-bold leading-snug text-white ml-18 mt-10">
            {blog.blog.blogtitle}
          </h1>
        </div>
      </div>

      <div className="p-6 max-w-5xl mx-auto pt-8">
        <div
          className="prose prose-lg leading-10 text-lg px-14 pt-5"
          dangerouslySetInnerHTML={{
            __html: blog.blog.blogContent?.replace(
              /<img /g,
              '<img style="display:block; margin:20px auto; width:80%; max-width:600px;" '
            ),
          }}
        />
      </div>
    </div>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import { BlogsCard } from "./BlogsCard";
import TrendingPosts from "./TrendingPost";
import { getAllBlogs } from "../services/getAllBlogs";

export const BlogsComponent = ({ slug }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await getAllBlogs();
    setBlogs(res?.blogs || []);
  };

  return (
    <section className="bg-[#f7fafc] py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {/* LEFT BLOG LIST */}
        <div className="flex-1">
          <BlogsCard
            grid="grid-cols-1 md:grid-cols-2 gap-12"
            blogs={blogs}
            slug={slug}
          />
        </div>

        {/* RIGHT STICKY TRENDING BLOG */}
        <div className="w-full lg:w-[380px]">
          <div className="lg:sticky lg:top-32">
            <TrendingPosts blogs={blogs} />
          </div>
        </div>

      </div>
    </section>
  );
};

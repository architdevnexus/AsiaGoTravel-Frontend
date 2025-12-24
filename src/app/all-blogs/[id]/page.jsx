"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getAllBlogs } from "@/components/services/getAllBlogs";
import { BlogContent } from "@/components/blogs/BlogsProduct";
import TrendingPosts from "@/components/blogs/TrendingPost";

const BlogSlugPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await getAllBlogs();
    setBlogs(res?.blogs || []);
  };

  return (
    <div className="p-8">
      {/* ====== BACK BUTTON ====== */}
      <div className="flex items-center gap-1 mb-6 bg-[#0E3A55] text-white items-center w-30 cursor-pointer">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 cursor-pointer  rounded-lg"
        >
          ←
        </button>
        Back
      </div>

      <div className="flex gap-15">
        {/* Main Content */}
        <div className="border border-[#c1d6e7] p-6 rounded-xl w-full">
          <BlogContent />
        </div>

        {/* Sticky Trending Sidebar */}
        <div className="w-full lg:w-[520px] sticky top-22 h-fit">
          <TrendingPosts blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default BlogSlugPage;

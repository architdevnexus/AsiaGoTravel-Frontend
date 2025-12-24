"use client";
import Image from "next/image";
import Link from "next/link";

export default function TrendingPosts({ blogs = [] }) {
  return (
    <div className="max-w-sm rounded-2xl border border-[#c1d6e7] bg-white p-5 mt-10 shadow-sm max-h-[560px] overflow-y-auto">

      {/* Title */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-2 h-6 rounded-full bg-[#1a73e8]"></div>
        <h2 className="text-xl font-semibold text-[#0d2b45]">
          Trending Blogs
        </h2>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {blogs.length > 0 ? (
          blogs.map((post) => (
            <Link
              key={post._id}
              href={`/all-blogs/${post._id}`}
              className="flex items-start gap-4 hover:bg-gray-50 p-2 rounded-lg transition"
            >
              <Image
                src={post.featureImage}
                width={70}
                height={50}
                alt={post.title}
                className="rounded-md object-cover shrink-0"
              />

              <div>
                <p className="font-medium text-gray-800 line-clamp-2">
                  {post.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {post.createdAt?.split("T")[0] ?? "No date"}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-sm text-gray-400">No trending blogs found</p>
        )}
      </div>

    </div>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // ✅ ADD THIS
      },
        {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

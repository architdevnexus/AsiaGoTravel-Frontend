export const GallerySkeleton = () => (
  <div className="relative">
    {/* Skeleton Layout */}
    <div className="flex gap-3 px-0 md:px-12 opacity-70">
      {/* Left Large */}
      <div className="bg-gray-300 animate-pulse rounded-lg
        w-[260px] h-[200px]
        md:w-[320px] md:h-[260px]
        lg:w-[400px] lg:h-[325px]" />

      {/* Middle stacked */}
      <div className="hidden md:flex flex-col gap-2">
        <div className="bg-gray-300 animate-pulse rounded-lg
          w-[240px] h-[120px] lg:w-[300px] lg:h-40" />
        <div className="bg-gray-300 animate-pulse rounded-lg
          w-[240px] h-[120px] lg:w-[300px] lg:h-40" />
      </div>

      {/* Right Large */}
      <div className="bg-gray-300 animate-pulse rounded-lg
        w-[260px] h-[200px]
        md:w-[320px] md:h-[260px]
        lg:w-[400px] lg:h-[325px]" />
    </div>

    {/* Message Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="bg-white/90 text-gray-700 text-sm md:text-base px-4 py-2 rounded-lg shadow">
        No images found
      </p>
    </div>
  </div>
);

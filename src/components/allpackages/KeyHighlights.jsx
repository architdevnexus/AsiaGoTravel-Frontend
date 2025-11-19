import Image from "next/image";

const highlights = [
  {
    img: "/img/tea-garden.jpg",
    text: "Scenic drive through tea garden",
    badge: "K",
  },
  { img: "/img/houseboat.jpg" },
  { img: "/img/hill.jpg" },
  { img: "/img/citrus.jpg" }, 
  { img: "/img/travel.jpg" },
];

export default function KeyHighlights() {
  return (
    <section className="w-full bg-[#F3F8FE] py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-transparent stroke-text mb-8">
          KEY HIGHLIGHTS
        </h2>

        {/* Cards Container */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-3">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="relative min-w-[220px] h-[80px] rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <Image
                src={item.img}
                alt={item.text || "highlight"}
                fill
                className="object-cover"
              />

              {/* Overlay text + badge only for first */}
              {item.text && (
                <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                  <div className="text-white text-sm font-semibold flex items-center gap-2">
                    {item.text}
                    {item.badge && (
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold text-xs">
                        {item.badge}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

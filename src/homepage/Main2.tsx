export default function Main2() {
  const logos = [
    { name: "Google", slug: "google" },
    { name: "Apple", slug: "apple" },
    { name: "Facebook", slug: "facebook" },
    { name: "Tesla", slug: "tesla" },
    { name: "Intel", slug: "intel" },
  ];

  return (
    <div className="min-h-[60vh] flex flex-col items-center overflow-hidden bg-gray-50">
      {/* Heading */}
      <div className="p-6">
        <div className="bg-gradient-to-bl w-max mt-4 py-3 px-5 rounded-full from-[#141e30] to-[#35577d] text-white text-lg font-semibold">
          Our students work at...
        </div>
      </div>

      {/* Top Row */}
      <div className="w-full overflow-hidden mb-8">
        <div className="flex marquee space-x-8">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="bg-zinc-100 h-24 w-40 rounded-xl flex items-center justify-center  flex-shrink-0"
            >
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}/888888`}
                alt={`${logo.name} logo`}
                className="h-8 w-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row (reverse direction) */}
      <div className="w-full overflow-hidden">
        <div className="flex marquee-reverse space-x-8">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="bg-zinc-100 h-24 w-40 rounded-xl flex items-center justify-center  flex-shrink-0"
            >
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}/888888`}
                alt={`${logo.name} logo`}
                className="h-8 w-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        .marquee {
          animation: marquee 20s linear infinite;
        }
        .marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
        .marquee:hover,
        .marquee-reverse:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}

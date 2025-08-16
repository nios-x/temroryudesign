export default function Main2() {
  const logos = Array(6).fill(0); // 6 per row

  return (
    <div className="min-h-[60vh] flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <div className="block p-6">
        <div className="bg-gradient-to-bl w-max h-max mt-4 py-3 px-5 rounded-full from-[#dbfff8] to-[#edffd6]">
          We Work With
        </div>
      </div>

      {/* Top Row */}
      <div className="w-full overflow-hidden mb-8">
        <div className="flex marquee space-x-8">
          {[...logos, ...logos].map((_, i) => (
            <div
              key={i}
              className="bg-zinc-100 h-24 w-40 rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Bottom Row (reverse direction) */}
      <div className="w-full overflow-hidden">
        <div className="flex marquee-reverse space-x-8">
          {[...logos, ...logos].map((_, i) => (
            <div
              key={i}
              className="bg-zinc-100 h-24 w-40 rounded-xl flex-shrink-0"
            />
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
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}

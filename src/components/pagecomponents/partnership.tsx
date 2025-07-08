import React from "react";

const logos = [
  "/pngs/partnership/solana-foundation.png",
  "/pngs/partnership/superteam.png",
  "/pngs/partnership/crossmint.png",
  "/pngs/partnership/jupiter.png",
  "/pngs/partnership/pajcash.png",
  "/pngs/partnership/airbills.png",
];

const Partnership = () => {
  return (
    <div className="w-full py-10">
      <div className="overflow-hidden relative group">
        {/* Marquee container */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {logos.map((logo, i) => (
            <img
              key={`main-${i}`}
              src={logo}
              alt={`Partner ${i}`}
              className="h-8 mx-6 transition duration-300"
            />
          ))}
          {logos.map((logo, i) => (
            <img
              key={`clone-${i}`}
              src={logo}
              alt={`Partner clone ${i}`}
              className="h-8 mx-6 transition duration-300"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Partnership;

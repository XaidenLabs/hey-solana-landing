"use client";

const carouselItems = [
  {
    item: "Access multiple chains in one wallet without hassle",
    image: "/pngs/carousel1.png",
    color: "#AFFFB8",
  },
  {
    item: "Manage and showcase your NFTs easily",
    image: "/pngs/audiowave.png",
    color: "#F2BAFF",
  },
  {
    item: "Swap tokens at the command of your voice",
    image: "/pngs/audiowave.png",
    color: "#FCFFC3",
  },
  {
    item: "Get market insights, just start with “Hey Solana”",
    image: "/pngs/audiowave.png",

    color: "#B6B9FF",
  },
  {
    item: "Get market insights, just start with “Hey Solana”",
    image: "/pngs/audiowave.png",

    color: "#D8D8D8",
  },
];
export default function CarouselSegment() {
  return (
    <div className="w-screen bg-gradient-to-b py-10 from-black/10 backdrop-blur-sm to-black z-50 relative">
      <div className="md:space-y-10">
        <div className="relative w-10/12 m-auto  flex flex-row justify-between items-center">
          <div className="bg-darkpink rounded-3xl p-2 text-white">
            <h2>Still your wallet but on steriods</h2>
          </div>
          <div className="bg-white/30 backdrop-blur-sm"></div>
        </div>

        <div className="overflow-x-scroll w-screen md:left-20 relative ">
          <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5 p-2 relative md:left-20 ">
            {carouselItems.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`h-[300px] md:h-[400px] relative w-11/12 m-auto md:max-width-[300px] rounded-2xl px-5 text-black `}
                  style={{ backgroundColor: item.color }}
                >
                  <div className="py-10 text-[24px]">{item.item}</div>

                  <div
                    className={`${
                      index == 0 ? "bottom-0 " : "bottom-10 left-0"
                    } absolute`}
                  >
                    <img src={item.image} alt={item.image} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

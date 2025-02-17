import Image from "next/image";

const items = [
  {
    title: "Phase 1",
    tag: "MVP Launch",
    sub_title: `
            Basic voice commands for seamless transactions and token swaps.
            Focus on providing a simple and intuitive user experience.
            Strong blockchain integration to ensure security and efficiency.`,
    status: "completed",
  },
  {
    title: "Phase 2",
    tag: "AI Expansion",
    sub_title: `
              Advanced AI capabilities for improved voice recognition and reduced errors.
              Introduction of multi-language support for global accessibility.
              Enhanced personalization to cater to individual user preferences and behaviors.`,
    status: "completed",
  },
  {
    title: "Phase 3",
    tag: "DeFi Integration",
    sub_title: `
              Collaboration with DeFi protocols to enable staking, lending, and yield farming.
              Seamless access to decentralized financial products through voice commands.
              Expanded features for power users, including advanced analytics and real-time insights.`,
    status: "completed",
  },
  {
    title: "Phase 4",
    tag: "Ecosystem Growth",
    sub_title: `
Launch marketing campaigns to onboard a wider user base.
Continuous feature development based on user feedback.
Strengthen partnerships within the Solana ecosystem to enhance platform utility.`,
    status: "active",
  },
];

export default function RoadMap() {
  return (
    <div className="bg-black/80">
      <div className="w-10/12 m-auto py-10">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[40px] text-white font-bold">Road map</h2>
          <p className="text-[#666666]">Implementation plans</p>
        </div>

        {/* Roadmap Cards */}
        <div className="flex justify-center items-center gap-4">
          {items.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={`w-full sm:w-[288px] md:w-[320px] h-[400px] border ${item.status == "completed"
                    ? "border-darkpink bg-darkpink/10"
                    : "border-green-600 bg-green-600/10"
                  } rounded-2xl p-6 flex flex-col items-start space-y-4 shadow-lg`}
              >
                {/* Status Icon */}
                <div
                  className={`rounded-full border ${item.status == "completed"
                      ? "border-darkpink"
                      : "border-green-600"
                    } h-[40px] w-[40px] flex justify-center items-center`}
                >
                  <div
                    className={`rounded-full ${item.status == "completed"
                        ? "bg-darkpink"
                        : "bg-green-600"
                      } h-[15px] w-[15px]`}
                  ></div>
                </div>

                {/* Content */}
                <div className="text-start ">
                  <div className=" h-[100] mt-10">

                  <p className="text-[24px] font-bold text-white mb-2">
                    {item.title}
                  </p>
                  <p className="text-footergrey font-semibold text-[18px] mb-4">
                    {item.tag}
                  </p>
                  </div>

                  <p className="text-[#666666] text-[16px] leading-tight">
                    {item.sub_title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

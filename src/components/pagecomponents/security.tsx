import Image from "next/image";

const items = [
  {
    title: "Non-custodial storage",
    sub_title: "You have full control of your private keys.",
    image: "/gifs/phoneunlock.gif",
    bgcolor: "#E8FFCA",
  },
  {
    title: "Biometric and passcode protection",
    sub_title: "Multi-layer security for peace of mind.",
    image: "/gifs/fingerprint.gif",
    bgcolor: "#223806",
  },
  {
    title: "Privacy-first voice technology",
    sub_title: "Your commands are saved locally for maximum security.",
    image: "/gifs/phonefolder.gif",
    bgcolor: "#E8FFCA",
  },
];

export default function Security() {
  return (
    <div className="bg-black/80">
      <div className="w-10/12 m-auto py-5 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-start py-10">
          <div className="md:min-w-[389px] p-3">
            <h5 className="text-[40px] text-white">
              Your Security Is Our Priority
            </h5>
            <p className="text-[24px] text-white">
              Fast, Secure and Built for Solana
            </p>
            <p className="text-[18px] text-[#666666]">
              Designed for Solana's lightning-fast & secure blockchain network.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start space-y-5 md:space-y-0 md:space-x-5">
            {items.map((item: any, index: number) => (
              <div
                key={index}
                className="min-w-[250px] hover:bg-white/10 backdrop-blur-sm p-4 flex flex-row md:flex-col items-start gap-x-4 md:gap-y-5 rounded-2xl"
              >
                <div
                  className="w-[100px] h-[100px] flex items-center justify-center rounded-2xl"
                  style={{ backgroundColor: item.bgcolor }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[60px] h-[60px]"
                  />
                </div>

                <div className="flex flex-col justify-start">
                  <p className="text-[20px] font-[500] text-white mb-2">
                    {item.title}
                  </p>
                  <p className="text-[16px] text-[#666666]">{item.sub_title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

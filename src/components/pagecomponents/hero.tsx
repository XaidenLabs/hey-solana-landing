"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable
);

export default function Hero() {
  useGSAP(() => {
    gsap.from('.firstImage', {
        scrollTrigger: {
            trigger: '.phoneScreen',
            toggleActions: "restart pause reverse pause",
            scrub: true,
        },
        left: -150,
        duration: 1,
    });

    gsap.from('.secondImage', {
        scrollTrigger: {
            trigger: '.secondImage',
            toggleActions: "restart pause reverse pause",
            scrub: true,
        },
        right: -150,
        duration: 1,
    });

  }, {});
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <div className=" text-center py-10">
        <h1 className="text-[100px] font-[500] leading-tight">
          Your AI, Your Wallet
        </h1>
        <p className="text-[64px] text-white/60">
          With Hey Solana It's{" "}
          <span className="text-darkpink border border-green-700 border-5">
            Hands Free
          </span>
        </p>
        <p className="text-[24px] w-7/12 m-auto">
          Manage your assets, trade, and get real-time insights. Just say, — Hey
          Solana.
        </p>
      </div>
      <div className="w-[960px] relative phoneScreen">
        <img src="/pngs/phones.png" alt="phones" />
        
        <div className="firstImage hover:scale-[1.3] transition-all ease-in-out absolute top-10 backdrop-blur-sm left-[-100px]">
          <img height={463} width={366} src="/pngs/sendsol.png" alt="textImg" />
        </div>
        <div className="secondImage hover:scale-[1.3] transition-all ease-in-out absolute top-[30%] backdrop-blur-sm right-0 ">
          <img height={316} width={267} src="/pngs/heysol.png" alt="textImg" />
        </div>
      </div>
    </div>
  );
}

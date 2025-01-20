"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import Navigation from "../Navigation";
import { ArrowOutward } from "@mui/icons-material";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable
);

export default function Hero() {
  useGSAP(() => {
    gsap.from(".firstImage", {
      scrollTrigger: {
        trigger: ".phoneScreen",
        toggleActions: "restart pause reverse pause",
        scrub: true,
      },
      left: -150,
      duration: 1,
    });

    gsap.from(".secondImage", {
      scrollTrigger: {
        trigger: ".secondImage",
        toggleActions: "restart pause reverse pause",
        scrub: true,
      },
      right: -150,
      duration: 1,
    });
  }, {});
  return (
    <div className=" bg-[url('/pngs/hero.png')] bg-cover flex flex-col justify-center items-center min-h-screen text-white">
      <div className="w-screen">
        <Navigation />
      </div>

      <div className=" text-center py-10 space-y-3">
        <h1 className="text-[50px] md:text-[100px] font-[500] leading-tight">
          Your AI, Your Wallet
        </h1>
        <p className="text-[32px] md:text-[64px] text-white/60">
          With Hey Solana It's{" "}
          <span className="text-darkpink border border-green-700 border-5">
            Hands Free
          </span>
        </p>
        <p className="text-[12px] md:text-[24px] w-7/12 m-auto">
          Manage your assets, trade, and get real-time insights. Just say, — Hey
          Solana.
        </p>

        <div className="py-5 flex flex-row justify-center">
          <button className="bg-gradient-to-b  w-[200px] flex flex-row items-center justify-center from-lightpink to-darkpink  border-2 border-lightpink/20 border-t-darkpink rounded-full p-2 bg-darkpink">
            Join the waitlist <ArrowOutward />
          </button>
        </div>
      </div>
      <div className="w-screen md:w-[960px]  m-auto relative phoneScreen">
        <div className="flex flex-row justify-center items-center">
          <img
            className="w-[200px] md:w-[459px]"
            src="/pngs/phone1.png"
            alt="phones"
          />
          <img
            className="w-[150px] md:w-[419px]"
            src="/pngs/phone2.png"
            alt="phones"
          />
        </div>
        <div className="relative">
          <img
            className="md:w-[1000px] absolute bottom-[-200px] md:bottom-[-400px] "
            src="/pngs/voicepulser.png"
            alt="phones"
          />
          <div className="h-[500px] bg-black z-50 w-screen absolute left-0 border"></div>
        </div>
        <div className="firstImage hover:scale-[1.3] transition-all  max-w-[100px] md:w-[366px] ease-in-out absolute top-10 backdrop-blur-sm left-[-100px]">
          <img
            className="max-w-[100px] md:max-w-[366px] max-h-[200px] md:h-[463px]"
            src="/pngs/sendsol.png"
            alt="textImg"
          />
        </div>
        <div className="secondImage hover:scale-[1.3] transition-all ease-in-out absolute top-[30%] backdrop-blur-sm right-0 ">
          <img height={316} width={267} src="/pngs/heysol.png" alt="textImg" />
        </div>
      </div>
    </div>
  );
}

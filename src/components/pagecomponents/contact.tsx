import React from "react";
import FloatingLabelInput from "@/components/component/FloatingLabelInput";
import FloatingLabelTextarea from "@/components/component/FloatingLabelTextarea";
import { ArrowOutward } from "@mui/icons-material";

export default function Contact() {
  return (
    <div className="bg-[url('/pngs/contactbg.png')] w-full max-w-[856px] h-auto bg-cover flex flex-col text-white p-6 sm:p-8 md:p-10 border-none rounded-[28px] gap-4">
      <h1 className="text-2xl sm:text-3xl font-extrabold">Build with HeySolana</h1>
      <p className="text-base sm:text-lg">
        Integrate your Web3 solution and go voice-first.
      </p>
      <p className="text-sm sm:text-base text-gray-400">
        Join the growing ecosystem of developers bringing seamless, AI-powered
        voice access to their dApps. Book a call to explore how your product can
        live inside HeySolana’s assistant and reach users in an entirely new
        way.
      </p>

      <form action="">
        {/* Stack inputs on small screens, side-by-side on medium and up */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <FloatingLabelInput
            label="Name"
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <FloatingLabelInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter Email"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <FloatingLabelTextarea
            label="Message"
            name="message"
            placeholder="Enter your message"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-gradient-to-b w-full sm:w-[200px] flex items-center justify-center from-lightpink to-darkpink border-2 border-lightpink/20 border-t-darkpink rounded-full p-2">
            Submit <ArrowOutward />
          </button>
        </div>
      </form>
    </div>
  );
}

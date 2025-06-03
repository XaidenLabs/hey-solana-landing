import React from "react";
import FloatingLabelInput from "@/components/component/FloatingLabelInput";
import FloatingLabelTextarea from "@/components/component/FloatingLabelTextarea";
import { ArrowOutward } from "@mui/icons-material";

import { Textarea } from "@heroui/input";

export default function Contact() {
  return (
    <div className="bg-[url('/pngs/contactbg.png')] w-[856px] h-[628px] bg-cover flex flex-col text-white p-10 border-none rounded-[28px] gap-2">
      <h1 className="text-3xl font-extrabold">Build with HeySolana</h1>
      <p className="text-lg">
        Integrate your Web3 solution and go voice-first.
      </p>
      <p className="text-gray-400">
        Join the growing ecosystem of developers bringing seamless, AI-powered
        voice access to their dApps. Book a call to explore how your product can
        live inside HeySolana’s assistant and reach users in an entirely new
        way.
      </p>

      <form action="">
        <div className="flex gap-4 mt-16">
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

        <a href="#" className="py-5 flex flex-row justify-end" target="blank">
          <button className="bg-gradient-to-b  w-[200px] flex flex-row items-center justify-center from-lightpink to-darkpink  border-2 border-lightpink/20 border-t-darkpink rounded-full p-2 bg-darkpink">
            Submit <ArrowOutward />
          </button>
        </a>
      </form>
    </div>
  );
}

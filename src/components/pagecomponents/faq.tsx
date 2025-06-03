"use client";
import {
  Add,
  ArrowDownward,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Remove,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const landingfaqs = [
  {
    title: "What's HeySolana?",
    text: "HeySolana is an AI-driven voice assistant designed to enhance transactions on the Solana blockchain through hands-free interactions. It simplifies decentralized finance (DeFi) activities by allowing users to perform transactions, analyze portfolios, and receive real-time market insights using voice commands.",
  },
  {
    title: "How does HeySolana work?",
    text: "HeySolana utilizes Progressive Web App (PWA) technology combined with advanced natural language processing (NLP) to facilitate seamless interactions. Users can issue voice commands to perform various tasks such as swapping tokens, scheduling transactions, and receiving personalized financial recommendations.",
  },
  {
    title: "What technology powers HeySolana?",
    text: "HeySolana is built on the Solana blockchain, which provides ultra-fast and low-cost transactions. It employs state-of-the-art NLP for voice recognition and end-to-end encryption to ensure user data and transaction security.",
  },
  {
    title: "How does HeySolana enhance user experience in DeFi?",
    text: "By integrating AI-powered voice assistance, HeySolana simplifies complex DeFi operations, making it easier for users to engage with staking, lending, and yield farming through intuitive voice commands. This democratizes access to financial tools for users without technical backgrounds.",
  },
];
const Faqs = () => {
  let path = usePathname();
  const [selectedFaq, setSelectedFaq] = useState(0);
  const faqs = landingfaqs;
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 m-auto md:flex-row text-white justify-center items-start md:space-x-24 py-5 md:py-10">
      <div className="">
        <div className="flex flex-col md:space-y-4">
          <div className="font-daysans text-[32px]">FAQs</div>

          <div className=" text-[16px] md:text-[32px] w-7/12 md:w-[300px]">
            Find your answers here
          </div>

          <div className="space-y-5 hidden md:inline">
            <div className="font-sans text-vivd-lime-green-10 text-sm md:w-[400px]">
              If there are any questions not answered here, please join the
              Discord community to request for further assistance.
            </div>

            <button className="border buttonTracker border-darkpink rounded-xl px-6 py-3 w-fit">
              <a
                href="#"
                target="_blank"
                className="font-sans buttonTracker text-vivd-lime-green-10 text-sm"
              >
                Join Discord Community
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full my-5">
        {faqs.map((item: any, index: number) => {
          return (
            <Accordion
              key={index}
              onChange={() => {
                setSelectedFaq(index);
              }}
              expanded={selectedFaq == index ? true : false}
              defaultExpanded={index == 0 ? true : false}
              sx={{ background: "#ffffff10", boxShadow: "0px" }}
              className="border-0 border-[#52594B]"
            >
              <AccordionSummary
                className="bg-white"
                expandIcon={
                  selectedFaq == index ? (
                    <KeyboardArrowUp className="text-white" />
                  ) : (
                    <KeyboardArrowDown className="text-white" />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <hr />
                <Typography className="text-[16px] text-white font-bold md:text-[32px]">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-white">{item.text}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>

      <div className="space-y-5 md:hidden">
        <div className="font-sans text-vivd-lime-green-10 text-sm md:w-[400px]">
          If there are any questions not answered here, please join the Discord
          community to request for further assistance.
        </div>

        <button className="border buttonTracker border-darkpink rounded-xl px-6 py-3 w-fit">
          <a
            href="#"
            target="_blank"
            className="font-sans buttonTracker text-vivd-lime-green-10 text-sm"
          >
            Join Discord Community
          </a>
        </button>
      </div>
    </div>
  );
};

export default Faqs;

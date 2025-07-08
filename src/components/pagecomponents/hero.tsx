"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
// import Navigation from "../Navigation";
import { ArrowOutward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Partnership from "./partnership";
// import Modal from "./Modal";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable
);

export default function Hero() {
  const words = ["AI", "Voice"];
  const [index, setIndex] = useState(0);
  const words2 = ["Hands Free", "Secure", "Fast"];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 100 : 500;
  const delay = 1500;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".changing-text", {
        opacity: 0,
        y: -10,
        duration: 0.5,
        onComplete: () => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          gsap.fromTo(
            ".changing-text",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let typingTimeout: any;

    const handleTyping = () => {
      const currentWord = words2[wordIndex];

      if (!isDeleting) {
        // Typing effect
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          typingTimeout = setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting effect
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words2.length);
        }
      }

      typingTimeout = setTimeout(handleTyping, typingSpeed);
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, wordIndex]);

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
    <>
      <div className="flex flex-col w-full md:w-full m-auto md:flex-row text-white items-center justify-center md:justify-start md:space-x-10  md:py-10 ">
        <div className="flex flex-col space-y-3 w-full md:mr-32 md:ml-32 items-center md:items-start ">
          <p className="text-white text-3xl md:text-6xl md:mb-4 font-extrabold">
            Your Voice, Your Wallet
          </p>
          <p className="text-white flex flex-col items-center md:items-start text-3xl md:text-6xl relative">
            With HeySolana, It's <br />
            <span
              key={displayText}
              className="text-darkpink inline-block w-[12ch] text-center md:text-start transition-opacity duration-500 ease-in-out opacity-100"
              style={{ minHeight: "1em" }}
            >
              {displayText}
            </span>
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.maskyray.heysolana"
            className="py-5 md:mt-2 flex flex-row justify-center"
            target="blank"
          >
            <button className="bg-gradient-to-b  w-[200px] flex flex-row items-center justify-center from-lightpink to-darkpink  border-2 border-lightpink/20 border-t-darkpink rounded-full bg-darkpink p-[10px] md:p-4 ">
              Get Our App <ArrowOutward />
            </button>
          </a>
        </div>

        <div className="hidden md:block">
          <img src="/pngs/heroimage.png" alt="image" width={800} />
        </div>
      </div>


      <Partnership />
    </>
  );
}
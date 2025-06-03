"use client";

import React from "react";
import Contact from "./contact";

const ContactCard = () => {
  return (
    <div className="flex gap-4 items-center justify-center mt-20 mb-10 px-4">
      <img 
        src="/pngs/leftcard.png" 
        alt="contact" 
        className="hidden lg:block"
      />

      <Contact />
    </div>
  );
};

export default ContactCard;

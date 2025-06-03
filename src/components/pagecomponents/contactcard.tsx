"use client";

import React from "react";
import Contact from "./contact";

const contactcard = () => {
  return (
    <div className="flex gap-4 items-center justify-center mt-20 mb-10">
      <img src="/pngs/leftcard.png" alt="contact" />

      <Contact />
    </div>
  );
};

export default contactcard;

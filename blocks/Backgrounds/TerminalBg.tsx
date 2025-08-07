'use client';

import React from "react";
import { Terminal, TypingAnimation } from "./terminal";

const TerminalBg = () => {
  return (
    <Terminal>
      <TypingAnimation className="text-green-500 font-bold"> --booting ayush-bhardwaj.exe...</TypingAnimation>
      <TypingAnimation delay={2000}>✔ BIOS check passed</TypingAnimation>
      <TypingAnimation delay={4000}>✔ Loading creativity.dll</TypingAnimation>
      <TypingAnimation delay={6000}>✔ Compiling bad jokes... success</TypingAnimation>
      <TypingAnimation delay={8000}>✔ Initializing dev mode... ON</TypingAnimation>
      <TypingAnimation className="text-blue-500 mt-2 font-bold" delay={10000}>--sudo make impact</TypingAnimation>
      <TypingAnimation className="text-white text-sm font-bold" delay={12000}>🚀 Deploying dreams to production...</TypingAnimation>


      
    </Terminal>
  );
};

export default TerminalBg;

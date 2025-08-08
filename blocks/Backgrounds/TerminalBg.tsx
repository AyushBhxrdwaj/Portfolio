'use client';

import React, { useEffect, useState } from "react";
import { Terminal, TypingAnimation } from "./terminal";

const TerminalBg = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
  
    const totalDuration = 12000 + 2400 + 2000; 
    
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, totalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <Terminal>
      <TypingAnimation key={`boot-${key}`} className="text-green-500 font-bold"> --booting ayush-bhardwaj.exe...</TypingAnimation>
      <TypingAnimation key={`bios-${key}`} delay={2000}>✔ BIOS check passed</TypingAnimation>
      <TypingAnimation key={`creativity-${key}`} delay={4000}>✔ Loading creativity.dll</TypingAnimation>
      <TypingAnimation key={`jokes-${key}`} delay={6000}>✔ Compiling bad jokes... success</TypingAnimation>
      <TypingAnimation key={`devmode-${key}`} delay={8000}>✔ Initializing dev mode... ON</TypingAnimation>
      <TypingAnimation key={`sudo-${key}`} className="text-blue-500 mt-2 font-bold" delay={10000}>--sudo make impact</TypingAnimation>
      <TypingAnimation key={`deploy-${key}`} className="text-white text-sm font-bold" delay={12000}>🚀 Deploying dreams to production...</TypingAnimation>


      
    </Terminal>
  );
};

export default TerminalBg;

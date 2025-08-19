"use client";
import React from "react";
import {
  Instagram,
  Linkedin,
  Link as LinkIcon,
  Twitter,
  Github,
  Code2,
} from "lucide-react";
import ShareButton from "@/components/ui/share-button";

const EndPage = () => {
  const SHARE_URL =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SHARE_URL) ||
    "https://x.com/__ayuxh007"; // your URL

  const url = SHARE_URL;
  const INSTAGRAM_URL =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_INSTAGRAM_URL) ||
    "https://www.instagram.com/_ayush.txt_/";
  const LINKEDIN_URL =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_LINKEDIN_URL) ||
    "https://www.linkedin.com/in/ayushbhxrdwaj007/";

  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div
        className="absolute inset-0 -z-10 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -z-10 inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(124,58,237,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
          Ready to take{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
            your
          </span>{" "}
          digital presence to
          <br className="hidden sm:block" /> the next level?
        </h2>
        <p className="mt-6 font-bold text-base sm:text-lg text-slate-300/90 max-w-3xl mx-auto">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <ShareButton
            links={[
              {
                icon: Twitter,
                onClick: () =>
                  window.open(url, "_blank", "noopener,noreferrer"),
                label: "Open X Profile",
              },
              {
                icon: Instagram,
                onClick: () =>
                  window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer"),
                label: "Open Instagram",
              },
              {
                icon: Linkedin,
                onClick: () =>
                  window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer"),
                label: "Open LinkedIn",
              },
              {
                icon: LinkIcon,
                onClick: () => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(url);
                  }
                },
                label: "Copy link",
              },
            ]}
            className="min-w-40 rounded-3xl"
          >
            <LinkIcon size={15} />
            Let&apos;s Connect
          </ShareButton>
        </div>
        <div className="mt-10 w-full">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-lg font-bold sm:text-sm text-slate-400">
              Copyright © 2025 Ayush Bhardwaj
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/AyushBhxrdwaj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex size-9 sm:size-10 items-center justify-center rounded-full border border-white/20 text-slate-300 hover:text-white hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <Github className="h-5 w-5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-110" />
              </a>
              <a
                href="https://leetcode.com/u/_ayushbhardwaj___/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="group inline-flex size-9 sm:size-10 items-center justify-center rounded-full border border-white/20 text-slate-300 hover:text-white hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <Code2 className="h-5 w-5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndPage;

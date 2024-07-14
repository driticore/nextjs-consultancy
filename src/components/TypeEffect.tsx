"use client";

import { TypewriterEffect } from "./ui/typewriter";

export const TypewriterEffectDemo =() => {
  const words = [
    {
      text: "We",
    },
    {
      text: "provide",
    },
    {
      text: "services",
      className: "text-neutral-500 dark:text-neutral-500",
    },
    {
      text: "&",
    },
    {
      text: "solutions",
      className: "text-neutral-500 dark:text-neutral-500",
    },
    {
      text: "such",
    },
    {
      text: "as:",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5rem] md:text-[20px]">
      <TypewriterEffect words={words} />
    </div>
  );
}

export default TypewriterEffectDemo;
"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import { SectionPrice } from "./ui/SectionPriceView";
import MaxWidthWrapper from "./MaxWidthWrapper";

const content = [
  {
    title: "Web Design",
    description: `
      This plan includes:
      - Customizable design
      - Responsive layout
      - HTML/CSS/JS development
      - UI done in Figma
    `,

    content: (
      <Link href="/pages/contacts">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
          Enquire
        </div>
      </Link>
    ),
    link: "/pages/pages/contacts",
    offset: 0.9,
  },
  {
    title: "Web Development",
    description: `
      This plan includes:
      - Custom backend development
      - Database integration
      - API connectivity
      - Next.js framework
      - Database management - PostgreSQL / MongoDB
    `,

    content: (
      <Link href="/pages/contacts">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
          Enquire
        </div>
      </Link>
    ),
    link: "/pages/contacts",
    offset: 0.1,
  },
  {
    title: "Software Development",
    description: `
      This plan includes:
      - Custom software development
      - Database design and development
      - API integration
      - Flutter framework
    `,

    content: (
      <Link href="/pages/contacts">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
          Enquire
        </div>
      </Link>
    ),
    link: "/pages/contacts",
    offset: 0.5,
  },
];

export function ScreenView() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col mb-5">
          <h1 className="text-center font-semibold text-4xl text-black items-center justify-center m-20">
            Our service plan:
          </h1>
          <SectionPrice content={content} />
        </div>
      </MaxWidthWrapper>
    </>
  );
}

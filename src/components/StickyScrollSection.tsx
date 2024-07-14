"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/stickysection";
import Link from "next/link";

const content = [
  {
    title: "Web Development",
    description:
      "Transform your online presence with our web development services. From e-commerce platforms to custom websites, we'll help you build a digital experience that resonates with your audience.",
    content:"",
    link: "/pages/contacts#service",
    offset: 0.9,
  },

  {
    title: "Software Development",
    description:
      "Unlock the full potential of your business with custom software solutions. Our experts will help you design, develop, and deploy software that streamlines operations, improves efficiency, and drives innovation.",
    content: "",
    link: "/pages/contacts#service",
    offset: 0.5,
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="mt-20">
      <StickyScroll content={content} />
    </div>
  );
}
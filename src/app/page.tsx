"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { StickyScrollRevealDemo } from "@/components/StickyScrollSection";
import TypewriterEffectDemo from "@/components/TypeEffect";
import Video from "@/components/Video";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Lock,
  LockIcon,
  PersonStandingIcon,
  User2Icon,
  WholeWordIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Perk {
  name: string;
  Icon: React.ElementType;
  percentage: String;
}

const perks: Perk[] = [
  {
    name: "Professional Expertise",
    Icon: WholeWordIcon, // Replace with appropriate icon component
    percentage: "85.5% rating",
  },
  {
    name: "Building Trustworthy Relationships",
    Icon: PersonStandingIcon, // Replace with appropriate icon component
    percentage: "80% rating",
  },
  {
    name: "Security and Peace of Mind",
    Icon: LockIcon, // Replace with appropriate icon component
    percentage: "90% rating",
  },
];

export default function Home() {
  return (
    <>
      {/*Fix the long task problem for performance */}
      <MaxWidthWrapper className="h-screen">
        <Video />
        <div className=" py-64 flex flex-col items-center lg:items-start justify-center">
          <div className=" text-center text-white md:text-left lg:text-left ">
            <h1 className="text-white font-bold text-5xl md:text-4xl lg:5xl ">
              Where Technology <br />
              <span className="text-[40px] lg:text-5xl">Meets Innovation.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl pt-6">
              Fueling Your Ambition, One Connection at a Time.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row mt-6 justify-center md:justify-start">
              <Link href={"/pages/contacts"}>
                <Button variant="default">Enquire Here</Button>
              </Link>

              <Link href={"/pages/contacts"}>
                <Button variant="secondary">
                  View services & planning &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-black text-white">
                    <perk.Icon className="w-1/3 h-1/3" />
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-black">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.percentage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <MaxWidthWrapper className="w-full">
        <div className="flex flex-col items-center justify-center py-20">
          <TypewriterEffectDemo />
          <StickyScrollRevealDemo />
        </div>
      </MaxWidthWrapper>

      <section id="about" className="shadow-2xl shadow-black">
        <MaxWidthWrapper className="bg-black min-w-[100vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start justify-start py-20 overflow-hidden"
          >
            <div className="flex-col flex justify-center items-center text-center">
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="your-face-image.jpg"
                alt="Akadinso Osuagwu"
                className="w-20 h-20 rounded-full border-2 border-white mb-10"
              />
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-bold text-white text-3xl "
              >
                CEO & Founder of DOSA Consultancy
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-medium text-white text-2xl m-4"
              >
                Akadinso Osuagwu
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-white text-lg leading-relaxed m-12"
              >
                Welcome to my corner of the web! Im Akadinso Osuagwu, the CEO
                and Founder of DOSA Consultancy. With a keen vision to maximize
                business potential, Im dedicated to driving growth and
                innovation through cutting-edge IT consultancy services.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-white text-lg leading-relaxed mb-12"
              >
                My journey began with a desire to not only build a successful
                company but also to secure a future for generations to come.
                With a strong sense of responsibility and determination to
                succeed, Ive built a team of experts committed to delivering
                exceptional IT solutions tailored to meet the diverse needs of
                our clients.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-white text-lg leading-relaxed"
              >
                Thank you for visiting, and I look forward to collaborating with
                you to take your business to the next level.
              </motion.p>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

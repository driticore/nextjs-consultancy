"use client";
import React from "react";
import Image from "next/image";
import ContainerScroll from "./ui/container-scroll-animation";
import { AnimatePresence, motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";

export function ContainerScreen() {
  return (
    <>
      <MaxWidthWrapper>
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Get a website or app <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Worth your caliber
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/ui/web1.png`}
              alt="hero"
              height={720}
              objectFit="true"
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
      </MaxWidthWrapper>
    </>
  );
}

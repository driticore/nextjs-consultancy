import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    link: string;
  }[];
  contentClassName?: string;
}) => {
  const ref = useRef<any>(null);

  return (
    <motion.div
      className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-y-8 w-full items-center justify-center"
      ref={ref}
    >
      {content.map((item, index) => (
        <>
          <Link href={item.link}>
          <motion.div
            key={item.title + index}
            initial={{ opacity: 0, x: 100 }} // add initial x offset
            whileInView={{ opacity: 1, x: 0 }} // animate to x: 0
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "bg-transparent border-4 border-black rounded-md p-20 w-full items-center",
              contentClassName
            )}
            whileHover={{ scale: 1.05 }} // add hover effect
          >
            <motion.h2
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl font-bold text-black text-center"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-lg text-black max-w-sm mt-10 text-center"
            >
              {item.description}
            </motion.p>
          </motion.div>
          </Link>
          
        </>
      ))}
    </motion.div>
  );
};

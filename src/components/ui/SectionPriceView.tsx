import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

export const SectionPrice = ({
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
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-10"
      ref={ref}
    >
      {content.map((item, index) => (
        <motion.div
          key={item.title + index}
          initial={{ opacity: 0, x: 100 }} // add initial x offset
          whileInView={{ opacity: 1, x: 0 }} // animate to x: 0
          viewport={{ once: true }}
          transition={{ // add transition props
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={cn(
            "border-4 border-white bg-black shadow-white drop-shadow-md rounded-lg flex flex-col p-10",
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
            className="text-2xl font-bold text-white"
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
            className="text-lg text-white mt-10"
          >
            {item.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </motion.p>
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ textDecoration: "underline" }} // add hover effect
            className={cn("text-sm text-white transition duration-300 ease-in-out mt-20", buttonVariants({className:"bg-transparent border-2 border-white text-white hover:text-black hover:bg-white"}))}
          >
            Enquire
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
};
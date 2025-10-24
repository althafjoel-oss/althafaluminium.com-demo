"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#e2e8f0",
    "#f1f5f9",
    "#cbd5e1",
    "#dbeafe",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #38bdf8, #4ade80)",
    "linear-gradient(to bottom right, #f472b6, #a78bfa)",
    "linear-gradient(to bottom right, #fb923c, #facc15)",
    "linear-gradient(to bottom right, #0ea5e9, #14b8a6)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col lg:flex-row h-auto lg:h-[75vh] justify-center lg:space-x-10 overflow-y-auto rounded-md p-4 lg:p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full lg:w-auto">
        <div className="max-w-2xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 lg:my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-900"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-4 lg:mt-10 max-w-sm text-slate-700"
              >
                {item.description}
              </motion.p>
              {/* Mobile Image */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                style={{ background: backgroundGradient }}
                className={cn(
                  "mt-6 h-64 w-full overflow-hidden rounded-md bg-white lg:hidden",
                  contentClassName,
                )}
              >
                {content[index].content ?? null}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop Sticky Image */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-96 w-[32rem] overflow-hidden rounded-md bg-white lg:block flex-shrink-0",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

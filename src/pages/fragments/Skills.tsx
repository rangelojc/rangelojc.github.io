import expressIcon from "@/assets/stack/expressjs.png";
import jsIcon from "@/assets/stack/js.svg";
import mongoIcon from "@/assets/stack/mongodb.svg";
import mySqlIcon from "@/assets/stack/mysql.svg";
import nextIcon from "@/assets/stack/next.svg";
import nodeIcon from "@/assets/stack/nodejs.png";
import reactIcon from "@/assets/stack/react.png";
import reactflowIcon from "@/assets/stack/reactflow.ico";
import sassIcon from "@/assets/stack/sass.svg";
import sqlserverIcon from "@/assets/stack/sqlserver.png";
import tailwindIcon from "@/assets/stack/tailwind.svg";
import tanstackqueryIcon from "@/assets/stack/tanstackquery.png";
import tradingviewIcon from "@/assets/stack/tradingview.webp";
import tsIcon from "@/assets/stack/typescript.svg";
import vueIcon from "@/assets/stack/vue.svg";
import zustandIcon from "@/assets/stack/zustand.jpg";

import clsx from "clsx";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { Section, SectionTitle } from "./Widgets";

import { Show } from "../../components/Show";

const marqueeAnim = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    },
  },
};

const tooltipAnim: Variants = {
  initial: { opacity: 0, scale: 0.85, y: 0 },
  animate: { opacity: 1, scale: 1, y: -18 },
  exit: { opacity: 0, scale: 0.85, y: 0 },
};

const Skills = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const icons = [
    { icon: jsIcon, label: "JavaScript" },
    { icon: tsIcon, label: "TypeScript" },
    { icon: reactIcon, label: "React" },
    { icon: nextIcon, label: "Next.js" },
    { icon: vueIcon, label: "Vue.js" },
    { icon: zustandIcon, label: "Zustand" },
    { icon: tanstackqueryIcon, label: "Tanstack Query" },
    { icon: nodeIcon, label: "Node.js" },
    { icon: expressIcon, label: "Express" },
    { icon: sassIcon, label: "SASS" },
    { icon: tailwindIcon, label: "TailwindCSS" },
    { icon: reactflowIcon, label: "Xyflow/ReactFlow" },
    { icon: tradingviewIcon, label: "TradingView" },
    { icon: mongoIcon, label: "MongoDB" },
    { icon: mySqlIcon, label: "MySQL" },
    { icon: sqlserverIcon, label: "SQL Server" },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const skillSet = isMobile ? icons : [...icons, ...icons];

  return (
    <Section>
      <SectionTitle>Tech Stack</SectionTitle>

      <div className="overflow-hidden w-full">
        <motion.div
          className={clsx("flex gap-6 md:gap-8 w-max", {
            "!flex-wrap justify-center !w-full": isMobile,
          })}
          variants={marqueeAnim}
          animate={isMobile ? false : "animate"}
        >
          {skillSet.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer"
              onMouseEnter={() => {
                if (isMobile) return;
                setActiveTooltip(activeTooltip === index ? null : index);
              }}
              onClick={() =>
                setActiveTooltip(activeTooltip === index ? null : index)
              }
            >
              <img
                src={item.icon}
                alt={item.label}
                className={clsx("w-auto h-16 md:h-20 !flex-none relative", {
                  "bg-neutral-100 p-1": [
                    nextIcon,
                    expressIcon,
                    reactflowIcon,
                    tradingviewIcon,
                    mySqlIcon,
                    sqlserverIcon,
                  ].includes(item.icon),
                })}
              />
              <AnimatePresence>
                <Show when={activeTooltip === index}>
                  {() => (
                    <motion.div
                      key="tooltip"
                      className="absolute bottom-0 mb-2 px-2 py-1 text-base text-neutral-50 font-medium bg-neutral-950 rounded shadow-md whitespace-nowrap z-10"
                      variants={tooltipAnim}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {item.label}
                    </motion.div>
                  )}
                </Show>
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;

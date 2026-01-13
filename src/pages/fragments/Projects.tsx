import mfadminThumb from "@/assets/projects/grow/mf-admin2.PNG";
import katerThumb from "@/assets/projects/kater/kater (1).png";
import soitThumb from "@/assets/projects/soit/soit (1).png";
import tbxThumb from "@/assets/projects/tbxm-2.png";
import troyThumb from "@/assets/projects/troy-1.png";
import vNextDemoThumb from "@/assets/projects/vnext-demostore2.PNG";
import vNextThumb from "@/assets/projects/vnext-int-3.PNG";
import zomThumb from "@/assets/projects/zombie-1.png";

import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section, SectionTitle } from "./Widgets";

type PortfolioItem = {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
  stack: string[];
  cover?: boolean;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Kater Portal",
    imageUrl: katerThumb,
    description:
      "Various fully functional screens and features for Kater.ai's LLM-based data analysis and business intelligence portal.",
    stack: ["React", "Vite", "TailwindCSS", "Zustand", "Reactflow"],
    cover: true,
  },
  {
    id: 2,
    title: "Troy Market World",
    imageUrl: troyThumb,
    description:
      "UI development for South Korean-based copy-trading platform web app.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "TradingView",
      "Zustand",
      "shadcn/ui",
      "Framer Motion",
    ],
    cover: false,
  },
  {
    id: 3,
    title: "Soit!",
    imageUrl: soitThumb,
    description: "UI development for South Korean e-commerce platform.",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "TradingView",
      "Zustand",
      "shadcn/ui",
    ],
    cover: true,
  },
  {
    id: 4,
    title: "ARQO",
    imageUrl: mfadminThumb,
    description:
      "Full stack development for Grow Inc's managed funds platform ARQO.",
    stack: [
      "Vue",
      "Vite",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "Pinia",
      "PrimeVue",
    ],
    cover: true,
  },
  {
    id: 80,
    title: "Zombied",
    imageUrl: zomThumb,
    description: "Backend development for a web-based poker game.",
    stack: ["Express.js", "Socket.io", "MongoDB", "MySQL"],
    cover: true,
  },
  {
    id: 90,
    title: "The BullX Trade",
    imageUrl: tbxThumb,
    description: "South Korean-based digital asset trading platform.",
    stack: ["Next.js", "Redux", "SignalR"],
    cover: false,
  },
  {
    id: 100,
    title: "vNext Dashboards",
    imageUrl: vNextThumb,
    description:
      "Internal and external dashboard applications for vNext, Vesta's anti-fraud platform.",
    stack: ["Next.js", "Redux", "SCSS", "MaterialUI"],
    cover: true,
  },
  {
    id: 101,
    title: "vNext Demo Store",
    imageUrl: vNextDemoThumb,
    description:
      "Demo store application used by Vesta's sales team and uses the company's anti-fraud services and API endpoints.",
    stack: ["Next.js", "Redux", "SCSS", "MaterialUI"],
    cover: true,
  },
];

const Projects = () => {
  return (
    <Section id="projectsSection">
      <SectionTitle>Projects</SectionTitle>

      <Swiper
        style={
          {
            "--swiper-navigation-size": "32px",
            "--swiper-theme-color": "var(--color-yellow-500)",
            "--swiper-pagination-bullet-inactive-color":
              "var(--color-neutral-400)",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as any
        }
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-8 w-full"
      >
        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#080808] rounded shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 relative cursor-pointer">
              <div className="h-[400px]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={clsx(
                    "relative z-1 w-full h-auto scale-100 group-hover:scale-110 transition-transform duration-300",
                    { "object-cover h-full": item.cover }
                  )}
                />
              </div>

              <div className="p-4 relative z-2 bg-primary-900 group-hover:!bg-primary-800 min-h-42 transition">
                <h5 className="text-xl font-medium">{item.title}</h5>
                <p className="text-neutral-300">{item.description}</p>

                <div className="flex-row-v-center flex-wrap">
                  {item.stack.map((skill) => (
                    <ProjectSkillPill key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

const ProjectSkillPill = (props: { name: string }) => {
  return (
    <div className="bg-secondary-600 text-neutral-50 text-sm font-medium rounded-full px-3 py-1 mr-2 mt-2">
      {props.name}
    </div>
  );
};

export default Projects;

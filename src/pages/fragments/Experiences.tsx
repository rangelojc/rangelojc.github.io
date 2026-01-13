import growLogo from "@/assets/companies/grow.svg";
import katerLogo from "@/assets/companies/kater.svg";
import ridgetechLogo from "@/assets/companies/ridgetech.svg";
import vestaLogo from "@/assets/companies/vesta.png";

import { Show } from "../../components/Show";
import { Section, SectionTitle } from "./Widgets";

interface ExperienceItem {
  companyName: string;
  companyLogoUrl?: string;
  companyLink: string;
  role: string;
  description: string;
  workPeriod: string;
}

const experiences = [
  {
    companyName: "Grow Inc",
    companyLogoUrl: growLogo,
    companyLink: "https://www.grow.inc",
    role: "Software Engineer",
    description:
      "Full stack software engineer for Grow Inc's managed funds platform, primarily working with Vue.js, TypeScript, Node.js and MongoDB.",
    workPeriod: "June 2025 - Present",
  },
  {
    companyName: "Kater.ai (YC W24)",
    companyLogoUrl: katerLogo,
    companyLink: "https://www.kater.ai",
    role: "Frontend Engineer",
    description:
      "YCombinator-backed AI data analytics company. As the primary frontend engineer; closely collaborated with the CTO/CEO especially regarding UI/UX concerns, API implementations and front-end business logic.",
    workPeriod: "Feb 2024 - March 2025",
  },
  {
    companyName: "Vesta",
    companyLogoUrl: vestaLogo,
    companyLink: "https://www.vesta.io",
    role: "Software Engineer",
    description:
      "Part of the frontend team tasked in developing Vesta's dashboard platform in the fintech space. Led development of a data collector service and a JavaScript SDK for seamless integration with Vesta's core API endpoints.",
    workPeriod: "May 2022 - Feb 2024",
  },
  {
    companyName: "BLUEKEI.SOFT INC",
    companyLink: "https://www.bluekeisoft.com",
    role: "Software Developer",
    description:
      "Software development consultancy firm; worked on multiple web development projects related to trading, e-commerce, and gaming.",
    workPeriod: "Jun 2019 - April 2022",
  },
  {
    companyName: "RidgeTech Simplified Solutions Inc.",
    companyLogoUrl: ridgetechLogo,

    companyLink: "https://ridgetech.com.ph/",
    role: "Software Engineer",
    description:
      "Helped develop various utility applications and graphing software used in the building automations industry.",
    workPeriod: "Dec 2016 - April 2019",
  },
];

const ExperienceCard = ({ data }: { data: ExperienceItem }) => {
  return (
    <div className="flex-none w-full flex flex-col items-start p-6 bg-primary-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white md:w-2/3 lg:w-1/2">
      <a
        href={data.companyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mb-4"
      >
        <Show
          when={data.companyLogoUrl}
          fallback={
            <h3 className="font-medium tracking-wider text-lg">
              {data.companyName}
            </h3>
          }
        >
          {() => (
            <img
              src={data.companyLogoUrl}
              alt={data.companyName}
              className="h-8 max-w-fit flex-none"
            />
          )}
        </Show>
      </a>

      <h2 className="text-lg font-semibold">{data.role}</h2>
      <p className="text-sm mb-2 text-neutral-300">{data.workPeriod}</p>
      <p className="text-base mb-4">{data.description}</p>
    </div>
  );
};

const Experiences = () => {
  return (
    <Section className="mt-20 flex-row-center">
      <SectionTitle>Experience</SectionTitle>

      <div className="space-y-4 flex-col-center">
        {experiences.map((exp, index) => (
          <>
            <ExperienceCard key={index} data={exp} />
            <Show when={index !== experiences.length - 1}>
              {() => (
                <div className="h-12 w-1 rounded border-l border-primary-400" />
              )}
            </Show>
          </>
        ))}
      </div>
    </Section>
  );
};

export default Experiences;

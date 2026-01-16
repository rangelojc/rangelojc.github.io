import rdHead from "@/assets/recos/devore.jpg";
import rhHead from "@/assets/recos/harrison.png";
import rpHead from "@/assets/recos/paga.jpg";
import rsHead from "@/assets/recos/seitz.jpg";

import { Section, SectionTitle } from "./Widgets";

interface Recommendation {
  headshot: string;
  name: string;
  role: string;
  quote: string;
  link: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    headshot: rsHead,
    name: "Robin Seitz",
    role: "CTO @ Kater.ai",
    link: "https://www.linkedin.com/in/robin-seitz-12029970/",
    quote:
      "Ramce is a fantastic engineer. I have nothing but good things to say about his work ethic, his deep knowledge of front-end development, and how easy he is to work with. He picks up new skills quickly and with genuine enthusiasm, and he truly cares about his craft—always striving to deliver high-quality, thoughtful code. On top of that, he's professional, collaborative, and just a great person to work with. I’d highly recommend him to anyone looking for a talented Front-End engineer, whether for contract work or a full-time.",
  },
  {
    headshot: rhHead,
    name: "Rob Harrison",
    role: "Head of Product @ Grow Inc, Co-Founder @ helm",
    link: "https://www.linkedin.com/in/rob--harrison/",
    quote:
      "I had the pleasure of working with Ramce just over half a year, and he was a hugely important part of our team. His creativity, sense of ownership, and ability to deliver high-quality work in highly ambiguous environments really stood out.\n\nRamce had a rare talent for taking half-baked concepts and early product outlines and turning them into thoughtful, well-crafted frontend solutions. He communicated clearly throughout the process, regularly seeking feedback and collaborating as ideas evolved.\n\nHe consistently enabled us to move faster on work that would normally take much longer, and he was genuinely a pleasure to work with. Any team would be lucky to have him.",
  },
  {
    headshot: rdHead,
    name: "Russell DeVore",
    role: "Product @ Kforce Inc, Vesta",
    link: "https://www.linkedin.com/in/russell-devore/",
    quote:
      "During my time at Vesta, I had the pleasure of working with Ramce on several features. Ramce's attention to detail during demo's was greatly appreciated, he always tried to put himself in the shoes of the user (as a product person that's pure gold when you find an engineer that wants to think like a user!), and if a solution was going to take more time to get right he never hesitated to be transparent about those challenges.",
  },
  {
    headshot: rpHead,
    name: "Reymundo Paga",
    role: "Lead @ Home Credit Philippines, Vesta",
    link: "https://www.linkedin.com/in/reymundo-paga-b4317186/",
    quote:
      "Ramce stands out as an exceptionally reliable software engineer with excellent communication skills. His admirable work ethic shines through, as he remains composed and sensible, particularly in challenging situations. He is truly someone worth keeping!",
  },
];

const RecommendationEntry = ({
  headshot,
  name,
  role,
  quote,
  link,
}: Recommendation) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer flex-col-center w-full py-12 px-4 bg-primary-900 rounded-md shadow-md gap-y-8 group hover:bg-primary-700 hover:scale-101 transition md:!flex-row md:pl-0 md:gap-y-0 md:py-4"
    >
      <div className="rounded-full overflow-hidden size-[220px] flex-none mx-8 md:size-40">
        <img src={headshot} alt={name} />
      </div>

      <div className="flex flex-col gap-2">
        <h5>
          <strong>{name}</strong>{" "}
          <span className="text-neutral-300">— {role}</span>
        </h5>

        <div className="relative">
          <span className="text-4xl text-neutral-50 absolute">“</span>
          <p className="indent-6 italic whitespace-pre-line">{quote}</p>
        </div>
      </div>
    </a>
  );
};

const Recommendations = () => {
  return (
    <Section>
      <SectionTitle>What People Are Saying</SectionTitle>

      <div className="flex-col-center gap-y-4 w-full md:w-3/4">
        {RECOMMENDATIONS.map((entry) => (
          <RecommendationEntry key={entry.name} {...entry} />
        ))}
      </div>
    </Section>
  );
};

export default Recommendations;

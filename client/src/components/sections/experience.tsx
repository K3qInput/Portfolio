import { motion } from "framer-motion";
import TimelineItem from "@/components/ui/timeline-item";
import { Experience } from "@/types/portfolio";

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Chief Technology Officer",
      company: "Fuzz Labs, Sryzen, Hostrium, Valex Cloud",
      period: "2025",
      description: "Leading technical strategy and development across multiple companies. Responsible for architecture decisions, team leadership, and innovative solution development.",
      technologies: ["Leadership", "Strategy", "Innovation"],
      type: "current"
    },
    {
      id: 2,
      title: "Senior Developer",
      company: "Craftsteal",
      period: "2025",
      description: "Developing advanced server plugins and security systems. Focus on performance optimization and anti-cheat development.",
      technologies: ["Java", "Security", "Optimization"],
      type: "current"
    },
    {
      id: 3,
      title: "Chief Executive Officer",
      company: "Qloxhost, NicxoxNodes",
      period: "2022 - 2023",
      description: "Founded and led hosting companies providing scalable server solutions. Managed teams, developed business strategies, and ensured service quality.",
      technologies: ["Entrepreneurship", "Management", "Hosting"],
      type: "past"
    },
    {
      id: 4,
      title: "Network Manager",
      company: "BoigaSMP",
      period: "2024 - 2025",
      description: "Managing network operations, server infrastructure, and community development. Overseeing technical implementations and ensuring optimal server performance.",
      technologies: ["Network Management", "Infrastructure", "Community"],
      type: "current"
    },
    {
      id: 5,
      title: "Network Manager",
      company: "BoltMC",
      period: "2023 - 2024",
      description: "Led network administration and technical operations. Responsible for server optimization, plugin management, and strategic network growth initiatives.",
      technologies: ["Administration", "Optimization", "Strategy"],
      type: "past"
    },
    {
      id: 6,
      title: "Developer & Staff",
      company: "Various Minecraft Networks",
      period: "2020 - 2022",
      description: "Worked across multiple major Minecraft networks including PvPParadise, TrashMCPE, Pika Network, and Green MC in various development and management roles.",
      technologies: ["Plugin Development", "Community", "Training"],
      type: "past"
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Professional Experience</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My journey through various roles and companies in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="timeline-container">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Experience } from "@/types/portfolio";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Leadership": "bg-red-500/20 text-red-400 border border-pink-400/30",
      "Java": "bg-orange-500/20 text-orange-400",
      "Security": "bg-red-500/20 text-red-400",
      "Strategy": "bg-blue-500/20 text-blue-400",
      "Innovation": "bg-purple-500/20 text-purple-400",
      "Management": "bg-yellow-500/20 text-yellow-400",
      "Entrepreneurship": "bg-pink-500/20 text-pink-400",
      "Optimization": "bg-cyan-500/20 text-cyan-400",
      "Plugin Development": "bg-indigo-500/20 text-indigo-400",
      "Community": "bg-teal-500/20 text-teal-400",
      "Training": "bg-amber-500/20 text-amber-400",
      "Hosting": "bg-purple-500/20 text-purple-400",
      "Skript": "bg-emerald-500/20 text-emerald-400",
      "YAML": "bg-lime-500/20 text-lime-400",
      "MySQL": "bg-blue-600/20 text-blue-400",
      "GUI": "bg-rose-500/20 text-rose-400",
      "Configuration": "bg-violet-500/20 text-violet-400",
      "Linux": "bg-gray-500/20 text-gray-400",
      "Network Architecture": "bg-sky-500/20 text-sky-400",
      "Network Management": "bg-yellow-500/20 text-yellow-400",
      "Infrastructure": "bg-blue-500/20 text-blue-400",
      "Administration": "bg-orange-500/20 text-orange-400",
      "Monitoring": "bg-orange-500/20 text-orange-400",
      "DDoS Protection": "bg-red-600/20 text-red-400",
    };
    return colors[tech] || "bg-slate-500/20 text-slate-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="timeline-item"
    >
      <div className="glass-effect p-6 rounded-2xl min-h-[280px] flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-green-primary">{experience.title}</h3>
          <span className="text-sm text-slate-400">{experience.period}</span>
        </div>
        
        <div className="mb-3">
          <span className="text-lg font-semibold text-slate-300">{experience.company}</span>
        </div>
        
        <p className="text-slate-400 mb-4 flex-grow text-sm leading-relaxed">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1.5 text-xs rounded-full font-medium whitespace-nowrap ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

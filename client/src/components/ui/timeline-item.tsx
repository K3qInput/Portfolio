import { motion } from "framer-motion";
import { Experience } from "@/types/portfolio";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Leadership": "bg-green-primary/20 text-green-primary",
      "Java": "bg-orange-500/20 text-orange-400",
      "Security": "bg-red-500/20 text-red-400",
      "Strategy": "bg-blue-500/20 text-blue-400",
      "Innovation": "bg-purple-500/20 text-purple-400",
      "Management": "bg-yellow-500/20 text-yellow-400",
      "Entrepreneurship": "bg-pink-500/20 text-pink-400",
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
      <div className="glass-effect p-6 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-green-primary">{experience.title}</h3>
          <span className="text-sm text-slate-400">{experience.period}</span>
        </div>
        
        <div className="mb-3">
          <span className="text-lg font-semibold text-slate-300">{experience.company}</span>
        </div>
        
        <p className="text-slate-400 mb-4">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1 text-xs rounded-full ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

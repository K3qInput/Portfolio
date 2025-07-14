import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Java": "bg-orange-500/20 text-orange-400",
      "JavaScript": "bg-yellow-500/20 text-yellow-400",
      "Python": "bg-blue-500/20 text-blue-400",
      "Security": "bg-red-500/20 text-red-400",
      "Network": "bg-purple-500/20 text-purple-400",
      "YAML": "bg-green-500/20 text-green-400",
      "Node.js": "bg-green-600/20 text-green-400",
      "MongoDB": "bg-green-700/20 text-green-400",
    };
    return colors[tech] || "bg-slate-500/20 text-slate-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-effect p-6 rounded-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="text-xl font-bold text-green-primary mb-2 hover:text-lime-accent transition-colors duration-300">
        {project.title}
      </h3>
      
      <p className="text-slate-400 mb-4 text-sm line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className={`px-2 py-1 text-xs rounded ${getTechColor(tech)}`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-primary hover:text-lime-accent transition-colors duration-300 flex items-center space-x-2"
        >
          <Github className="w-4 h-4" />
          <span>View Code</span>
        </a>
        
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-green-primary transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

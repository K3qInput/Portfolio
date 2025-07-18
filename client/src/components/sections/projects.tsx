import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { useProjects } from "@/hooks/use-static-data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { data: projects, isLoading } = useProjects();

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "gui", label: "GUI Development" },
    { id: "security", label: "Security" },
    { id: "optimization", label: "Optimization" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  if (isLoading) {
    return (
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-primary mx-auto"></div>
            <p className="text-slate-400 mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my best work in server development, security, and optimization.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-green-primary text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-green-primary hover:text-white"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

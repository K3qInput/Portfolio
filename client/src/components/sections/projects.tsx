import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { Project } from "@/types/portfolio";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "DeluxeMenu GUI-HUB",
      description: "Custom GUI for Minecraft with intuitive layout and plugin support. Features modern design principles and responsive interactions.",
      image: "https://64.media.tumblr.com/13699359580633d7379407c51ad572e8/4ff958ab667f39b1-7c/s500x750/f83ac7e133885d3460ebd9b25970b3fbc0d5700b.gif",
      category: "gui",
      technologies: ["Java", "YAML", "Minecraft API"],
      githubUrl: "https://github.com/K3qInput/GUI-HUB",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Matrix Custom Config",
      description: "Advanced anti-cheat configuration with custom detection algorithms and real-time monitoring capabilities.",
      image: "https://i.imgur.com/Fukuzmp.png",
      category: "security",
      technologies: ["Security", "Config", "Anti-cheat"],
      githubUrl: "https://github.com/K3qInput/Matrix-Custom-Config",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Server IP Hider",
      description: "Advanced IP protection system with proxy detection and DDoS mitigation for enhanced server security.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "optimization",
      technologies: ["Network", "Security", "Protection"],
      githubUrl: "https://github.com/K3qInput/Server-Ip-Hider",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "SH-Union Platform",
      description: "Collaborative platform for server management with real-time collaboration tools and advanced analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "gui",
      technologies: ["JavaScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/valexcloud/SH-Union",
      liveUrl: "#"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "gui", label: "GUI Development" },
    { id: "security", label: "Security" },
    { id: "optimization", label: "Optimization" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const skills = ["JavaScript", "Python", "Go", "Lua", "Java"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block mb-2">Greetings! I'm</span>
            <span className="gradient-text typing-effect">Kiro</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto"
          >
            A developer specializing in server optimization and security with 5 years of experience in the Minecraft ecosystem.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-green-primary/20 text-green-primary rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            onClick={() => scrollToSection("projects")}
            className="bg-green-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-green-secondary transition-all duration-300 neon-glow animate-bounce-gentle"
          >
            Explore My Work
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 animate-float"
        >
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7b0d63a-5cfd-412c-8651-dda91aff6363.png"
            alt="Minecraft development environment"
            className="mx-auto rounded-2xl shadow-2xl max-w-md neon-glow"
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => scrollToSection("about")}
          className="text-green-primary hover:text-lime-accent transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}

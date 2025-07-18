import { motion } from "framer-motion";
import { Github, MessageSquare, Link } from "lucide-react";

export default function Footer() {
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

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 items-start h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text text-xl font-bold mb-4">KiroDev</h3>
            <p className="text-slate-400 text-sm">
              Passionate developer specializing in Minecraft server optimization, security, and custom solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-green-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["about", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-slate-400 hover:text-green-primary transition-colors duration-300 capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-green-primary font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-400">Server Optimization</span></li>
              <li><span className="text-slate-400">Security Consulting</span></li>
              <li><span className="text-slate-400">Plugin Development</span></li>
              <li><span className="text-slate-400">Custom Solutions</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-green-primary font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3">
              <a
                href="https://github.com/K3qInput"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-primary/20 p-2 rounded-full hover:bg-green-primary/30 transition-all duration-300"
              >
                <Github className="w-4 h-4 text-green-primary" />
              </a>
              <a
                href="https://discord.com/users/1129755081416388750"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-primary/20 p-2 rounded-full hover:bg-green-primary/30 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 text-green-primary" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 KiroDev. All rights reserved. Built with passion for the Minecraft community.
          </p>
        </div>
      </div>
    </footer>
  );
}

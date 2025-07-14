import { motion } from "framer-motion";
import { Shield, Zap, Globe, Bug, Layout } from "lucide-react";

export default function About() {
  const specializations = [
    {
      icon: Shield,
      title: "Server Security & Anti-cheat Configurations",
      description: "Advanced security implementations and anti-cheat systems"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing server performance for maximum efficiency"
    },
    {
      icon: Globe,
      title: "Network Management",
      description: "Comprehensive network infrastructure management"
    },
    {
      icon: Bug,
      title: "Bug Finding & Fixing",
      description: "Identifying and resolving complex technical issues"
    },
    {
      icon: Layout,
      title: "GUI Development",
      description: "Creating intuitive user interfaces and experiences"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate about creating seamless server experiences and robust security solutions for the Minecraft community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-6">My Specializations</h3>
            <div className="space-y-4">
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-green-primary/20 p-3 rounded-full flex-shrink-0">
                    <spec.icon className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-300 mb-1">{spec.title}</h4>
                    <p className="text-sm text-slate-400">{spec.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-6">Education & Background</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-300 mb-2">Current Education</h4>
                <p className="text-slate-400 text-sm mb-1">Network Architecture (2nd Year)</p>
                <p className="text-slate-400 text-sm">Diploma in Cyber Law</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-300 mb-2">Personal Info</h4>
                <p className="text-slate-400 text-sm">Age: 22</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-300 mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["English", "French", "Hindi"].map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-primary/20 text-green-primary rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional coding setup with multiple monitors"
              className="rounded-2xl shadow-2xl neon-glow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

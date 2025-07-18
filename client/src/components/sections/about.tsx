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
      title: "Network Architecture & Proxy Management",
      description: "Network infrastructure, proxy configurations, and firewall management"
    },
    {
      icon: Bug,
      title: "Fullstack Development & Configuration",
      description: "Expert in fullstack development, Skript programming, and system configurations"
    },
    {
      icon: Layout,
      title: "GUI Development & Marketing",
      description: "Creating intuitive interfaces with strategic marketing approach"
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-green-primary/50 shadow-lg shadow-green-primary/20">
                  <img 
                    src="https://images-ext-1.discordapp.net/external/JbszHD6v-hwJ-a0PqqirRcj1mRMtJlBHwtsrELqq-P8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1129755081416388750/8ac8d8faa01acfd45c566464dcf69812.png?format=webp&quality=lossless"
                    alt="Kiro's Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-primary rounded-full border-2 border-slate-900"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-primary mb-1">Kiro</h3>
                <p className="text-slate-400 text-sm">Manager/Developer</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-primary rounded-full"></div>
                  <span className="text-green-primary text-xs font-medium">Online</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700/50 pt-4">
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Experienced developer with <span className="text-green-primary font-semibold">5+ years</span> of expertise in server optimization, security implementations, and team management.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Passionate about <span className="text-green-primary">Boxing</span> and <span className="text-green-primary">Chess</span>, bringing discipline and strategic thinking to development work.
              </p>
            </div>
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
              <div>
                <h4 className="font-semibold text-slate-300 mb-2">Hobbies & Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {["Boxing", "Chess", "Gaming", "Technology"].map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}

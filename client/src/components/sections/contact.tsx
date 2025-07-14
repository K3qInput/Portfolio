import { motion } from "framer-motion";
import { Mail, MessageSquare, Github } from "lucide-react";

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kirodev.java@gmail.com",
      href: "mailto:kirodev.java@gmail.com",
    },
    {
      icon: MessageSquare,
      label: "Discord",
      value: "kiro.java",
      href: "https://discord.com/users/1129755081416388750",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@K3qInput",
      href: "https://github.com/K3qInput",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help optimize your server or develop custom solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-green-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-green-primary/20 p-3 rounded-full">
                      <info.icon className="w-5 h-5 text-green-primary" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 font-semibold hover:text-green-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-green-primary mb-6">Connect With Me</h3>
              <div className="flex space-x-4 mb-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-primary/20 p-4 rounded-full hover:bg-green-primary/30 transition-all duration-300 neon-glow"
                  >
                    <info.icon className="w-5 h-5 text-green-primary" />
                  </a>
                ))}
              </div>
              <p className="text-slate-400">
                Feel free to reach out via email or Discord for project collaborations, 
                server optimization consultations, or any questions about my work.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

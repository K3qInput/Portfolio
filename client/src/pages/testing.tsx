import { motion } from "framer-motion";
import { Server, Shield, Zap, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ParticlesBackground from "@/components/ui/particles-background";
import { Badge } from "@/components/ui/badge";

export default function Testing() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const testServers = [
    {
      name: "Custom Lifesteal Setup",
      ip: "sg-std-1.sryzen.cloud:25581",
      description: "Experience our custom lifesteal setup with advanced mechanics and balanced gameplay under active development.",
      features: [
        "Custom Hearts System",
        "Balanced PvP Mechanics",
        "Anti-Cheat Integration",
        "Performance Optimized",
        "Regular Updates"
      ],
      status: "Development",
      color: "red"
    },
    {
      name: "Anti-Cheat Testing",
      ip: "sg-std-1.sryzen.cloud:25587",
      description: "Test our advanced anti-cheat configurations and security implementations in a controlled environment.",
      features: [
        "Grim Anti-Cheat",
        "Custom Configurations",
        "Real-time Detection",
        "Security Monitoring",
        "Bypass Prevention"
      ],
      status: "Testing",
      color: "blue"
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <ParticlesBackground />
      <Header />
      
      <main className="relative z-10 pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Testing Environment
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Join our testing servers to experience custom setups and configurations in development. 
                Test new features, provide feedback, and help us improve our solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testServers.map((server, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-effect p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-full ${server.color === 'red' ? 'bg-red-500/20' : 'bg-blue-500/20'}`}>
                        {server.color === 'red' ? (
                          <Zap className={`w-6 h-6 ${server.color === 'red' ? 'text-red-400' : 'text-blue-400'}`} />
                        ) : (
                          <Shield className={`w-6 h-6 ${server.color === 'red' ? 'text-red-400' : 'text-blue-400'}`} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{server.name}</h3>
                        <Badge 
                          variant="outline" 
                          className={`mt-1 ${server.color === 'red' ? 'border-red-500/50 text-red-400' : 'border-blue-500/50 text-blue-400'}`}
                        >
                          {server.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${server.color === 'red' ? 'bg-red-500' : 'bg-blue-500'} animate-pulse`}></div>
                      <span className="text-sm text-slate-400">Online</span>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {server.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {server.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">Server IP</span>
                      <button
                        onClick={() => copyToClipboard(server.ip, index)}
                        className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {copiedIndex === index ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span>{copiedIndex === index ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <div className="font-mono text-lg text-white bg-slate-900/50 rounded px-3 py-2 border border-slate-600/50">
                      {server.ip}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-16"
            >
              <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-green-primary mb-4">Join Our Testing Community</h3>
                <p className="text-slate-400 mb-6">
                  Help us improve our solutions by testing new features and providing valuable feedback. 
                  Your input helps us create better server experiences for everyone.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="px-4 py-2">
                    <Server className="w-4 h-4 mr-2" />
                    Live Testing
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Testing
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <Zap className="w-4 h-4 mr-2" />
                    Performance Testing
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
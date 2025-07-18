import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [chartAnimated, setChartAnimated] = useState(false);

  const programmingLanguages = [
    "JavaScript", "Python", "Java", "Lua", "HTML", "CSS", 
    "TypeScript", "Go", "C++", "SQL", "Bash", "YAML"
  ];

  const backendTools = [
    "Node.js", "Express.js", "Docker", "Linux", "MySQL", 
    "PostgreSQL", "Git", "MongoDB", "Redis", "Nginx",
    "Firewall Management", "Proxy Configuration", "DDoS Mitigation",
    "Network Security", "Load Balancing", "SSL/TLS", "VPN Setup",
    "Intrusion Detection", "Traffic Analysis", "CDN Management"
  ];

  const managementSkills = [
    "Team Leadership", "Project Management", "Resource Planning", 
    "Strategic Planning", "Performance Monitoring", "Quality Assurance",
    "Staff Training", "Chart Analysis", "Budget Management", 
    "Financial Planning", "Cost Optimization", "Risk Assessment"
  ];

  const specializations = [
    { name: "Server Optimization", level: 95, color: "#22c55e" },
    { name: "Security & Anti-cheat", level: 90, color: "#ef4444" },
    { name: "Skript Programming", level: 92, color: "#3b82f6" },
    { name: "Network Architecture", level: 88, color: "#f59e0b" },
    { name: "Configuration Management", level: 90, color: "#8b5cf6" },
    { name: "Project Management", level: 85, color: "#06b6d4" },
    { name: "Marketing & Strategy", level: 78, color: "#ec4899" },
    { name: "Plugin Development", level: 87, color: "#10b981" },
  ];

  const skillsOverview = [
    { name: "Programming", percentage: 88, color: "#22c55e", depth: 0.8 },
    { name: "Management", percentage: 85, color: "#3b82f6", depth: 0.7 },
    { name: "Security", percentage: 90, color: "#ef4444", depth: 0.9 },
    { name: "Optimization", percentage: 95, color: "#f59e0b", depth: 1.0 },
    { name: "Marketing", percentage: 78, color: "#8b5cf6", depth: 0.6 },
  ];

  useEffect(() => {
    if (isVisible && !chartAnimated) {
      setChartAnimated(true);
    }
  }, [isVisible, chartAnimated]);

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        {/* Modern 3D Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 glass-effect p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-slate-700/50"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-green-primary">Skills Overview</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative perspective-1000">
              <div className="w-80 h-80 mx-auto relative transform-style-3d">
                {/* Modern 3D Donut Chart with Glow Effects */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200" style={{ transformStyle: 'preserve-3d' }}>
                  {skillsOverview.map((skill, index) => {
                    const total = skillsOverview.reduce((sum, s) => sum + s.percentage, 0);
                    const percentage = (skill.percentage / total) * 100;
                    const startAngle = skillsOverview.slice(0, index).reduce((sum, s) => sum + ((s.percentage / total) * 360), 0);
                    
                    const outerRadius = 80;
                    const circumference = 2 * Math.PI * outerRadius;
                    const strokeDasharray = (percentage / 100) * circumference;
                    const strokeDashoffset = circumference - strokeDasharray;
                    
                    return (
                      <g key={skill.name}>
                        {/* Outer glow effect */}
                        <motion.circle
                          cx="100"
                          cy="98"
                          r={outerRadius + 2}
                          stroke={skill.color}
                          strokeWidth="20"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          transform={`rotate(${startAngle} 100 100)`}
                          initial={{ strokeDashoffset: circumference }}
                          animate={chartAnimated ? { strokeDashoffset: strokeDashoffset } : { strokeDashoffset: circumference }}
                          transition={{ delay: index * 0.2, duration: 1.5, ease: "easeOut" }}
                          opacity="0.2"
                          filter="url(#glow)"
                        />
                        {/* Main circle with gradient */}
                        <motion.circle
                          cx="100"
                          cy="100"
                          r={outerRadius}
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="18"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          transform={`rotate(${startAngle} 100 100)`}
                          initial={{ strokeDashoffset: circumference }}
                          animate={chartAnimated ? { strokeDashoffset: strokeDashoffset } : { strokeDashoffset: circumference }}
                          transition={{ delay: index * 0.2, duration: 1.5, ease: "easeOut" }}
                          className="drop-shadow-lg"
                          filter="url(#shadow)"
                        />
                        {/* 3D depth layers */}
                        <motion.circle
                          cx="100"
                          cy="102"
                          r={outerRadius}
                          stroke={skill.color}
                          strokeWidth="18"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          transform={`rotate(${startAngle} 100 100)`}
                          initial={{ strokeDashoffset: circumference }}
                          animate={chartAnimated ? { strokeDashoffset: strokeDashoffset } : { strokeDashoffset: circumference }}
                          transition={{ delay: index * 0.2, duration: 1.5, ease: "easeOut" }}
                          opacity="0.4"
                        />
                        <motion.circle
                          cx="100"
                          cy="104"
                          r={outerRadius}
                          stroke={skill.color}
                          strokeWidth="18"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          transform={`rotate(${startAngle} 100 100)`}
                          initial={{ strokeDashoffset: circumference }}
                          animate={chartAnimated ? { strokeDashoffset: strokeDashoffset } : { strokeDashoffset: circumference }}
                          transition={{ delay: index * 0.2, duration: 1.5, ease: "easeOut" }}
                          opacity="0.2"
                        />
                      </g>
                    );
                  })}
                  {/* Enhanced filters and gradients */}
                  <defs>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.4"/>
                    </filter>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    {skillsOverview.map((skill, index) => (
                      <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={skill.color} stopOpacity="1"/>
                        <stop offset="50%" stopColor={skill.color} stopOpacity="0.8"/>
                        <stop offset="100%" stopColor={skill.color} stopOpacity="0.6"/>
                      </linearGradient>
                    ))}
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-gradient-to-br from-slate-900/95 to-slate-800/90 backdrop-blur-md rounded-full w-32 h-32 flex flex-col items-center justify-center border border-slate-600/50 shadow-2xl">
                    <div className="text-4xl font-bold text-white drop-shadow-lg">5+</div>
                    <div className="text-sm text-slate-300 font-semibold">Years</div>
                    <div className="text-xs text-slate-400">Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-5">
              {skillsOverview.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-5 p-4 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300"
                >
                  <div 
                    className="w-6 h-6 rounded-full shadow-xl relative"
                    style={{ 
                      backgroundColor: skill.color,
                      boxShadow: `0 0 15px ${skill.color}60, inset 0 2px 4px rgba(255,255,255,0.1)`
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-white text-lg">{skill.name}</span>
                      <span className="text-sm font-bold px-3 py-1 rounded-full bg-slate-700/80 text-white border border-slate-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-600/80 rounded-full h-4 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={chartAnimated ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1.2, ease: "easeOut" }}
                        className="h-4 rounded-full relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${skill.color}, ${skill.color}CC)`,
                          boxShadow: `0 0 15px ${skill.color}80`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/35 to-transparent"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl h-[500px] flex flex-col"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-8">Programming Languages</h3>
            <div className="flex flex-wrap gap-3 flex-1 content-start">
              {programmingLanguages.map((lang, index) => {
                const colors = [
                  { bg: "from-yellow-500/20 to-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30", shadow: "hover:shadow-yellow-500/20" },
                  { bg: "from-green-500/20 to-green-500/10", text: "text-green-400", border: "border-green-500/30", shadow: "hover:shadow-green-500/20" },
                  { bg: "from-red-500/20 to-red-500/10", text: "text-red-400", border: "border-red-500/30", shadow: "hover:shadow-red-500/20" },
                  { bg: "from-purple-500/20 to-purple-500/10", text: "text-purple-400", border: "border-purple-500/30", shadow: "hover:shadow-purple-500/20" },
                  { bg: "from-orange-500/20 to-orange-500/10", text: "text-orange-400", border: "border-orange-500/30", shadow: "hover:shadow-orange-500/20" },
                  { bg: "from-cyan-500/20 to-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30", shadow: "hover:shadow-cyan-500/20" },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                    <Badge 
                      variant="secondary" 
                      className={`px-4 py-2 bg-gradient-to-r ${color.bg} ${color.text} border ${color.border} hover:bg-opacity-30 transition-all duration-300 shadow-lg ${color.shadow}`}
                    >
                      {lang}
                    </Badge>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl h-[500px] flex flex-col"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-8">Backend & Tools</h3>
            <div className="flex flex-wrap gap-3 flex-1 content-start">
              {backendTools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl h-[500px] flex flex-col"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-6">Management Skills</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {managementSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
            
            <h4 className="text-xl font-bold text-green-primary mb-6">Core Specializations</h4>
            <div className="space-y-4">
              {specializations.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                >
                  <span className="font-medium text-slate-300">{skill.name}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 h-3 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: `linear-gradient(135deg, ${skill.color}, ${skill.color}80)`,
                          boxShadow: `0 0 6px ${skill.color}60`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </motion.div>
                    </div>
                    <span className="text-sm font-bold min-w-[3rem] text-right" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

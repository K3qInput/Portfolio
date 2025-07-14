import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import SkillBar from "@/components/ui/skill-bar";

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [chartAnimated, setChartAnimated] = useState(false);

  const programmingSkills = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Go", level: 75 },
    { name: "Java", level: 80 },
    { name: "Lua", level: 95 },
    { name: "HTML", level: 92 },
    { name: "CSS", level: 88 },
    { name: "C++", level: 70 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Linux", level: 92 },
    { name: "MySQL", level: 78 },
    { name: "PostgreSQL", level: 82 },
    { name: "Git", level: 88 },
    { name: "MongoDB", level: 75 },
  ];

  const specializations = [
    { name: "Server Optimization", level: 95, color: "#22c55e" },
    { name: "Security & Anti-cheat", level: 90, color: "#ef4444" },
    { name: "GUI Development", level: 85, color: "#3b82f6" },
    { name: "Network Management", level: 88, color: "#f59e0b" },
    { name: "Bug Finding & Fixing", level: 92, color: "#8b5cf6" },
    { name: "Plugin Development", level: 87, color: "#06b6d4" },
  ];

  const skillsOverview = [
    { name: "Programming", percentage: 88, color: "#22c55e" },
    { name: "Backend", percentage: 85, color: "#3b82f6" },
    { name: "Security", percentage: 90, color: "#ef4444" },
    { name: "Optimization", percentage: 95, color: "#f59e0b" },
    { name: "DevOps", percentage: 78, color: "#8b5cf6" },
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

        {/* Skills Overview with Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-green-primary mb-8 text-center">Skills Overview</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {skillsOverview.map((skill, index) => {
                    const total = skillsOverview.reduce((sum, s) => sum + s.percentage, 0);
                    const percentage = (skill.percentage / total) * 100;
                    const angle = (percentage / 100) * 360;
                    const startAngle = skillsOverview.slice(0, index).reduce((sum, s) => sum + ((s.percentage / total) * 360), 0);
                    
                    const radius = 80;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDasharray = (percentage / 100) * circumference;
                    const strokeDashoffset = circumference - strokeDasharray;
                    
                    return (
                      <motion.circle
                        key={skill.name}
                        cx="100"
                        cy="100"
                        r={radius}
                        stroke={skill.color}
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform={`rotate(${startAngle} 100 100)`}
                        initial={{ strokeDashoffset: circumference }}
                        animate={chartAnimated ? { strokeDashoffset: strokeDashoffset } : { strokeDashoffset: circumference }}
                        transition={{ delay: index * 0.2, duration: 1.5, ease: "easeOut" }}
                        className="drop-shadow-lg"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-primary">5+</div>
                    <div className="text-sm text-slate-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {skillsOverview.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={chartAnimated ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
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
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-8">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                  animate={isVisible}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-8">Backend & Tools</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                  animate={isVisible}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-8">Specializations</h3>
            <div className="space-y-6">
              {specializations.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                  animate={isVisible}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

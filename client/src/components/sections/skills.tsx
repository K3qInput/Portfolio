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
  ];

  const technicalSkills = [
    { name: "Node.js", level: 90 },
    { name: "Docker", level: 85 },
    { name: "Linux", level: 92 },
    { name: "Git", level: 88 },
    { name: "MySQL", level: 78 },
  ];

  const chartData = [
    { name: "JS", level: 90 },
    { name: "Python", level: 85 },
    { name: "Lua", level: 95 },
    { name: "Java", level: 80 },
    { name: "Go", level: 75 },
    { name: "Linux", level: 92 },
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

        <div className="grid lg:grid-cols-2 gap-12">
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-green-primary mb-8">Technologies & Tools</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-green-primary mb-8 text-center">Skills Overview</h3>
          <div className="relative h-64 flex items-end justify-center space-x-6">
            {chartData.map((item, index) => (
              <div key={item.name} className="flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={chartAnimated ? { height: `${item.level * 2}px` } : { height: 0 }}
                  transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
                  className="w-12 bg-gradient-to-t from-green-primary to-lime-accent rounded-t-lg"
                />
                <span className="text-sm mt-2 text-slate-400">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

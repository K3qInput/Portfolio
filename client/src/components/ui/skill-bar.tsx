import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
  animate?: boolean;
}

export default function SkillBar({ name, level, delay = 0, animate = false }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="skill-item"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-slate-300">{name}</span>
        <span className="text-sm text-slate-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={animate ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          className="skill-progress"
        />
      </div>
    </motion.div>
  );
}

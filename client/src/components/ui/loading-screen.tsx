import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-dark-bg flex items-center justify-center"
    >
      <div className="text-center">
        <div className="w-12 h-12 border-3 border-green-primary/30 border-t-green-primary rounded-full animate-spin mx-auto mb-4"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-green-primary font-semibold"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}

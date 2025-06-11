import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
} 
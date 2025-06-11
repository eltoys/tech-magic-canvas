import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-800/30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 bg-grid-white/[0.01]" />
      <div className="absolute h-full w-full bg-black/80 backdrop-blur-[100px]" />
    </div>
  );
} 
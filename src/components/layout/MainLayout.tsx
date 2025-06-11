import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBackground } from "@/components/ui/animated-background";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.3,
        }}
        className={cn(
          "relative min-h-screen w-full",
          "selection:bg-white/10 selection:text-white",
          "text-white/90",
          className
        )}
      >
        <AnimatedBackground />
        <motion.div
          className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
} 
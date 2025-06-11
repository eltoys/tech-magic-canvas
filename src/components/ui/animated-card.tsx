import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
}

export function AnimatedCard({
  children,
  className,
  hoverScale = 1.02,
}: AnimatedCardProps) {
  useMousePosition();

  return (
    <motion.div
      className={cn(
        "animated-card rounded-lg border border-white/10 bg-white/5 p-6",
        "transition-colors hover:bg-white/10",
        "relative overflow-hidden backdrop-blur-sm",
        className
      )}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)",
        }}
        whileHover={{ opacity: 1 }}
      />
      {children}
    </motion.div>
  );
}

// Ejemplo de uso:
export function AnimatedCardDemo() {
  return (
    <AnimatedCard className="max-w-md">
      <h3 className="text-lg font-semibold text-white">Título de la Tarjeta</h3>
      <p className="mt-2 text-sm text-white/70">
        Esta es una tarjeta con animaciones suaves y efectos de hover elegantes.
      </p>
    </AnimatedCard>
  );
} 
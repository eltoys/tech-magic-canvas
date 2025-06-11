import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  onClick?: () => void;
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
}: AnimatedButtonProps) {
  const variants = {
    default: "bg-white text-black hover:bg-white/90",
    outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  };

  const sizes = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <motion.button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium",
        "transition-colors duration-200",
        "relative overflow-hidden",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: "radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 100%)",
        }}
        whileHover={{ opacity: 1 }}
      />
      {children}
    </motion.button>
  );
} 
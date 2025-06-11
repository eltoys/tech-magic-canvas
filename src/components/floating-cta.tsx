import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";

export function FloatingCTA() {
  const handleScheduleClick = () => {
    window.open("https://cal.com/agentcia/30min", "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 1,
      }}
    >
      <AnimatedButton
        onClick={handleScheduleClick}
        size="lg"
        className="shadow-lg shadow-black/25 rounded-xl bg-highlight text-minimal-black hover:bg-yellow-400 font-bold"
      >
        Agendar llamada
      </AnimatedButton>
    </motion.div>
  );
} 
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedCard } from "@/components/ui/animated-card";

export function CTASection() {
  const handleScheduleClick = () => {
    window.open("https://cal.com/agentcia/30min", "_blank");
  };

  return (
    <AnimatedCard className="text-center">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        ¿Listo para empezar?
      </h2>
      <p className="mt-4 text-lg text-white/70">
        Agenda una llamada de 30 minutos para discutir tu proyecto
      </p>
      <div className="mt-8">
        <AnimatedButton
          onClick={handleScheduleClick}
          size="lg"
          className="mx-auto"
        >
          Agendar llamada gratuita
        </AnimatedButton>
      </div>
    </AnimatedCard>
  );
} 
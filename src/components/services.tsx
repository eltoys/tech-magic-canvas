import { motion } from "framer-motion";
import { Brain, Target, Users } from "lucide-react";

const services = [
  {
    title: "Soluciones IA Personalizadas",
    icon: Brain,
    features: [
      "Chatbots inteligentes",
      "Modelos predictivos",
      "Automatizaciones avanzadas"
    ],
    description: "Desarrollamos soluciones de IA adaptadas a las necesidades específicas de tu empresa."
  },
  {
    title: "IA como Copiloto",
    icon: Target,
    features: [
      "IA para decisiones",
      "IA como instrumento de venta",
      "Análisis predictivo"
    ],
    description: "Potencia tu equipo con herramientas de IA que mejoran la toma de decisiones y la productividad."
  },
  {
    title: "Capacitación Elite",
    icon: Users,
    features: [
      "Workshops para executives",
      "Training para equipos",
      "Consultoría estratégica"
    ],
    description: "Programas de formación personalizados para maximizar el potencial de tu equipo con IA."
  }
];

export function Services() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transformamos tu empresa con soluciones de IA innovadoras y personalizadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 mb-6">
                <service.icon className="w-6 h-6 text-yellow-400" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
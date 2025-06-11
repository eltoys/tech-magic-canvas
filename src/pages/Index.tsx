import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Target, Users, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollToTop } from "@/components/scroll-to-top";

const Index = () => {
  const handleScheduleClick = () => {
    window.open("https://cal.com/agentcia/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-minimal-white text-minimal-black rounded-3xl overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="h-20"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/agencia-logo.png" 
                alt="Agencia" 
                className="h-full w-auto object-contain"
              />
            </motion.div>
            <div className="flex items-center gap-8 text-sm">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-gray-500 cursor-pointer"
              >
                🇪🇸 Madrid
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-gray-500 cursor-pointer"
              >
                🇲🇽 Ciudad de México
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-gray-500 cursor-pointer"
              >
                🇨🇷 Costa Rica
              </motion.span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8 max-w-3xl mx-auto text-center">
              <div className="inline-block">
                <span className="bg-highlight px-3 py-1 text-sm font-medium tracking-wide uppercase rounded-lg">
                  IA con enfoque técnico y creativo
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
                EL FUTURO
                <br />
                <span className="text-highlight">ES HOY</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
                Ayudamos a nuestros clientes a innovar con IA. Somos tu copiloto hacia el 
                presente tecnológico que blindará tu futuro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-minimal-black text-white hover:bg-minimal-dark-gray px-8 py-6 text-lg font-medium rounded-xl"
                  onClick={handleScheduleClick}
                >
                  Transformar Mi Empresa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-black rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              ¿QUÉ HACEMOS <span className="text-highlight">POR TI?</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Expertos multidisciplinarios en IA, tecnología, marketing, negocios, ventas y diseño.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-zinc-900 border-0 hover:bg-zinc-800 transition-all duration-300 rounded-2xl overflow-hidden
                               hover:shadow-2xl hover:shadow-yellow-400/10">
                  <CardContent className="p-8">
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 mb-6"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <service.icon className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                    
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
                          whileHover={{ x: 5 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-minimal-black text-white p-16 max-w-4xl mx-auto rounded-2xl">
              <h3 className="text-4xl font-black mb-6">
                ¿Listo para ser el <span className="text-highlight">líder tecnológico</span> de tu sector?
              </h3>
              <p className="text-xl mb-8 text-gray-300">
                No esperes más. El futuro de la IA es hoy.
              </p>
              <Button 
                className="bg-highlight text-minimal-black hover:bg-yellow-400 px-8 py-6 text-lg font-bold rounded-xl"
                onClick={handleScheduleClick}
              >
                Comenzar Transformación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-4"
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/agencia-logo.png" 
              alt="Agencia" 
              className="h-20 w-auto object-contain"
            />
          </motion.div>
          <p className="text-gray-500 mb-6">IA con enfoque técnico y creativo</p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <motion.span whileHover={{ scale: 1.05 }}>🇪🇸 Madrid</motion.span>
            <motion.span whileHover={{ scale: 1.05 }}>🇲🇽 Ciudad de México</motion.span>
            <motion.span whileHover={{ scale: 1.05 }}>🇨🇷 Costa Rica</motion.span>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Index;

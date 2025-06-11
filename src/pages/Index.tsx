import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScheduleClick = () => {
    window.open("https://cal.com/agentcia/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-minimal-white text-minimal-black rounded-3xl overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="h-14 sm:h-20"
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
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 text-gray-500 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden sm:flex items-center gap-8 text-sm">
              <motion.span whileHover={{ scale: 1.05 }} className="text-gray-500 cursor-pointer">
                🇪🇸 Madrid
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="text-gray-500 cursor-pointer">
                🇲🇽 Ciudad de México
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="text-gray-500 cursor-pointer">
                🇨🇷 Costa Rica
              </motion.span>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden mt-4 pb-4`}>
            <div className="flex flex-col gap-4 items-center text-sm">
              <span className="text-gray-500">🇪🇸 Madrid</span>
              <span className="text-gray-500">🇲🇽 Ciudad de México</span>
              <span className="text-gray-500">🇨🇷 Costa Rica</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-8 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto text-center">
              <div className="inline-block">
                <span className="bg-highlight px-3 py-1 text-sm font-medium tracking-wide uppercase rounded-lg">
                  IA con enfoque técnico y creativo
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                EL FUTURO
                <br />
                <span className="text-highlight">ES HOY</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
                Ayudamos a nuestros clientes a innovar con IA. Somos tu copiloto hacia el 
                presente tecnológico que blindará tu futuro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-minimal-black text-white hover:bg-minimal-dark-gray px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-xl w-full sm:w-auto"
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              ¿QUÉ HACEMOS <span className="text-highlight">POR TI?</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto px-4">
              Expertos multidisciplinarios en IA, tecnología, marketing, negocios, ventas y diseño.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <CardContent className="p-6 sm:p-8">
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
                    
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 text-sm sm:text-base">
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
                          className="flex items-center text-gray-300 text-sm sm:text-base"
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
          <div className="text-center mt-16 sm:mt-20">
            <div className="bg-minimal-black text-white p-8 sm:p-16 max-w-4xl mx-auto rounded-2xl">
              <h3 className="text-2xl sm:text-4xl font-black mb-4 sm:mb-6">
                ¿Listo para ser el <span className="text-highlight">líder tecnológico</span> de tu sector?
              </h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300">
                No esperes más. El futuro de la IA es ahora.
              </p>
              <Button 
                className="bg-highlight text-minimal-black hover:bg-yellow-400 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-xl w-full sm:w-auto"
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
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200">
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
              className="h-14 sm:h-20 w-auto object-contain"
            />
          </motion.div>
          <p className="text-gray-500 mb-6">IA con enfoque técnico y creativo</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-400">
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

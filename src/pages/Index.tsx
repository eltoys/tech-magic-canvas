
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Zap, Target, Users, Rocket, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            AI·AGENCY
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-white border-white/20">
              Madrid • CDMX • Costa Rica
            </Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ai-purple/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-ai-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-6s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <Badge className="mb-8 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300">
            🚀 La Agencia de IA más Innovadora del Mundo
          </Badge>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <span className="block text-gradient animate-gradient-shift bg-[length:400%_400%]">
              FUTURO
            </span>
            <span className="block text-white">
              ES AHORA
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transformamos empresas con <span className="text-gradient-alt font-bold">IA revolucionaria</span>. 
            Somos tu copiloto hacia el presente tecnológico que blindará tu futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-ai hover:scale-105 transform transition-all duration-300 text-white font-bold px-8 py-6 text-lg glow-effect">
              Transformar Mi Empresa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-400">Empresas Transformadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">99%</div>
              <div className="text-gray-400">Satisfacción Cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">3</div>
              <div className="text-gray-400">Oficinas Globales</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient">¿QUÉ HACEMOS</span>
              <span className="block text-white">POR TI?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos expertos multidisciplinarios en IA, tecnología, marketing, negocios, ventas y diseño. 
              Todo lo que necesitas en un solo lugar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-white/10 backdrop-blur-sm hover:scale-105 transform transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Soluciones IA Personalizadas</h3>
                <p className="text-gray-300 mb-6">
                  Creamos y conceptualizamos soluciones tecnológicas basadas en IA que revolucionarán tu negocio.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Chatbots inteligentes</li>
                  <li>• Modelos predictivos</li>
                  <li>• Automatizaciones avanzadas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-white/10 backdrop-blur-sm hover:scale-105 transform transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">IA como Copiloto</h3>
                <p className="text-gray-300 mb-6">
                  Implementamos IA como tu copiloto empresarial para toma de decisiones y como instrumento de venta.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• IA para tomadores de decisiones</li>
                  <li>• IA como instrumento de venta</li>
                  <li>• Análisis predictivo avanzado</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="bg-gradient-to-br from-cyan-900/50 to-pink-900/50 border-white/10 backdrop-blur-sm hover:scale-105 transform transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Capacitación Elite</h3>
                <p className="text-gray-300 mb-6">
                  Formación especializada en IA para nivel C y equipos de trabajo que quieren liderar el futuro.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Workshops para executives</li>
                  <li>• Training para equipos</li>
                  <li>• Consultoría estratégica</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
              <Rocket className="h-16 w-16 text-gradient mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-white mb-6">
                ¿Listo para ser el <span className="text-gradient">LÍDER</span> de tu sector?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                No esperes más. El futuro de la IA es ahora y nosotros te llevamos allí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-ai hover:scale-105 transform transition-all duration-300 text-white font-bold px-8 py-6 text-lg glow-effect">
                  Comenzar Transformación
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <Globe className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold text-gradient mb-4">AI·AGENCY</div>
          <p className="text-gray-400 mb-6">La mejor agencia de IA del mundo</p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <span>🇪🇸 Madrid</span>
            <span>🇲🇽 Ciudad de México</span>
            <span>🇨🇷 Costa Rica</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

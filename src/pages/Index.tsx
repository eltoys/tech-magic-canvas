
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Target, Users, Minus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-minimal-white text-minimal-black">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              AI<span className="text-highlight">·</span>AGENCY
            </div>
            <div className="flex items-center gap-8 text-sm">
              <span className="text-gray-500">Madrid</span>
              <span className="text-gray-500">CDMX</span>
              <span className="text-gray-500">Costa Rica</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-highlight px-3 py-1 text-sm font-medium tracking-wide uppercase">
                  La mejor agencia de IA del mundo
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
                FUTURO
                <br />
                <span className="text-highlight">ES AHORA</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transformamos empresas con IA revolucionaria. Somos tu copiloto hacia el 
                presente tecnológico que blindará tu futuro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-minimal-black text-white hover:bg-minimal-dark-gray px-8 py-6 text-lg font-medium">
                  Transformar Mi Empresa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-2 border-minimal-black text-minimal-black hover:bg-minimal-gray px-8 py-6 text-lg font-medium">
                  Ver Casos de Éxito
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-12 pt-8">
                <div>
                  <div className="text-3xl font-black">500+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Empresas</div>
                </div>
                <div>
                  <div className="text-3xl font-black">99%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Satisfacción</div>
                </div>
                <div>
                  <div className="text-3xl font-black">3</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Oficinas</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="bg-minimal-gray h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-highlight mx-auto flex items-center justify-center">
                    <Brain className="h-8 w-8 text-minimal-black" />
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-500">
                    AI SOLUTIONS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-minimal-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight">
              ¿QUÉ HACEMOS <span className="text-highlight">POR TI?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertos multidisciplinarios en IA, tecnología, marketing, negocios, ventas y diseño.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="bg-minimal-white border-0 minimal-shadow hover-lift">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-minimal-black flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Soluciones IA Personalizadas</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>Chatbots inteligentes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>Modelos predictivos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>Automatizaciones avanzadas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="bg-minimal-white border-0 minimal-shadow hover-lift">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-minimal-black flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">IA como Copiloto</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>IA para decisiones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>IA como instrumento de venta</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>Análisis predictivo</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="bg-minimal-white border-0 minimal-shadow hover-lift">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-minimal-black flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Capacitación Elite</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>Workshops para executives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>Training para equipos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Minus className="h-4 w-4 text-highlight" />
                    <span>Consultoría estratégica</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-minimal-black text-white p-16 max-w-4xl mx-auto">
              <h3 className="text-4xl font-black mb-6">
                ¿Listo para ser el <span className="text-highlight">LÍDER</span> de tu sector?
              </h3>
              <p className="text-xl mb-8 text-gray-300">
                No esperes más. El futuro de la IA es ahora.
              </p>
              <Button className="bg-highlight text-minimal-black hover:bg-yellow-400 px-8 py-6 text-lg font-bold">
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
          <div className="text-3xl font-bold mb-4 tracking-tight">
            AI<span className="text-highlight">·</span>AGENCY
          </div>
          <p className="text-gray-500 mb-6">La mejor agencia de IA del mundo</p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <span>Madrid</span>
            <span>Ciudad de México</span>
            <span>Costa Rica</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

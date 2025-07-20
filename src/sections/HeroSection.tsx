import { ArrowRight} from 'lucide-react';

function HeroSection() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Soluciones SaaS que
                <span className="block text-gray-600">impulsan tu negocio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Desarrollamos software a medida y soluciones SaaS para automatizar 
                y optimizar los procesos de tu empresa.
              </p>
              <a href="https://api.whatsapp.com/send/?phone=54346406944&text=Hola%20KairoSoft%2C%20quiero%20contactarte%20con%20tu%20equipo%20de%20desarrollo%20para%20que%20te%20ayudemos%20a%20crear%20un%20producto%20increible%20para%20mi%20empresa." target="_blank" rel="noreferrer">
                <button className="hover:cursor-pointer bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors flex items-center group">
                  Contactanos por WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
            <div className="lg:pl-12">
              <div className="w-full h-80 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <img src="/public/illustration.png" alt="Illustration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default HeroSection;
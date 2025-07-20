import { Cpu, Zap, HeadphonesIcon, TrendingUp } from 'lucide-react';

function SolutionsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir KairoSoft?
            </h2>
            <p className="text-xl text-gray-600">
              Beneficios que marcan la diferencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simplicidad</h3>
              <p className="text-gray-600">
                Interfaces intuitivas y procesos simplificados para una adopción rápida.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automatización</h3>
              <p className="text-gray-600">
                Procesos automatizados que ahorran tiempo y reducen errores humanos.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Soporte Humano</h3>
              <p className="text-gray-600">
                Atención personalizada con especialistas disponibles cuando los necesites.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Escalabilidad</h3>
              <p className="text-gray-600">
                Soluciones que crecen junto a tu empresa sin perder rendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default SolutionsSection;
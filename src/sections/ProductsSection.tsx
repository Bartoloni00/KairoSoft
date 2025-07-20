import { Check } from 'lucide-react';

function ProductsSection() {
  return (
    <section id="productos" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Nuestros Productos
        </h2>
        <p className="text-xl text-gray-600">
          Soluciones diseñadas para potenciar tu negocio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* HandyStock */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
          <div className="w-12 h-12 bg-gray-800 rounded mb-6"></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">HandyStock</h3>
          <p className="text-gray-600 mb-6">
            Software completo de gestión de stock e inventario para empresas de todos los tamaños.
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
            <Check className="h-4 w-4 mr-1" />
            Disponible
          </span>
        </div>

        {/* Software a medida */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
          <div className="w-12 h-12 bg-gray-800 rounded mb-6"></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Software a Medida</h3>
          <p className="text-gray-600 mb-6">
            Desarrollamos soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
            <Check className="h-4 w-4 mr-1" />
            Disponible
          </span>
        </div>

        {/* CRM */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 opacity-75">
          <div className="w-12 h-12 bg-gray-400 rounded mb-6"></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">CRM Integral</h3>
          <p className="text-gray-600 mb-6">
            Sistema completo de gestión de relaciones con clientes para optimizar tu proceso de ventas.
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 border border-gray-300">
            Próximamente
          </span>
        </div>

        {/* App Presupuestos */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 opacity-75">
          <div className="w-12 h-12 bg-gray-400 rounded mb-6"></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">App Presupuestos</h3>
          <p className="text-gray-600 mb-6">
            Aplicación especializada para crear y gestionar presupuestos del sector gastronómico.
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 border border-gray-300">
            Próximamente
          </span>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ProductsSection;
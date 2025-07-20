function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empresas que confían en nosotros
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-gray-300 rounded mb-6"></div>
              <p className="text-gray-600 mb-6 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Juan Pérez</p>
                <p className="text-gray-500">CEO, Empresa ABC</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-gray-300 rounded mb-6"></div>
              <p className="text-gray-600 mb-6 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              </p>
              <div>
                <p className="font-semibold text-gray-900">María García</p>
                <p className="text-gray-500">Directora, Empresa XYZ</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="w-16 h-16 bg-gray-300 rounded mb-6"></div>
              <p className="text-gray-600 mb-6 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Carlos López</p>
                <p className="text-gray-500">Gerente, Empresa 123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ReviewsSection;
function AboutSection() {
  return (
    <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre KairoSoft
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Somos una empresa de tecnología especializada en desarrollar soluciones SaaS 
              y software a medida que transforman la manera en que las empresas operan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4">
                <img src="/public/abraham-bartoloni.jpeg" alt="Abraham Bartoloni" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Abraham Bartoloni</h3>
              <p className="text-gray-600 mb-4">CEO & Backend Developer</p>
              <p className="text-gray-600">Líder técnico especializado en arquitecturas backend escalables y soluciones de alto rendimiento.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4">
                <img src="https://avatars.githubusercontent.com/u/197197706?v=4" alt="Ezequiel Arevalo" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ezequiel Arevalo</h3>
              <p className="text-gray-600 mb-4">Co-founder & Frontend Developer</p>
              <p className="text-gray-600">Experto en experiencia de usuario y desarrollo frontend con foco en interfaces intuitivas.</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutSection;
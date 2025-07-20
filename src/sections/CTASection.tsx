import { Phone, ArrowRight } from 'lucide-react';

function CTASection() {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <a href="https://api.whatsapp.com/send/?phone=54346406944&text=Hola%20KairoSoft%2C%20quiero%20contactarte%20con%20tu%20equipo%20de%20desarrollo%20para%20que%20te%20ayudemos%20a%20crear%20un%20producto%20increible%20para%20mi%20empresa." target="_blank" rel="noreferrer">
            <button className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 hover:cursor-pointer transition-colors inline-flex items-center group">
              <Phone className="h-5 w-5 mr-2" />
              Contactanos por WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </section>
    );
}

export default CTASection;
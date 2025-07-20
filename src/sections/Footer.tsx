import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12">
                  <img src="/public/kairoSoft-LOGO.svg" alt="KairoSoft" />
                </div>
                <span className="ml-2 text-xl font-bold">KairoSoft</span>
              </div>
              <p className="text-gray-300 mb-4">
                Soluciones SaaS y software a medida para impulsar tu negocio hacia el éxito.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/kairosoft.arg/" target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                    <Instagram className="h-4 w-4" />
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#productos" className="text-gray-300 hover:text-white transition-colors">Productos</a></li>
                <li><a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">Beneficios</a></li>
                <li><a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Términos de Servicio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  bartoloniabraham@gmail.com
                </li>
                <li className="flex items-center text-gray-300">
                  <Phone className="h-4 w-4 mr-2" />
                  +54 3436 406944
                </li>
                <li className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  Rosario, Santa Fe, Argentina
                </li>
                <li className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  Victoria, Entre Rios, Argentina
                </li>
                <li className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  Buenos Aires, Argentina
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 KairoSoft. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
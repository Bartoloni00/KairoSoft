import BaseButton from "../components/BaseButton"

function Navbar() {
  return (
    <header className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8">
                <img src="/public/kairoSoft-LOGO.png" alt="KairoSoft" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900"><span className="text-red-500">Kairo</span>Soft</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#productos" className="text-gray-600 hover:text-gray-900 transition-colors">Productos</a>
              <a href="#beneficios" className="text-gray-600 hover:text-gray-900 transition-colors">Beneficios</a>
              <a href="#contacto" className="text-gray-600 hover:text-gray-900 transition-colors">Contacto</a>
            </nav>
            <BaseButton children="Contactar" />
          </div>
        </div>
      </header>
  )
}

export default Navbar
import { StrictMode } from 'react'
import Navbar from './sections/Navbar.tsx';
import Footer from './sections/Footer.tsx';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <App />
    </main>
    <Footer />
  </StrictMode>,
)

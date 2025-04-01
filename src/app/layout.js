import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import ChatBot from "./components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BlanfordDev - Soluciones de Software Innovadoras",
  description: "Transformamos tus ideas en soluciones digitales efectivas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 z-50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <nav className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/logo.png" 
                  alt="BlanfordDev Logo" 
                  width={60} 
                  height={60} 
                />
                <span className="text-white font-bold text-xl">BlanfordDev</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/#acerca" className="text-white hover:text-blue-400 transition duration-300">
                  Nosotros
                </Link>
                <Link href="/#servicios" className="text-white hover:text-blue-400 transition duration-300">
                  Servicios
                </Link>
                <Link href="/#testimonios" className="text-white hover:text-blue-400 transition duration-300">
                  Testimonios
                </Link>
                <Link href="/#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
                  Contacto
                </Link>
              </div>
              
              <button className="md:hidden text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </nav>
          </div>
        </header>
        
        {children}
        
        {/* Componente ChatBot añadido aquí */}
        <ChatBot />
        
        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">BlanfordDev</h3>
                <p className="text-gray-400 mb-4">Transformamos tus ideas en soluciones digitales efectivas.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Servicios</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Desarrollo Web</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Aplicaciones Móviles</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Software a Medida</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <p className="text-gray-400 mb-2">Puebla de Zaragoza, Pue., México</p>
                <p className="text-gray-400 mb-2">5570132697</p>
                <p className="text-gray-400">ventas@blanford.dev</p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} BlanfordDev. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen text-white">
        {/* Imagen de fondo a pantalla completa */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/images/tech-background.jpg')",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)" // Superposición sutil para mejorar contraste
          }}
        ></div>
        
        {/* Contenido con algo de superposición para mejorar legibilidad */}
        <div className="relative z-10 container mx-auto px-6 py-32 md:py-40 flex flex-col justify-center h-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Soluciones de Software<br />Innovadoras
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl">
            Transformamos tus ideas en soluciones digitales efectivas.
          </p>
          <Link href="#contacto" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-md inline-block w-fit transition duration-300">
            Contáctanos
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 border-b border-gray-700 pb-4">Acerca de BlanfordDev</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Mission */}
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-64 h-64 mb-6 relative">
                <Image 
                  src="/images/mission.jpg" 
                  alt="Nuestra Misión" 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-center text-gray-300">
                En BlanfordDev, nuestra misión es proporcionar soluciones de software innovadoras que impulsen el crecimiento y la eficiencia de las empresas. Creemos en el poder de la tecnología para transformar procesos y mejorar la experiencia del cliente.
              </p>
            </div>
            
            {/* Team */}
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-64 h-64 mb-6 relative">
                <Image 
                  src="/images/team.jpg" 
                  alt="Nuestro Equipo" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Nuestro Equipo</h3>
              <p className="text-center text-gray-300">
                Contamos con un equipo de expertos apasionados en desarrollo de software y tecnología. Cada miembro de BlanfordDev aporta habilidades únicas y experiencia, lo que nos permite ofrecer un servicio excepcional y soluciones personalizadas.
              </p>
            </div>
            
            {/* Values */}
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-64 h-64 mb-6 relative">
                <Image 
                  src="/images/values.jpg" 
                  alt="Nuestros Valores" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Nuestros Valores</h3>
              <p className="text-center text-gray-300">
                En BlanfordDev, nos guiamos por valores fundamentales como la integridad, la innovación y el compromiso con nuestros clientes. Trabajamos arduamente para mantener una relación de confianza y transparencia con cada uno de nuestros socios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 border-b border-gray-700 pb-4">Nuestros Servicios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desarrollo Web */}
            <div className="bg-gray-800 p-6 rounded-lg hover-lift shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Desarrollo Web</h3>
              </div>
              <p className="text-gray-300 mb-4">Sitios web profesionales y personalizados para tu negocio o proyecto personal.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Diseño responsive
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Optimización SEO
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Integración con redes sociales
                </li>
              </ul>
            </div>

            {/* Aplicaciones Web */}
            <div className="bg-gray-800 p-6 rounded-lg hover-lift shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Aplicaciones Web</h3>
              </div>
              <p className="text-gray-300 mb-4">Soluciones web avanzadas con funcionalidades complejas y bases de datos.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Sistemas de gestión
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Paneles de administración
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Autenticación de usuarios
                </li>
              </ul>
            </div>

            {/* Aplicaciones Móviles */}
            <div className="bg-gray-800 p-6 rounded-lg hover-lift shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Apps Móviles</h3>
              </div>
              <p className="text-gray-300 mb-4">Aplicaciones nativas e híbridas para iOS y Android.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Diseño UI/UX intuitivo
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Publicación en stores
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Integración con APIs
                </li>
              </ul>
            </div>

            {/* Dominios y Hosting */}
            <div className="bg-gray-800 p-6 rounded-lg hover-lift shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Dominios y Hosting</h3>
              </div>
              <p className="text-gray-300 mb-4">Registro de dominios y alojamiento web de alto rendimiento.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Registro de dominios
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Hosting compartido/VPS
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Certificados SSL
                </li>
              </ul>
            </div>

            {/* Correos Corporativos */}
            <div className="bg-gray-800 p-6 rounded-lg hover-lift shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Correos Corporativos</h3>
              </div>
              <p className="text-gray-300 mb-4">Correos electrónicos profesionales con tu dominio.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Configuración personalizada
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Webmail accesible
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Filtros anti-spam
                </li>
              </ul>
            </div>

            {/* Soluciones con IA */}
            <div className="bg-gray-800 p-6 rounded-lg hover-lift shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-teal-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Soluciones con IA</h3>
              </div>
              <p className="text-gray-300 mb-4">Integración de inteligencia artificial en tus proyectos.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Chatbots inteligentes
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Procesamiento de lenguaje
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Automatización de procesos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Lo que dicen nuestros clientes satisfechos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <div className="flex justify-center mb-4">
                <Image 
                  src="/images/moodguardlogo.png" 
                  alt="Avatar" 
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Chat mood guard</h3>
              <p className="text-center mb-6">&quot;Pedí que se creara este chat para ayudarme a detectar señales y signos de depresión y otros trastornos psicológicos, y debo decir que la persona que desarrolló esta herramienta hizo un trabajo excelente. El chat cumple perfectamente con las funciones que necesitaba, permitiéndome identificar de manera clara y precisa los síntomas de varios trastornos mentales. Además, está específicamente diseñado para tratar temas relacionados con la salud mental, lo que lo hace muy efectivo y enfocado, sin desviarse hacia otros temas ajenos. Esto me dio mucha confianza, ya que pude obtener información relevante y útil sobre mi bienestar psicológico. Aprecio mucho el esfuerzo y la dedicación que se pusieron en el desarrollo de esta herramienta, y sin duda ha sido un gran apoyo en mi proceso para entender mejor los trastornos psicológicos.&quot;</p>
              {/* Sistema de calificación con estrellas */}
              <div className="flex justify-center items-center mb-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">5.0/5.0</span>
              </div>
              <p className="text-center text-sm text-gray-500">19/3/2024</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <div className="flex justify-center mb-4">
                <Image 
                  src="/images/escribialogo.png" 
                  alt="Avatar" 
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">EscribIA</h3>
              <p className="text-center mb-6">&quot;Me ha ayudado muchísimo a detectar errores ortográficos, faltas de puntuación y acentos que a veces se me pasan por alto. Además, me encanta que no solo señala los errores, sino que también explica cómo corregirlos de manera clara y sencilla. Al final, la calificación y la retroalimentación son súper útiles para aprender y perfeccionar mi redacción. ¡Definitivamente la recomiendo para cualquiera que quiera escribir de manera más profesional y sin errores!&quot;</p>
              {/* Sistema de calificación con estrellas */}
              <div className="flex justify-center items-center mb-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">5.0/5.0</span>
              </div>
              <p className="text-center text-sm text-gray-500">12/5/2023</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <div className="flex justify-center mb-4">
                <Image 
                  src="/images/fasttransnational.webp" 
                  alt="Avatar" 
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Fastransnational</h3>
              <p className="text-center mb-6">&quot;La página web para servicios de seguridad es muy profesional y fácil de navegar. Ofrece información clara sobre los servicios como guardias de seguridad, custodias, cuartos de seguridad y tecnología avanzada para protección. Me gustó que los detalles están bien organizados y es sencillo encontrar lo que uno necesita. Además, el diseño es atractivo y transmite confianza. La única razón por la que no doy 5 estrellas es porque podría mejorar un poco la velocidad de carga en algunas secciones. ¡Pero en general, excelente trabajo!&quot;</p>
              {/* Para una calificación de 4 estrellas de 5 */}
              <div className="flex justify-center items-center mb-4">
                <div className="flex">
                  {/* 4 estrellas llenas */}
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">4.0/5.0</span>
              </div>
              <p className="text-center text-sm text-gray-500">7/8/2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Versión Final con Tarjetas Uniformes */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contáctanos hoy mismo y descubre cómo podemos llevar tus ideas al siguiente nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* WhatsApp Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition duration-300 h-full flex flex-col">
              <div className="flex items-start gap-4 flex-grow">
                <div className="bg-green-600 p-3 rounded-full flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Chat directo por WhatsApp</h3>
                  <p className="text-gray-300 mb-4">Respuesta rápida en horario laboral</p>
                </div>
              </div>
              <Link 
                href="https://wa.me/5570132697?text=Hola%20BlanfordDev,%20estoy%20interesado%20en%20sus%20servicios." 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 w-full"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar mensaje
              </Link>
            </div>

            {/* Email Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300 h-full flex flex-col">
              <div className="flex items-start gap-4 flex-grow">
                <div className="bg-blue-600 p-3 rounded-full flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Correo electrónico</h3>
                  <p className="text-gray-300 mb-4">Respuesta en menos de 24 horas</p>
                </div>
              </div>
              <Link 
                href="mailto:acovamartinez@gmail.com?subject=Consulta%20de%20servicios%20BlanfordDev&body=Hola,%20estoy%20interesado%20en%20conocer%20más%20sobre%20sus%20servicios." 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 w-full"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Enviar email
              </Link>
            </div>

            {/* Horario Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300 h-full flex flex-col">
              <div className="flex items-start gap-4 flex-grow">
                <div className="bg-purple-600 p-3 rounded-full flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Horario de atención</h3>
                  <div 
                    className="cursor-pointer flex items-center gap-2 w-fit mb-4 group"
                    onClick={() => setIsScheduleOpen(!isScheduleOpen)}
                  >
                    <span className="text-gray-300 group-hover:text-white transition">Ver horarios</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isScheduleOpen ? 'rotate-180' : ''} text-gray-400 group-hover:text-white`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>

                  {isScheduleOpen && (
                    <div className="mt-2 bg-gray-700 p-3 rounded-lg">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex justify-between text-sm">
                          <span>Lunes a Viernes:</span>
                          <span className="font-medium">09:00 a.m. – 05:00 p.m.</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>Sábados:</span>
                          <span className="font-medium">10:00 a.m. – 02:00 p.m.</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>Domingos:</span>
                          <span className="font-medium">Cerrado</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>Festivos:</span>
                          <span className="font-medium">Horario especial</span>
                        </li>
                      </ul>
                      <p className="mt-2 text-xs text-blue-400">
                        * Horarios especiales aplican en días festivos nacionales
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-auto pt-4">
                {/* Espacio reservado para alinear altura */}
              </div>
            </div>

            {/* Ubicación Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition duration-300 h-full flex flex-col">
              <div className="flex items-start gap-4 flex-grow">
                <div className="bg-red-600 p-3 rounded-full flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">Ubicación</h3>
                  <p className="text-gray-300">Puebla de Zaragoza, Pue., México</p>
                </div>
              </div>
              <Link 
                href="https://www.google.com.mx/maps/place/Heroica+Puebla+de+Zaragoza,+Pue./@19.0400289,-98.2745841,12z/data=!3m1!4b1!4m6!3m5!1s0x85cfc0bd5ebc7a3b:0x48a6461de494ad95!8m2!3d19.0414398!4d-98.2062727!16zL20vMDE4M3pf?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 w-full"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Ver en Google Maps
              </Link>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-teal-500 transition duration-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120545.70779449428!2d-98.25806017773435!3d19.04160239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0bd5ebc7a3b%3A0x48a6461de494ad95!2sPuebla%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1710871216131!5m2!1ses-419!2smx" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90 hover:opacity-100 transition duration-300"
              title="Ubicación BlanfordDev en Puebla"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
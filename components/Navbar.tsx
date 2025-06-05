"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              MiSitio
            </a>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-100 hover:text-blue-600">
              Inicio
            </a>
            <a href="/about" className="text-gray-100 hover:text-blue-600">
              Sobre mí
            </a>
            <a href="/projects" className="text-gray-100 hover:text-blue-600">
              Proyectos
            </a>
            <a href="/contact" className="text-gray-100 hover:text-blue-600">
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {/* Icono hamburguesa */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Icono cerrar (X)
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1" id="mobile-menu">
          <a href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600">
            Inicio
          </a>
          <a href="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600">
            Sobre mí
          </a>
          <a href="/projects" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600">
            Proyectos
          </a>
          <a href="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/imagens/logo-cabecalho.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo Musspe" className="h-10 w-auto mr-2" />
          <h1 className="text-2xl font-barlow-black text-brand-dark">MUSSPE</h1>
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navegação desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors
                 duration-200"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/noticias"
                className="text-gray-600 hover:text-gray-900 transition-colors
                 duration-200"
              >
                Notícias
              </Link>
            </li>
            <li>
              <Link
                to="/acervo"
                className="text-gray-600 hover:text-gray-900 transition-colors
                 duration-200"
              >
                Acervo
              </Link>
            </li>
            <li>
              <Link
                to="/colaboradores"
                className="text-gray-600 hover:text-gray-900 transition-colors
                 duration-200"
              >
                Colaboradores
              </Link>
            </li>
            <li>
              <Link
                to="/visita"
                className="text-gray-600 hover:text-gray-900 transition-colors
                 duration-200"
              >
                Visita
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navegação mobile*/}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform
           transition-transform duration-300 ease-in-out z-40 ${
             isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
           } md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <Link
              to="/"
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/noticias"
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Notícias
            </Link>
          </li>
          <li>
            <Link
              to="/acervo"
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Acervo
            </Link>
          </li>
          <li>
            <Link
              to="/colaboradores"
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Colaboradores
            </Link>
          </li>
          <li>
            <Link
              to="/visita"
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              Visita
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay para fechar o menu clicando fora */}
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        ></div>
      )}
    </header>
  );
}

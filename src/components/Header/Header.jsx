import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/imagens/logo-cabecalho.png";

export default function Header({ activePage, setActivePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-brand-dark shadow-md relative z-50">
      <div
        className="w-full mx-auto flex items-center justify-between p-4 max-w-2xl md:max-w-3xl
       lg:max-w-4xl xl:max-w-5xl"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo Musspe" className="h-10 w-auto mr-2" />
          <h1 className="text-2xl font-barlow-black text-brand-bege">MUSSPE</h1>
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden w-6 h-6 bg-no-repeat bg-center focus:outline-none 
          bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox=%270%200%2030%2030%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20stroke=%27rgba(255,220,210,1)%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-miterlimit=%2710%27%20d=%27M4%207h22M4%2015h22M4%2023h22%27/%3E%3C/svg%3E')]
          border border-brand-laranja rounded px-7 py-5 bg-[length:1.8rem_1.8rem]"
          onClick={toggleMobileMenu}
        ></button>

        {/* Navegação desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-5 text-md text-white font-barlow-semibold">
            <li>
              <Link
                to="/"
                className="relative"
                onClick={() => setActivePage("home")}
              >
                <span className="relative z-10">Início</span>
                <div
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
                    activePage === "home" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/noticias"
                className="relative"
                onClick={() => setActivePage("noticias")}
              >
                <span className="relative z-10">Notícias</span>
                <div
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
                    activePage === "noticias" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/acervo"
                className="relative"
                onClick={() => setActivePage("acervo")}
              >
                <span className="relative z-10">Acervo</span>
                <div
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
                    activePage === "acervo" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/jogos"
                className="relative"
                onClick={() => setActivePage("jogos")}
              >
                <span className="relative z-10">Jogos</span>
                <div
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
                    activePage === "jogos" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/colaboradores"
                className="relative"
                onClick={() => setActivePage("colaboradores")}
              >
                <span className="relative z-10">Colaboradores</span>
                <div
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
                    activePage === "colaboradores" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/visita"
                className={
                  activePage === "visita"
                    ? "text-white bg-brand-laranja rounded-full px-1.5 py-1 transition-colors duration-200 ease-out focus:outline-none border-2 border-transparent"
                    : "text-brand-laranja border-2 border-brand-laranja rounded-full px-1.5 py-1 transition-colors duration-200 ease-out focus:outline-none"
                }
                onClick={() => setActivePage("visita")}
              >
                Agende uma Visita
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

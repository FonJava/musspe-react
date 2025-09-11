import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import logo from "/imagens/logo-cabecalho.png";

export default function Header({ activePage, setActivePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-50 bg-brand-dark shadow-md">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between p-4 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        {/* Logo */}
        <Link
          to="/musspe-react/"
          className="flex items-center"
          onClick={() => setActivePage("home")}
        >
          <img
            src={logo}
            alt="Logo Musspe"
            className="mr-2 h-10 w-auto"
            draggable="false"
          />
          <h1 className="font-barlow-black text-2xl text-brand-bege">MUSSPE</h1>
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="h-6 w-6 rounded border border-brand-laranja bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox=%270%200%2030%2030%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20stroke=%27rgba(255,220,210,1)%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-miterlimit=%2710%27%20d=%27M4%207h22M4%2015h22M4%2023h22%27/%3E%3C/svg%3E')] bg-[length:1.8rem_1.8rem] bg-center bg-no-repeat px-7 py-5 focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Abrir menu de navegação"
        ></button>

        {/* Navegação desktop */}
        <nav className="hidden md:block">
          <ul className="text-md flex space-x-5 font-barlow-semibold text-white">
            <li>
              <Link
                to="/musspe-react/"
                className="relative"
                onClick={() => setActivePage("home")}
              >
                <span className="relative z-10">Início</span>
                <div
                  className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                    activePage === "home"
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/musspe-react/noticias"
                className="relative"
                onClick={() => setActivePage("noticias")}
              >
                <span className="relative z-10">Notícias</span>
                <div
                  className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                    activePage === "noticias"
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/musspe-react/acervo"
                className="relative"
                onClick={() => setActivePage("acervo")}
              >
                <span className="relative z-10">Acervo</span>
                <div
                  className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                    activePage === "acervo"
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/musspe-react/jogos"
                className="relative"
                onClick={() => setActivePage("jogos")}
              >
                <span className="relative z-10">Jogos</span>
                <div
                  className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                    activePage === "jogos"
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/musspe-react/colaboradores"
                className="relative"
                onClick={() => setActivePage("colaboradores")}
              >
                <span className="relative z-10">Colaboradores</span>
                <div
                  className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                    activePage === "colaboradores"
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/musspe-react/visita"
                className={
                  activePage === "visita"
                    ? "rounded-full border-2 border-transparent bg-brand-laranja px-1.5 py-1 text-white transition-colors duration-200 ease-out focus:outline-none"
                    : "rounded-full border-2 border-brand-laranja px-1.5 py-1 text-brand-laranja transition-colors duration-200 ease-out focus:outline-none"
                }
                onClick={() => setActivePage("visita")}
              >
                Agende uma visita
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navegação mobile*/}

      <div
        className={`fixed right-0 top-0 z-40 h-full w-64 transform bg-brand-dark shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={
          isMobileMenuOpen
            ? { boxShadow: "-10px 0 25px -5px rgba(0, 0, 0, 0.5)" }
            : {}
        }
      >
        <div className="flex items-center justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-brand-bege focus:outline-none"
            aria-label="Fechar menu de navegação"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
        <ul className="flex flex-col space-y-4 p-4 font-barlow-semibold text-white">
          <li>
            <Link
              to="/musspe-react/"
              className="relative inline-block"
              onClick={() => {
                setActivePage("home");
                toggleMobileMenu();
              }}
            >
              <span className="relative z-10">Início</span>
              <div
                className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                  activePage === "home"
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link
              to="/musspe-react/noticias"
              className="relative inline-block"
              onClick={() => {
                setActivePage("noticias");
                toggleMobileMenu();
              }}
            >
              <span className="relative z-10">Notícias</span>
              <div
                className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                  activePage === "noticias"
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link
              to="/musspe-react/acervo"
              className="relative inline-block"
              onClick={() => {
                setActivePage("acervo");
                toggleMobileMenu();
              }}
            >
              <span className="relative z-10">Acervo</span>
              <div
                className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                  activePage === "acervo"
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link
              to="/musspe-react/jogos"
              className="relative inline-block"
              onClick={() => {
                setActivePage("jogos");
                toggleMobileMenu();
              }}
            >
              <span className="relative z-10">Jogos</span>
              <div
                className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                  activePage === "jogos"
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link
              to="/musspe-react/colaboradores"
              className="relative inline-block"
              onClick={() => {
                setActivePage("colaboradores");
                toggleMobileMenu();
              }}
            >
              <span className="relative z-10">Colaboradores</span>
              <div
                className={`absolute left-0 right-0 top-3/4 h-1 rounded-full bg-brand-tangerina transition-all duration-300 ease-out ${
                  activePage === "colaboradores"
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link
              to="/musspe-react/visita"
              className={`relative inline-block ${
                activePage === "visita"
                  ? "rounded-full border-2 border-transparent bg-brand-laranja px-1.5 py-0 text-white transition-colors duration-200 ease-out"
                  : "rounded-full border-2 border-brand-laranja px-1.5 py-0 text-brand-laranja transition-colors duration-200 ease-out"
              }`}
              onClick={() => {
                setActivePage("visita");
                toggleMobileMenu();
              }}
            >
              Agende uma visita
            </Link>
          </li>
        </ul>

        {/* Redes Sociais */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/museudesolospe/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@museudesolospe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@museudesolospe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.facebook.com/museudesolospe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay para fechar o menu clicando fora */}
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="fixed inset-0 z-30 bg-opacity-100 md:hidden"
        ></div>
      )}
    </header>
  );
}

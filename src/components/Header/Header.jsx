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
    <header className="bg-brand-dark shadow-md relative z-50">
      <div className="w-full mx-auto flex items-center justify-between p-4 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        {/* Logo */}
        <Link
          to="/musspe-react/"
          className="flex items-center"
          onClick={() => setActivePage("home")}
        >
          <img
            src={logo}
            alt="Logo Musspe"
            className="h-10 w-auto mr-2"
            draggable="false"
          />
          <h1 className="text-2xl font-barlow-black text-brand-bege">MUSSPE</h1>
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden w-6 h-6 bg-no-repeat bg-center focus:outline-none bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox=%270%200%2030%2030%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20stroke=%27rgba(255,220,210,1)%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-miterlimit=%2710%27%20d=%27M4%207h22M4%2015h22M4%2023h22%27/%3E%3C/svg%3E')] border border-brand-laranja rounded px-7 py-5 bg-[length:1.8rem_1.8rem]"
          onClick={toggleMobileMenu}
        ></button>

        {/* Navegação desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-5 text-md text-white font-barlow-semibold">
            <li>
              <Link
                to="/musspe-react/"
                className="relative"
                onClick={() => setActivePage("home")}
              >
                <span className="relative z-10">Início</span>
                <div
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                  className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                    ? "text-white bg-brand-laranja rounded-full px-1.5 py-1 transition-colors duration-200 ease-out focus:outline-none border-2 border-transparent"
                    : "text-brand-laranja border-2 border-brand-laranja rounded-full px-1.5 py-1 transition-colors duration-200 ease-out focus:outline-none"
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
        className={`fixed top-0 right-0 h-full w-64 bg-brand-dark shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
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
        <ul className="flex flex-col p-4 space-y-4 text-white font-barlow-semibold">
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
                className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                className={`absolute top-3/4 left-0 right-0 h-1 bg-brand-tangerina rounded-full transition-all duration-300 ease-out ${
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
                  ? "text-white bg-brand-laranja rounded-full px-1.5 py-0 transition-colors duration-200 ease-out border-2 border-transparent"
                  : "text-brand-laranja border-2 border-brand-laranja rounded-full px-1.5 py-0 transition-colors duration-200 ease-out"
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
              className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@museudesolospe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@museudesolospe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.facebook.com/museudesolospe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
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
          className="fixed inset-0 bg-opacity-100 z-30 md:hidden"
        ></div>
      )}
    </header>
  );
}

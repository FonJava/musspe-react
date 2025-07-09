import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/imagens/logo-cabecalho.png";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo Musspe" className="h-10 w-auto mr-2" />
          <h1 className="text-2xl font-semibold text-gray-800">MUSSPE</h1>
        </Link>

        {/* Navegação */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/noticias"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Notícias
              </Link>
            </li>
            <li>
              <Link
                to="/acervo"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Acervo
              </Link>
            </li>
            <li>
              <Link
                to="/colaboradores"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Colaboradores
              </Link>
            </li>
            <li>
              <Link
                to="/visita"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Visita
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

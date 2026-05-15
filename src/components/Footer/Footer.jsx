import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer({ visits = 0 }) {
  return (
    <footer className="bottom-0 min-h-[270px] w-full bg-brand-dark pb-8 font-barlow text-[16px] text-brand-bege">
      <div className="mx-auto max-w-[560px]">
        <div className="mx-auto grid grid-cols-2 justify-items-center gap-y-6 py-12 sm:flex sm:justify-between">
          <div className="flex flex-col">
            <h2 className="pb-2 font-barlow-bold text-[20px]">Páginas</h2>
            <Link to="/" className="hover:underline">
              Início
            </Link>
            <Link to="/noticias" className="hover:underline">
              Noticias
            </Link>
            <Link to="/acervo" className="hover:underline">
              Acervo
            </Link>
            <Link to="/jogos" className="hover:underline">
              Jogos
            </Link>
            <Link to="/colaboradores" className="hover:underline">
              Colaboradores
            </Link>
            <Link to="/visita" className="hover:underline">
              Agende uma visita
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="pb-2 font-barlow-bold text-[20px]">Endereço</h2>
            <p className="max-w-[133px] font-barlow-italic">
              Rua Dom Manoel de Medeiros, s/n, Dois Irmãos, Prédio Professor
              Mateus Rosas Ribeiro - UFRPE
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="pb-2 font-barlow-bold text-[20px]">Contatos</h2>
            <p>
              (81) 9 9604 - 3576
              <br /> musspe@ufrpe.br
              <br /> @museudesolospe
            </p>
          </div>
          <div className="mt-2 flex flex-col space-y-2">
            <a
              href="https://www.instagram.com/museudesolospe/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@museudesolospe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@museudesolospe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="https://www.facebook.com/museudesolospe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
        <div className="mx-14 pt-6 text-end sm:mx-0 sm:pt-0">
          <p className="mb-2 font-barlow-italic text-[14px]">
            Visitas do site: {visits}
          </p>
          <p className="font-barlow-medium-italic text-[15px]">
            Design por Tiago Finizola, implementação por Anthony Guerra e
            Gabriel Leão, e ilustrações por Laura Lins.
          </p>
          <p className="font-barlow-italic text-[13px]">
            © 2026 Museu de Solos de Pernambuco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

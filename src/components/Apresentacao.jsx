import React, { useState, useEffect } from "react";
import apreesq from "/imagens/apresentacao-esquerda.png";
import apredir from "/imagens/apresentacao-direita.png";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Apresentacao({
  imagem,
  titulo,
  descricao,
  children,
  tamanhoImagem = 350,
  larguraTexto = 300,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageSize = () => {
    if (windowWidth >= 1024) return tamanhoImagem + 50;
    if (windowWidth >= 768) return tamanhoImagem - 50;
    return tamanhoImagem;
  };

  const getTextWidth = () => {
    if (windowWidth >= 1024) return larguraTexto + 100;
    if (windowWidth >= 768) return larguraTexto + 150;
    if (windowWidth >= 640) return larguraTexto + 150;
    return larguraTexto + 200;
  };

  const currentSize = getImageSize();
  const currentTextWidth = getTextWidth();
  const currentParagraphWidth = currentTextWidth - 50;

  return (
    <section className="relative bg-brand-bege text-brand-dark">
      <img
        src={apreesq}
        alt="Decoração esquerda"
        className="absolute w-[150px] md:w-[200px] bottom-0"
        draggable="false"
      />
      <img
        src={apredir}
        alt="Decoração direita"
        className="absolute right-0 w-[150px] md:w-[200px]"
        draggable="false"
      />
      <div className="flex flex-col space-y-2 px-3 py-6 mb-[-150px] md:mb-[-120px] hidden md:flex ">
        <a
          href="https://www.instagram.com/museudesolospe/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark hover:text-brand-orange transition-colors duration-200"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.youtube.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark hover:text-brand-orange transition-colors duration-200"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark hover:text-brand-orange transition-colors duration-200"
        >
          <FaTiktok size={20} />
        </a>
        <a
          href="https://www.facebook.com/museudesolospe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark hover:text-brand-orange transition-colors duration-200"
        >
          <FaFacebook size={20} />
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-[300px] sm:w-[400px] md:w-[600px] lg:w-[900px] mx-auto pt-8">
        <img
          src={imagem}
          alt={titulo}
          draggable="false"
          className="mt-[-30px] pt-2 object-contain md:order-2"
          style={{
            width: `${currentSize}px`,
            height: `${currentSize}px`,
          }}
        />
        <div
          className="md:order-1 mt-[-40px] md:mt-[-20px] pb-16 sm:pb-6"
          style={{ maxWidth: `${currentTextWidth}px` }}
        >
          <h2 className="font-barlow-extrabold text-[28px] sm:text-[40px] md:text-[30px] lg:text-[40px] leading-tight">
            {titulo}
          </h2>
          <p
            className="font-barlow text-[18px] sm:text-[20px] md:text-[18px] lg:text-[20px] pb-3"
            style={{ maxWidth: `${currentParagraphWidth}px` }}
          >
            {descricao}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}

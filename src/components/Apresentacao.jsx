import React, { useEffect, useState } from "react";
import apreesq from "/imagens/apresentacao-esquerda.webp";
import apredir from "/imagens/apresentacao-direita.webp";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import BotaoAudioguia from "./Botao-audioguia";

export default function Apresentacao({
  imagem,
  titulo,
  descricao,
  children,
  tamanhoImagem = 350,
  larguraTexto = 300,
  ajusteBottom,
  audioguiaTexto = "",
  audioguiaSecoes = [],
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
        className="absolute bottom-0 w-[150px] md:w-[200px]"
        draggable="false"
      />
      <img
        src={apredir}
        alt="Decoração direita"
        className="absolute right-0 w-[150px] md:w-[200px]"
        draggable="false"
      />
      <div className="mb-[-150px] hidden flex-col space-y-2 px-3 py-6 md:mb-[-120px] md:flex">
        <a
          href="https://www.instagram.com/museudesolospe/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark transition-colors duration-200 hover:text-brand-orange"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.youtube.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark transition-colors duration-200 hover:text-brand-orange"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark transition-colors duration-200 hover:text-brand-orange"
        >
          <FaTiktok size={20} />
        </a>
        <a
          href="https://www.facebook.com/museudesolospe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-dark transition-colors duration-200 hover:text-brand-orange"
        >
          <FaFacebook size={20} />
        </a>
      </div>
      <div className="mx-auto flex w-[300px] flex-col items-center justify-center pt-8 sm:w-[400px] md:w-[600px] md:flex-row lg:w-[900px]">
        <img
          src={imagem}
          alt={titulo}
          draggable="false"
          className={`mt-[-30px] object-contain pt-2 md:order-2 ${ajusteBottom}`}
          style={{
            width: `${currentSize}px`,
            height: `${currentSize}px`,
          }}
        />
        <div
          className="mt-[-40px] pb-16 sm:pb-6 md:order-1 md:mt-[-20px]"
          style={{ maxWidth: `${currentTextWidth}px` }}
        >
          <h2 className="font-barlow-extrabold text-[28px] leading-tight sm:text-[40px] md:text-[30px] lg:text-[40px]">
            {titulo}
          </h2>
          <p
            className="pb-3 font-barlow text-[18px] sm:text-[20px] md:text-[18px] lg:text-[20px]"
            style={{ maxWidth: `${currentParagraphWidth}px` }}
          >
            {descricao}
          </p>
          {children}
        </div>
        <BotaoAudioguia
          audioguiaTexto={audioguiaTexto || `${titulo}. ${descricao}`}
          audioguiaSecoes={audioguiaSecoes}
        />
      </div>
    </section>
  );
}

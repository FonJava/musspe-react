import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/Botaoo";
import imgesq from "/imagens/sobre-nos-esquerda.png";
import imgdir from "/imagens/sobre-nos-direita.png";
import sobrenos from "/imagens/sobre-nos-imagem.png";
import sobrenosicon from "/imagens/sobre-nos-icon.png";
import BarraVisita from "../../components/Barra-visitaa";
import Apresentacao from "../../components/Apresentacao";
import mateuszinho from "/imagens/mateuzinho.png";

export default function Home() {
  /* sobre-nós */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* apresentação */}
      <Apresentacao
        imagem={mateuszinho}
        titulo="Conheça nossos solos, rochas e minerais!"
        descricao="O Museu de Solos de Pernambuco Professor Mateus Rosas Ribeiro tem temática única no estado!"
      >
        <Link to="/musspe-react/visita">
          <Botao
            tamanhoFonte="text-[18px] sm:text-[20px] py-[2.5px] md:text-[16px] lg:text-[20px]"
            paddingY="md:py-[1.5px] lg:py-[2.5px]"
          >
            Agende uma visita
          </Botao>
        </Link>
      </Apresentacao>
      {/* fim de apresentação ####################################### */}
      {/* sobre-nós */}
      <div>
        {/* ======== SEÇÃO MOBILE ========= */}
        {isMobile && (
          <section className="relative bg-[#471A24] text-[#f8c6b1] h-[860px] py-4">
            <img
              src={imgesq}
              alt="Decoração esquerda"
              className="absolute bottom-0 w-14"
              draggable="false"
            />

            <img
              src={imgdir}
              alt="Decoração direita"
              className="absolute top-0 right-0 w-14"
              draggable="false"
            />
            <div className="flex items-center justify-center mb-4">
              <img
                src={sobrenosicon}
                alt="Ícone sobre nós"
                className="w-4 h-5 mr-2 mt-1"
                draggable="false"
              />
              <h2 className="text-3xl font-barlow-extrabold text-[#FFDCD2] my-2">
                Sobre nós
              </h2>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={sobrenos}
                alt="Imagem sobre nós"
                className="w-[300px] rounded-xl mb-6"
                draggable="false"
              />
              <div>
                <p className="text-lg text-[#FFDCD2] font-barlow max-w-xs text-justify">
                  O Museu de Solos de Pernambuco Professor Mateus Rosas Ribeiro
                  (MUSSPE) foi idealizado pelos pesquisadores Mateus Rosas
                  Ribeiro e Paulo Klinger Tito Jacomine vinculados à
                  Universidade Federal Rural de Pernambuco (UFRPE). Teve origem
                  em 1994 com o projeto de pesquisa intitulado "Caracterização e
                  classificação de solos de referência do estado de Pernambuco",
                  com o apoio da FACEPE e do CNPq, visando uma exposição
                  permanente dos solos de referência do estado.
                </p>
                <Link to="/musspe-react/acervo">
                  <Botao marginY="my-3">Confira nosso acervo</Botao>
                </Link>
              </div>
            </div>
          </section>
        )}
        {/* ======== SEÇÃO DESKTOP  ========= */}
        {!isMobile && (
          <section className="relative bg-[#471A24] text-[#f8c6b1]">
            <img
              src={imgesq}
              alt="Decoração esquerda"
              className="absolute bottom-0 w-16"
              draggable="false"
            />

            <img
              src={imgdir}
              alt="Decoração direita"
              className="absolute top-0 right-0 w-16"
              draggable="false"
            />

            <div className="flex items-center justify-center">
              <img
                src={sobrenosicon}
                alt="Ícone sobre nós"
                className="w-4 h-5 mr-2 mt-5"
                draggable="false"
              />
              <h2 className="text-3xl font-barlow-extrabold text-[#FFDCD2] mt-4">
                Sobre nós
              </h2>
            </div>

            <div className=" max-w-2xl mx-auto flex flex-col md:flex-row items-center md:gap-40">
              <div className="mb-16">
                <p className="text-base mt-8 mr-4 mb-4 font-barlow text-[#FFDCD2]">
                  O Museu de Solos de Pernambuco Professor Mateus Rosas Ribeiro
                  (MUSSPE) foi idealizado pelos pesquisadores Mateus Rosas
                  Ribeiro e Paulo Klinger Tito Jacomine vinculados à
                  Universidade Federal Rural de Pernambuco (UFRPE). Teve origem
                  em 1994 com o projeto de pesquisa intitulado "Caracterização e
                  classificação de solos de referência do estado de Pernambuco",
                  com o apoio da FACEPE e do CNPq, visando uma exposição
                  permanente dos solos de referência do estado.
                </p>
                <Link to="/musspe-react/acervo">
                  <Botao>Confira nosso acervo</Botao>
                </Link>
              </div>

              <div>
                <img
                  src={sobrenos}
                  alt="Imagem sobre nós"
                  className="max-w-xs h-[290px] rounded-lg mb-10"
                  draggable="false"
                />
              </div>
            </div>
          </section>
        )}
        {/* fim de sobre-nos ############################## */}
        {/* barra de visita */}
        <BarraVisita />
      </div>
    </>
  );
}

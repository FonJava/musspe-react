import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/Botao";
import imgesq from "/imagens/sobre-nos-esquerda.png";
import imgdir from "/imagens/sobre-nos-direita.png";
import sobrenos from "/imagens/sobre-nos-imagem.png";
import sobrenosicon from "/imagens/sobre-nos-icon.png";
import BarraVisita from "../../components/Barra-visita";
import Apresentacao from "../../components/Apresentacao";
import mateuszinho from "/imagens/mateuzinho.png";
import principiosicon from "/imagens/principios-icon.png";
import principiosmissao from "/imagens/principios-missao.png";
import principiosvalores from "/imagens/principios-valores.png";
import principiosvisao from "/imagens/principios-visao.png";
import imgprincipiosesq from "/imagens/principios-esquerda.png";
import imgprincipiosdir from "/imagens/principios-direita.png";
import apreesq from "/imagens/apresentacao-esquerda.png";
import notidialogo from "/imagens/dialogo.png";
import detalhevazio from "/imagens/vazios.png";
import detalhe from "/imagens/preenchidos.png";

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
      {/* início-noticias*/}
      <section className="relative bg-[#FFDCD2] h-[200px] sm:h-[300px]">
        <img
          src={apreesq}
          alt="Decoração esquerda"
          className="absolute top-[-1px] w-[150px] md:w-[200px] [transform:rotateX(180deg)]"
          draggable="false"
        />
        <div className="display flex w-[340px] sm:w-[645px] md:w-[750px] lg:w-[1000px] mx-auto relative">
          <img
            src={detalhevazio}
            className="w-[152px] sm:w-[400px] md:w-[425px] lg:w-[455px] absolute top-[182px] sm:top-[252px] md:top-[250px] lg:bottom-[-56px] right-[25px] lg:right-[50px]"
            draggable="false"
          />
          <img
            src={detalhe}
            className="w-[152px] sm:w-[400px] md:w-[425px] lg:w-[455px] absolute top-[24px] sm:top-0 right-[25px] lg:right-[50px]"
            draggable="false"
          />
          <img
            src={notidialogo}
            className="w-[215px] sm:w-[360px] md:w-[420px] lg:w-[455px] relative left-[0px] md:left-[7%] top-[85px] sm:top-[106px] md:top-[75px] lg:top-[56px]"
            draggable="false"
          />
          <div
            className="relative top-[145px] sm:top-[200px] md:top-[184px] lg:top-[172px] left-[-130px] sm:left-[-250px] md:left-[-230px] lg:left-[-250px] w-[210px] sm:w-[270px] lg:w-[300px] text-brand-laranja font-barlow-medium text-[10px] sm:text-[21px] text-center"
            style={{ fontWeight: 700, lineHeight: "1.3" }}
          >
            VAMOS ACOMPANHAR AS NOTÍCIAS?
            <br />
            <Link to="/musspe-react/noticias">
              <Botao
                marginY="my-1 sm:my-2"
                paddingY="py-1 sm:py-1.5"
                tamanhoFonte="text-[10px] sm:text-[18px] lg:text-[20px]"
              >
                Confira agora
              </Botao>
            </Link>
          </div>
          <div className="absolute right-[25px] lg:right-[50px] border-[0.5px] sm:border-2 border-brand-roxo rounded-lg text-center w-[83px] sm:w-[216px] md:w-[230px] lg:w-[247px] top-[56px] sm:top-[85px] lg:top-[80px] p-[-10px] sm:p-0">
            <h3 className="font-barlow-extrabold text-brand-laranja text-[18px] sm:text-[29px] lg:text-[32px] mt-[5px] sm:mt-[20px]">
              Você!
            </h3>
            <p
              className="font-barlow text-brand-dark text-[10px] sm:text-[15px] lg:text-[18px] pb-[5px] sm:pb-[10px] text-start px-3"
              style={{ lineHeight: "1.3" }}
            >
              Fique por dentro das últimas atualizações e eventos do Museu de
              Solos de Pernambuco!
              <br />
            </p>
          </div>
        </div>
      </section>
      {/* sobre-nós */}
      {/* ======== SEÇÃO MOBILE ========= */}
      {isMobile && (
        <section className="relative bg-[#471A24] text-[#FFDCD2] h-[860px] py-4">
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
                (MUSSPE) foi idealizado pelos pesquisadores Mateus Rosas Ribeiro
                e Paulo Klinger Tito Jacomine vinculados à Universidade Federal
                Rural de Pernambuco (UFRPE). Teve origem em 1994 com o projeto
                de pesquisa intitulado "Caracterização e classificação de solos
                de referência do estado de Pernambuco", com o apoio da FACEPE e
                do CNPq, visando uma exposição permanente dos solos de
                referência do estado.
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
        <section className="relative bg-[#471A24] text-[#FFDCD2]">
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
                (MUSSPE) foi idealizado pelos pesquisadores Mateus Rosas Ribeiro
                e Paulo Klinger Tito Jacomine vinculados à Universidade Federal
                Rural de Pernambuco (UFRPE). Teve origem em 1994 com o projeto
                de pesquisa intitulado "Caracterização e classificação de solos
                de referência do estado de Pernambuco", com o apoio da FACEPE e
                do CNPq, visando uma exposição permanente dos solos de
                referência do estado.
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

      {/* nossos princípios */}
      {/* ======== SEÇÃO MOBILE ========= */}
      {isMobile && (
        <section className="relative bg-[#FFDCD2] text-[#471A24] min-h-[1880px] py-4">
          <img
            src={imgprincipiosesq}
            alt="Decoração esquerda"
            className="absolute bottom-0 w-14"
            draggable="false"
          />

          <img
            src={imgprincipiosdir}
            alt="Decoração direita"
            className="absolute top-0 right-0 w-14"
            draggable="false"
          />
          <div className="flex items-center justify-center mb-4">
            <img
              src={principiosicon}
              alt="Ícone princípios"
              className="w-7 h-6 mr-2 mt-9"
              draggable="false"
            />
            <h2 className="text-4xl sm:text-5xl font-barlow-extrabold text-[#471A24] my-2 mt-10">
              Nossos Princípios
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={principiosmissao}
              alt="Imagem princípios missão"
              className="max-w-xs h-[500px] rounded-lg mt-6"
              draggable="false"
            />

            <img
              src={principiosvisao}
              alt="Imagem visão"
              className="max-w-xs h-[500px] rounded-lg mt-20"
              draggable="false"
            />

            <img
              src={principiosvalores}
              alt="Imagem valores"
              className="max-w-xs h-[500px] rounded-lg mt-20"
              draggable="false"
            />
          </div>
        </section>
      )}
      {/* ======== SEÇÃO DESKTOP  ========= */}
      {!isMobile && (
        <section className="relative bg-[#FFDCD2] text-[#471A24] h-[580px] ">
          <img
            src={imgprincipiosesq}
            alt="Decoração esquerda"
            className="absolute bottom-0 w-16"
            draggable="false"
          />

          <img
            src={imgprincipiosdir}
            alt="Decoração direita"
            className="absolute top-0 right-0 w-16"
            draggable="false"
          />

          <div className="flex items-center justify-center">
            <img
              src={principiosicon}
              alt="Ícone princípios"
              className="w-5 h-5 mr-2 mt-11"
              draggable="false"
            />
            <h2 className="text-4xl font-barlow-extrabold text-[#471A24] mt-10">
              Nossos princípios
            </h2>
          </div>

          <div className=" max-w-2xl mx-auto flex xl:flex-row lg:flex-row md:flex-row  items-center justify-center xl:gap-32 lg:gap-16 md:gap-4">
            <img
              src={principiosmissao}
              alt="Imagem princípios missão"
              className="max-w-xs  rounded-lg mt-12 xl:h-[380px] lg:h-[400px] md:h-[350px]"
              draggable="false"
            />

            <img
              src={principiosvisao}
              alt="Imagem visão"
              className="max-w-xs rounded-lg mt-12 xl:h-[380px] lg:h-[400px] md:h-[350px]"
              draggable="false"
            />

            <img
              src={principiosvalores}
              alt="Imagem valores"
              className="max-w-xs  rounded-lg mt-12 xl:h-[380px] lg:h-[400px] md:h-[350px]"
              draggable="false"
            />
          </div>
        </section>
      )}

      {/* barra de visita */}
      <BarraVisita />
    </>
  );
}

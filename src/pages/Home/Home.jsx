import React from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/Botao";
import Carrossel from "../../components/Carrossel";
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
import nossahistoriaicon from "/imagens/nossa-historia-icon.png";
import carrossel1 from "/imagens/carrossel/Carrossel1.png";
import carrossel2 from "/imagens/carrossel/Carrossel2.png";
import carrossel3 from "/imagens/carrossel/Carrossel3.png";
import carrossel4 from "/imagens/carrossel/Carrossel4.png";
import carrossel5 from "/imagens/carrossel/Carrossel5.png";
import carrossel6 from "/imagens/carrossel/Carrossel6.png";
import carrossel7 from "/imagens/carrossel/Carrossel7.png";
import carrossel8 from "/imagens/carrossel/Carrossel8.png";
import carrossel9 from "/imagens/carrossel/Carrossel9.png";

export default function Home() {
  const carrosselImages = [
    carrossel1,
    carrossel2,
    carrossel3,
    carrossel4,
    carrossel5,
    carrossel6,
    carrossel7,
    carrossel8,
    carrossel9,
  ];

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
        <div className="flex w-[340px] sm:w-[645px] md:w-[750px] lg:w-[1000px] mx-auto relative">
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
          <div className="absolute right-[25px] lg:right-[50px] border-[0.5px] sm:border-2 border-brand-roxo rounded-lg text-center w-[83px] sm:w-[216px] md:w-[230px] lg:w-[247px] top-[56px] sm:top-[85px] lg:top-[80px] sm:p-0">
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
      <section className="relative bg-[#471A24] text-[#FFDCD2] h-[860px] md:h-auto py-4">
        <img
          src={imgesq}
          alt="Decoração esquerda"
          className="absolute bottom-0 w-14 md:w-16"
          draggable="false"
        />

        <img
          src={imgdir}
          alt="Decoração direita"
          className="absolute top-0 right-0 w-14 md:w-16"
          draggable="false"
        />

        <div className="flex items-center justify-center mb-4">
          <img
            src={sobrenosicon}
            alt="Ícone sobre nós"
            className="w-4 h-5 mr-2 mt-1 md:mt-5"
            draggable="false"
          />
          <h2 className="text-3xl font-barlow-extrabold text-[#FFDCD2] my-2 md:mt-4">
            Sobre nós
          </h2>
        </div>

        <div className="flex flex-col items-center md:max-w-2xl md:mx-auto md:flex-row md:items-center md:gap-40">
          <img
            src={sobrenos}
            alt="Imagem sobre nós"
            className="w-[300px] rounded-xl mb-6 md:max-w-xs md:h-[290px] md:rounded-lg md:mb-10 md:order-2"
            draggable="false"
          />
          <div className="md:mb-16 md:order-1">
            <p className="text-lg text-[#FFDCD2] font-barlow max-w-xs text-justify md:text-base md:mt-8 md:mr-4 md:mb-4 md:max-w-none">
              O Museu de Solos de Pernambuco Professor Mateus Rosas Ribeiro
              (MUSSPE) foi idealizado pelos pesquisadores Mateus Rosas Ribeiro e
              Paulo Klinger Tito Jacomine vinculados à Universidade Federal
              Rural de Pernambuco (UFRPE). Teve origem em 1994 com o projeto de
              pesquisa intitulado "Caracterização e classificação de solos de
              referência do estado de Pernambuco", com o apoio da FACEPE e do
              CNPq, visando uma exposição permanente dos solos de referência do
              estado.
            </p>
            <Link to="/musspe-react/acervo">
              <Botao marginY="my-3 md:my-0">Confira nosso acervo</Botao>
            </Link>
          </div>
        </div>
      </section>

      {/* Nossa história */}
      <section className="bg-[#471A24] h-[515px] sm:h-[565px]">
        <div className="flex flex-col items-center">
          <div className="text-[#FFDCD2] font-barlow-extrabold text-4xl flex items-center gap-3 py-6">
            <img
              src={nossahistoriaicon}
              alt="icone nossa historia"
              className="w-6 h-6 mt-1.5"
            />
            Nossa história
          </div>
          <Carrossel
            images={carrosselImages}
            width="w-[300px] sm:w-[350px]"
            height="h-[300px] sm:h-[350px]"
            interval={7000}
            dotCount={carrosselImages.length}
            showArrows={true}
          />
          <div>
            <Link to="/musspe-react/colaboradores">
              <Botao>Conheça nossos colaboradores</Botao>
            </Link>
          </div>
        </div>
      </section>

      {/* nossos princípios */}
      <section className="relative bg-[#FFDCD2] text-[#471A24] sm:h-[1880px] md:h-[610px] lg:h-[650px] py-4">
        <img
          src={imgprincipiosesq}
          alt="Decoração esquerda"
          className="absolute bottom-0 w-14 md:w-16"
          draggable="false"
        />

        <img
          src={imgprincipiosdir}
          alt="Decoração direita"
          className="absolute top-0 right-0 w-14 md:w-16"
          draggable="false"
        />

        <div className="flex items-center justify-center mb-4">
          <img
            src={principiosicon}
            alt="Ícone princípios"
            className="w-7 h-6 mr-2 mt-9 md:w-5 md:h-5 md:mt-11"
            draggable="false"
          />
          <h2 className="text-4xl sm:text-5xl font-barlow-extrabold text-[#471A24] my-2 mt-10 md:text-4xl md:mt-10">
            Nossos Princípios
          </h2>
        </div>

        <div className="flex flex-col items-center md:max-w-2xl md:mx-auto md:flex-row md:items-center md:justify-center md:gap-4 lg:gap-16 xl:gap-32">
          <img
            src={principiosmissao}
            alt="Imagem princípios missão"
            className="max-w-xs h-[400px] rounded-lg mt-6 md:mt-12 sm:h-[500px] md:h-[380px] lg:h-[450px] xl:h-[450px]"
            draggable="false"
          />

          <img
            src={principiosvisao}
            alt="Imagem visão"
            className="max-w-xs h-[400px] rounded-lg mt-20 md:mt-12 sm:h-[500px] md:h-[380px] lg:h-[450px] xl:h-[450px]"
            draggable="false"
          />

          <img
            src={principiosvalores}
            alt="Imagem valores"
            className="max-w-xs h-[400px] rounded-lg mt-20 md:mt-12 sm:h-[500px] md:h-[380px] lg:h-[450px] xl:h-[450px]"
            draggable="false"
          />
        </div>
      </section>

      {/* barra de visita */}
      <BarraVisita />
    </>
  );
}

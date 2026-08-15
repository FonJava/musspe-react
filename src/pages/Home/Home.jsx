import { Link } from "react-router-dom";
import Botao from "../../components/Botao";
import Carrossel from "../../components/Carrossel";
import imgesq from "/imagens/sobre-nos-esquerda.png";
import imgdir from "/imagens/sobre-nos-direita.png";
import sobrenos from "/imagens/sobre-nos-imagem.png";
import sobrenosicon from "/imagens/sobre-nos-icon.png";
import BarraVisita from "../../components/Barra-visita";
import Apresentacao from "../../components/Apresentacao";
import mateuszinho from "/imagens/mateuzinho.webp";
import principiosicon from "/imagens/principios-icon.png";
import principiosmissao from "/imagens/principios-missao.png";
import principiosvalores from "/imagens/principios-valores.png";
import principiosvisao from "/imagens/principios-visao.png";
import imgprincipiosesq from "/imagens/principios-esquerda.png";
import imgprincipiosdir from "/imagens/principios-direita.png";
import apreesq from "/imagens/apresentacao-esquerda.webp";
import notidialogo from "/imagens/dialogo.webp";
import detalhevazio from "/imagens/vazios.png";
import detalhe from "/imagens/preenchidos.webp";
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
import visitasicon from "/imagens/visitas-guiadas-icon.png";
import backgroundImg from "/imagens/linhas-fundo.png";
import guia1 from "/imagens/boyzin.png";
import guia2 from "/imagens/senhorinha.png";
import videoVisita from "/imagens/jingle.mp4";

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
        audio="audio-home.mp3"
        imagem={mateuszinho}
        larguraTexto={250}
        titulo="Conheça nossos solos, rochas e minerais!"
        descricao="O Museu de Solos de Pernambuco Professor Mateus Rosas Ribeiro tem temática única no estado!"
      >
        <Link to="/visita">
          <Botao
            tamanhoFonte="text-[18px] sm:text-[20px] py-[2.5px] md:text-[16px] lg:text-[20px]"
            paddingY="md:py-[1.5px] lg:py-[2.5px]"
            ariaLabel="Agendar visita ao MUSSPE"
            className="mb-16 md:mb-0"
          >
            Agende uma visita
          </Botao>
        </Link>
      </Apresentacao>
      {/* início-noticias*/}
      <section className="relative h-[200px] bg-[#FFDCD2] sm:h-[300px]">
        <img
          src={apreesq}
          alt="Decoração esquerda"
          className="absolute top-[-1px] w-[150px] [transform:rotateX(180deg)] md:w-[200px]"
          draggable="false"
        />
        <div className="relative mx-auto flex w-[340px] sm:w-[645px] md:w-[750px] lg:w-[1000px]">
          <img
            src={detalhevazio}
            className="absolute right-[25px] top-[182px] w-[152px] sm:top-[252px] sm:w-[400px] md:top-[250px] md:w-[425px] lg:bottom-[-56px] lg:right-[50px] lg:w-[455px]"
            draggable="false"
          />
          <img
            src={detalhe}
            className="absolute right-[25px] top-[24px] w-[152px] sm:top-0 sm:w-[400px] md:w-[425px] lg:right-[50px] lg:w-[455px]"
            draggable="false"
          />
          <img
            src={notidialogo}
            className="relative left-[0px] top-[85px] w-[215px] sm:top-[106px] sm:w-[360px] md:left-[7%] md:top-[75px] md:w-[420px] lg:top-[56px] lg:w-[455px]"
            draggable="false"
          />
          <div
            className="relative left-[-130px] top-[145px] w-[210px] text-center font-barlow-medium text-[10px] text-brand-laranja sm:left-[-250px] sm:top-[200px] sm:w-[270px] sm:text-[21px] md:left-[-230px] md:top-[184px] lg:left-[-250px] lg:top-[172px] lg:w-[300px]"
            style={{ fontWeight: 700, lineHeight: "1.3" }}
          >
            VAMOS ACOMPANHAR AS NOTÍCIAS?
            <br />
            <Link to="/noticias">
              <Botao
                marginY="my-1 sm:my-2"
                paddingY="py-1 sm:py-1.5"
                tamanhoFonte="text-[10px] sm:text-[18px] lg:text-[20px]"
                ariaLabel="Acessar a página de notícias do MUSSPE"
              >
                Confira agora
              </Botao>
            </Link>
          </div>
          <div className="absolute right-[25px] top-[56px] w-[83px] rounded-lg border-[0.5px] border-brand-roxo text-center sm:top-[85px] sm:w-[216px] sm:border-2 sm:p-0 md:w-[230px] lg:right-[50px] lg:top-[80px] lg:w-[247px]">
            <h3 className="mt-[5px] font-barlow-extrabold text-[18px] text-brand-laranja sm:mt-[20px] sm:text-[29px] lg:text-[32px]">
              Você!
            </h3>
            <p
              className="px-3 pb-[5px] text-start font-barlow text-[10px] text-brand-dark sm:pb-[10px] sm:text-[15px] lg:text-[18px]"
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
      <section className="relative h-[860px] bg-[#471A24] py-4 text-[#FFDCD2] md:h-auto">
        <img
          src={imgesq}
          alt="Decoração esquerda"
          className="absolute bottom-0 w-14 md:w-16"
          draggable="false"
        />

        <img
          src={imgdir}
          alt="Decoração direita"
          className="absolute right-0 top-0 w-14 md:w-16"
          draggable="false"
        />

        <div className="mb-4 flex items-center justify-center">
          <img
            src={sobrenosicon}
            alt="Ícone sobre nós"
            className="mr-2 mt-1 h-5 w-4 md:mt-5"
            draggable="false"
          />
          <h2 className="my-2 font-barlow-extrabold text-3xl text-[#FFDCD2] md:mt-4">
            Sobre nós
          </h2>
        </div>

        <div className="flex flex-col items-center md:mx-auto md:max-w-2xl md:flex-row md:items-center md:gap-40">
          <img
            src={sobrenos}
            alt="Imagem sobre nós"
            className="mb-6 w-[300px] rounded-xl md:order-2 md:mb-10 md:h-[290px] md:max-w-xs md:rounded-lg"
            draggable="false"
          />
          <div className="md:order-1 md:mb-16">
            <p className="max-w-[300px] text-justify font-barlow text-lg text-[#FFDCD2] md:mb-4 md:mr-4 md:mt-8 md:max-w-none md:text-base">
              O Museu de Solos de Pernambuco Professor Mateus Rosas Ribeiro
              (MUSSPE) foi idealizado pelos pesquisadores Mateus Rosas Ribeiro e
              Paulo Klinger Tito Jacomine vinculados à Universidade Federal
              Rural de Pernambuco (UFRPE). Teve origem em 1994 com o projeto de
              pesquisa intitulado "Caracterização e classificação de solos de
              referência do estado de Pernambuco", com o apoio da FACEPE e do
              CNPq, visando uma exposição permanente dos solos de referência do
              estado.
            </p>
            <Link to="/acervo">
              <Botao
                marginY="my-3 md:my-0"
                ariaLabel="Ir para a página do acervo do MUSSPE"
              >
                Confira nosso acervo
              </Botao>
            </Link>
          </div>
        </div>
      </section>

      {/* Visitas guiadas */}
      <section className="relative overflow-hidden bg-[#FFDCD2] text-[#471A24] sm:h-[840px] md:h-[565px]">
        <div className="absolute mt-64 flex sm:mt-48 md:mt-48 lg:mt-48 xl:mt-48">
          <img
            src={backgroundImg}
            alt="Fundo visitas guiadas"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="relative">
          <div className="mt-6 flex items-center justify-center font-barlow-extrabold text-4xl text-[#471A24]">
            <img
              src={visitasicon}
              alt="icone nossa historia"
              className="mr-2 mt-1 h-5 w-4"
            />
            Visitas guiadas
          </div>

          <div className="w-full px-4 pb-4 text-center">
            <p className="mx-auto mt-4 w-full max-w-2xl text-center font-barlow text-xl text-[#471A24] sm:text-xl md:text-xl lg:text-xl">
              Venha conhecer o MUSSPE! Chame sua família e amigos
              <br />
              para conhecer o nosso acervo acompanhado por um de nossos guias!
            </p>
          </div>

          <div>
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 md:flex-row md:px-6">
              <div className="order-1 hidden flex-shrink-0 sm:hidden md:mr-6 md:mt-20 md:block lg:mr-8 lg:mt-20 lg:block">
                <img
                  src={guia1}
                  alt="Guia médica"
                  className="md:h-[280px] md:w-[280px] lg:h-[280px] lg:w-[280px] xl:h-[280px] xl:w-[280px]"
                />
              </div>

              <div className="order-2 flex flex-shrink-0 flex-col items-center">
                <div className="mb-6 flex-shrink-0 overflow-hidden rounded-3xl">
                  <video
                    src={videoVisita}
                    alt="Vídeo visitas guiadas"
                    aria-label="Vídeo visitas guiadas"
                    controls
                    preload="none"
                    className="block h-[530px] w-[340px] flex-shrink-0 sm:h-[600px] sm:w-[340px] md:h-[340px] md:w-[190px] lg:h-[340px] lg:w-[190px] xl:h-[340px] xl:w-[190px]"
                    poster=""
                    ref={(el) => {
                      if (el) el.volume = 0.2;
                    }}
                  ></video>
                </div>

                <div className="mb-8 flex-shrink-0 md:mb-20">
                  <Link to="/visita">
                    <Botao ariaLabel="Agendar visita guiada ao MUSSPE">
                      Agende uma visita
                    </Botao>
                  </Link>
                </div>
              </div>

              <div className="order-3 hidden flex-shrink-0 sm:hidden md:ml-6 md:mt-20 md:block lg:ml-8 lg:mt-20 lg:block xl:block">
                <img
                  src={guia2}
                  alt="Guia senhor"
                  className="md:h-[280px] md:w-[280px] lg:h-[280px] lg:w-[280px] xl:h-[280px] xl:w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa história */}
      <section className="h-[515px] bg-[#471A24] sm:h-[565px]">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 py-6 font-barlow-extrabold text-4xl text-[#FFDCD2]">
            <img
              src={nossahistoriaicon}
              alt="icone nossa historia"
              className="mt-1.5 h-6 w-6"
            />
            Nossa história
          </div>
          <Carrossel
            images={carrosselImages}
            width="w-[300px] sm:w-[350px]"
            height="h-[300px] sm:h-[350px]"
            showArrows={true}
          />
          <div>
            <Link to="/colaboradores">
              <Botao ariaLabel="Conhecer a página de colaboradores do MUSSPE">
                Conheça nossos colaboradores
              </Botao>
            </Link>
          </div>
        </div>
      </section>

      {/* nossos princípios */}
      <section className="relative bg-[#FFDCD2] py-4 text-[#471A24] sm:h-[1880px] md:h-[610px] lg:h-[650px]">
        <img
          src={imgprincipiosesq}
          alt="Decoração esquerda"
          className="absolute bottom-0 w-14 md:w-16"
          draggable="false"
        />

        <img
          src={imgprincipiosdir}
          alt="Decoração direita"
          className="absolute right-0 top-0 w-14 md:w-16"
          draggable="false"
        />

        <div className="mb-4 flex items-center justify-center">
          <img
            src={principiosicon}
            alt="Ícone princípios"
            className="mr-2 mt-9 h-6 w-7 md:mt-11 md:h-5 md:w-5"
            draggable="false"
          />
          <h2 className="my-2 mt-10 font-barlow-extrabold text-4xl text-[#471A24] sm:text-5xl md:mt-10 md:text-4xl">
            Nossos Princípios
          </h2>
        </div>

        <div className="flex flex-col items-center md:mx-auto md:max-w-2xl md:flex-row md:items-center md:justify-center md:gap-4 lg:gap-16 xl:gap-32">
          <img
            src={principiosmissao}
            alt="Imagem princípios missão"
            className="mt-6 h-[400px] max-w-xs rounded-lg sm:h-[500px] md:mt-12 md:h-[380px] lg:h-[450px] xl:h-[450px]"
            draggable="false"
          />

          <img
            src={principiosvisao}
            alt="Imagem visão"
            className="mt-20 h-[400px] max-w-xs rounded-lg sm:h-[500px] md:mt-12 md:h-[380px] lg:h-[450px] xl:h-[450px]"
            draggable="false"
          />

          <img
            src={principiosvalores}
            alt="Imagem valores"
            className="mt-20 h-[400px] max-w-xs rounded-lg sm:h-[500px] md:mt-12 md:h-[380px] lg:h-[450px] xl:h-[450px]"
            draggable="false"
          />
        </div>
      </section>

      {/* barra de visita */}
      <BarraVisita />
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import Apresentacao from "../../components/Apresentacao";
import colabIcon from "/imagens/nossa-colecao-icon.png";
import realizacao from "/imagens/realizacao.png";
import incentivo from "/imagens/incentivo.png";
import BarraVisita from "../../components/Barra-visita";
import ana from "/imagens/voluntarios/ana.png";
import caroline from "/imagens/voluntarios/caroline.png";
import santos from "/imagens/voluntarios/santos.png";
import clarissa from "/imagens/colaboradores/clarissa.png";
import clistenes from "/imagens/voluntarios/clistenes.png";
import cybelle from "/imagens/voluntarios/cybelle.png";
import fernando from "/imagens/voluntarios/fernando.png";
import flavio from "/imagens/voluntarios/flavio.png";
import gabriel from "/imagens/voluntarios/gabriel.png";
import glevia from "/imagens/voluntarios/glevia.png";
import jean from "/imagens/voluntarios/jean.png";
import jessica from "/imagens/voluntarios/jessica.png";
import julia from "/imagens/voluntarios/julia.png";
import luis from "/imagens/voluntarios/luis.png";
import luiz from "/imagens/voluntarios/luiz.png";
import paula from "/imagens/voluntarios/paula.png";
import sheila from "/imagens/voluntarios/sheila.png";
import william from "/imagens/voluntarios/william.png";
import ygor from "/imagens/voluntarios/ygor.png";
import anthony from "/imagens/colaboradores/anthony.png";
import gabi from "/imagens/colaboradores/gabi.png";
import geovana from "/imagens/colaboradores/geovana.png";
import gil from "/imagens/colaboradores/gil.png";
import marcelo from "/imagens/colaboradores/marcelo.png";
import prof from "/imagens/colaboradores/prof.png";
import tiago from "/imagens/voluntarios/tiago.png";
import messias from "/imagens/colaboradores/messias.png";
import wes from "/imagens/colaboradores/wes.png";
import marina from "/imagens/colaboradores/marina.png";
import clayton from "/imagens/colaboradores/clayton.png";

import Botao from "../../components/Botao";
import iconeCoord from "/imagens/filtro-coordenacao-icon.png";
import iconeEdu from "/imagens/filtro-educacao-icon.png";
import iconeCom from "/imagens/filtro-comunicacao-icon.png";
import colaboradoresImg from "/imagens/colaboradores-imagem.webp";
import { FaArrowDown } from "react-icons/fa";

const voluntarios = [
  {
    id: 1,
    imagem: ana,
    lattes: "http://lattes.cnpq.br/6734173724110965",
  },
  {
    id: 2,
    imagem: caroline,
    lattes: "http://lattes.cnpq.br/8326756664758702",
  },
  {
    id: 3,
    imagem: santos,
    lattes: "http://lattes.cnpq.br/5129566443607422",
  },
  {
    id: 4,
    imagem: clistenes,
    lattes: "http://lattes.cnpq.br/2562022438053334",
  },
  {
    id: 5,
    imagem: cybelle,
    lattes: "http://lattes.cnpq.br/2845272964420272",
  },
  {
    id: 6,
    imagem: fernando,
    lattes: "http://lattes.cnpq.br/4818569008052606",
  },
  {
    id: 7,
    imagem: flavio,
    lattes: "http://lattes.cnpq.br/7835564748504772",
  },
  {
    id: 8,
    imagem: gabriel,
    lattes: "http://lattes.cnpq.br/0023008602888331",
  },
  {
    id: 9,
    imagem: glevia,
    lattes: "http://lattes.cnpq.br/1630682584288719",
  },
  {
    id: 10,
    imagem: jean,
    lattes: "http://lattes.cnpq.br/5698373233632800",
  },
  {
    id: 11,
    imagem: jessica,
    lattes: "http://lattes.cnpq.br/1141310989027732",
  },
  {
    id: 12,
    imagem: julia,
    lattes: "http://lattes.cnpq.br/0784718955904957",
  },
  {
    id: 13,
    imagem: luis,
    lattes: "http://lattes.cnpq.br/3309448267226921",
  },
  {
    id: 14,
    imagem: luiz,
    lattes: "http://lattes.cnpq.br/2614964367896670",
  },
  {
    id: 15,
    imagem: paula,
    lattes: "http://lattes.cnpq.br/1779598476646308",
  },
  {
    id: 16,
    imagem: sheila,
    lattes: "http://lattes.cnpq.br/4097700872675583",
  },
  {
    id: 17,
    imagem: tiago,
    lattes: "http://lattes.cnpq.br/3104295042201171",
  },
  {
    id: 18,
    imagem: william,
    lattes: "http://lattes.cnpq.br/5033735462082389",
  },
  {
    id: 19,
    imagem: ygor,
    lattes: "http://lattes.cnpq.br/0904824873761236",
  },
];

const colaboradores = [
  {
    id: 1,
    imagem: anthony,
    lattes: "http://lattes.cnpq.br/6495787794910741",
    categoria: "comunicacao",
  },
  {
    id: 2,
    imagem: clarissa,
    lattes: "https://lattes.cnpq.br/2620267739353261",
    categoria: "coordenacao",
  },
  {
    id: 3,
    imagem: gabi,
    lattes: "https://lattes.cnpq.br/2076332146794589",
    categoria: "comunicacao",
  },
  {
    id: 4,
    imagem: geovana,
    lattes: "https://lattes.cnpq.br/4227537453498441",
    categoria: "comunicacao",
  },
  {
    id: 5,
    imagem: gil,
    lattes: "http://lattes.cnpq.br/4348590137271886",
    categoria: "educacao",
  },
  {
    id: 6,
    imagem: clayton,
    lattes: "https://lattes.cnpq.br/4663761129370979",
    categoria: "educacao",
  },
  {
    id: 7,
    imagem: marcelo,
    lattes: "http://lattes.cnpq.br/1718364944595251",
    categoria: "educacao",
  },
  {
    id: 8,
    imagem: marina,
    lattes: "https://lattes.cnpq.br/3387445713971761",
    categoria: "educacao",
  },
  {
    id: 9,
    imagem: prof,
    lattes: "http://lattes.cnpq.br/7832462604842279",
    categoria: "coordenacao",
  },
  {
    id: 10,
    imagem: messias,
    lattes: "https://lattes.cnpq.br/9075688414280187",
    categoria: "educacao",
  },
  {
    id: 11,
    imagem: wes,
    lattes: "https://lattes.cnpq.br/7266914270335560",
    categoria: "educacao",
  },
];

function BolsistasTab() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const filtrarColaboradores = () => {
    if (filtroAtivo === "todos") {
      return colaboradores;
    }
    return colaboradores.filter(
      (colaborador) => colaborador.categoria === filtroAtivo,
    );
  };

  const filtros = [
    { id: "todos", nome: "Todos" },
    { id: "coordenacao", nome: "Coordenação", icone: iconeCoord },
    { id: "educacao", nome: "Educativo", icone: iconeEdu },
    { id: "comunicacao", nome: "Comunicação", icone: iconeCom },
  ];

  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-wrap justify-end gap-1 sm:gap-2">
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setFiltroAtivo(filtro.id)}
              className={`rounded-[25px] border-2 border-brand-laranja px-2 py-1 font-barlow text-xs text-white transition-colors duration-300 sm:border-4 sm:text-sm ${
                filtroAtivo === filtro.id
                  ? "bg-brand-laranja"
                  : "bg-transparent"
              }`}
            >
              {filtro.icone && (
                <img
                  src={filtro.icone}
                  alt=""
                  aria-hidden="true"
                  className="mr-1 inline-block w-[15px] sm:mr-2 sm:w-[20px]"
                />
              )}
              {filtro.nome}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        {filtrarColaboradores().map((colaborador) => (
          <div
            key={colaborador.id}
            className="relative flex flex-col items-center"
          >
            <img
              src={colaborador.imagem}
              alt={`Colaborador ${colaborador.id}`}
              className="h-auto w-full rounded-lg"
            />
            <Link
              to={colaborador.lattes}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute bottom-[6px] right-[7px] sm:bottom-[12px] sm:right-[10px] md:bottom-[15px] md:right-[12px]">
                <Botao
                  tamanhoFonte="text-xs sm:text-base md:text-lg"
                  paddingX="px-2 sm:px-4"
                  ariaLabel="Abrir currículo Lattes do colaborador"
                >
                  Currículo
                </Botao>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function VoluntariosTab() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        {voluntarios.map((voluntario) => (
          <div
            key={voluntario.id}
            className="relative flex flex-col items-center"
          >
            <img
              src={voluntario.imagem}
              alt={`Voluntário ${voluntario.id}`}
              className="h-auto w-full rounded-lg"
            />
            <Link
              to={voluntario.lattes}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute bottom-[7px] right-[7px] sm:bottom-[12px] sm:right-[10px] md:bottom-[15px] md:right-[12px]">
                <Botao
                  tamanhoFonte="text-xs sm:text-base md:text-lg"
                  paddingX="px-2 sm:px-4"
                  ariaLabel="Abrir currículo Lattes do voluntário"
                >
                  Currículo
                </Botao>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApoiadoresTab() {
  return (
    <div className="px-3 py-5">
      <img
        className="mb-4"
        src={realizacao}
        alt="Realização"
        draggable="false"
      />
      <img src={incentivo} alt="Incentivo" draggable="false" />
    </div>
  );
}

export default function Colaboradores() {
  const scrollToColaboradores = () => {
    const colaboradoresSection = document.getElementById(
      "colaboradores-section",
    );
    if (colaboradoresSection) {
      colaboradoresSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Equipe" },
    { name: "Voluntários(as)" },
    { name: "Apoiadores(as)" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <BolsistasTab />;
      case 1:
        return <VoluntariosTab />;
      case 2:
        return <ApoiadoresTab />;
      default:
        return <BolsistasTab />;
    }
  };

  return (
    <>
      <Apresentacao
        tamanhoImagem={350}
        imagem={colaboradoresImg}
        titulo={"Colaboradores(as)"}
        descricao={
          "Atualmente, a equipe do MUSSPE é composta por 30 membros, sendo 2 coordenadores, 9 bolsistas e 19 colaboradores (as)."
        }
        audioguiaTexto={
          "Venha conhecer a equipe de colaboradores! Atualmente, a equipe do MUSSPE é composta por 31 membros, sendo 2 coordenadores, 9 estagiários, 19 colaboradores, e claro, nosso time de apoiadores: UFRPE, EMBRAPA Solos, CNPq, FACEPE, Ministério da Ciência, Tecnologia, Inovações e Comunicações e FNDCT. Na Coordenação temos: Clarissa Buarque e Professor Mateus Rosas Ribeiro Filho. No Educativo temos: Givanildo Ferreira, José Clayton Lopes, Marcelo Carvalho, Marina Soares, Messias Barbosa e Wesllaine Andrade. Na Comunicação temos: Anthony Guerra, Gabriel Leão e Geovana Gabrielli."
        }
      >
        <Botao
          tamanhoFonte="text-[18px] sm:text-[20px] py-[2.5px] md:text-[16px] lg:text-[20px]"
          paddingY="md:py-[1.5px] lg:py-[2.5px]"
          onClick={scrollToColaboradores}
          ariaLabel="Ir para a seção da equipe de colaboradores"
          className="mb-16 md:mb-0"
        >
          <FaArrowDown className="mr-2 inline" />
          Conheça nossa equipe
        </Botao>
      </Apresentacao>
      <section
        id="colaboradores-section"
        className="flex flex-col items-center bg-brand-dark py-12"
      >
        <div className="mb-14 flex items-center">
          <img
            src={colabIcon}
            className="mr-2 w-6"
            draggable="false"
            alt="Icone de colaboradores"
          />
          <h2 className="font-barlow-extrabold text-3xl text-brand-bege">
            Nossos colaboradores
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="ml-5">
            {tabs.map((tab, index) => (
              <span
                key={index}
                onClick={() => setActiveTab(index)}
                className={`ml-1 cursor-pointer rounded-[15px] p-2 pb-7 font-barlow-semibold text-sm text-white transition-colors duration-300 sm:p-4 sm:pb-7 sm:text-xl ${
                  activeTab === index
                    ? "border-[3px] border-b-0 border-transparent bg-brand-roxo"
                    : "border-[3px] border-b-0 border-brand-laranja"
                }`}
              >
                {tab.name}
              </span>
            ))}
          </div>
          <div className="mt-2 w-[310px] rounded-[25px] bg-brand-roxo p-4 sm:w-[600px] md:w-[750px]">
            {renderTabContent()}
          </div>
        </div>
      </section>
      <BarraVisita />
    </>
  );
}

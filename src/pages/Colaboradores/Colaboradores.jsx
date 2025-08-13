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
import clarissa from "/imagens/voluntarios/clarissa.png";
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
import adriana from "/imagens/colaboradores/adriana.png";
import anthony from "/imagens/colaboradores/anthony.png";
import antonio from "/imagens/colaboradores/antonio.png";
import gabi from "/imagens/colaboradores/gabi.png";
import geovana from "/imagens/colaboradores/geovana.png";
import gil from "/imagens/colaboradores/gil.png";
import isadora from "/imagens/colaboradores/isadora.png";
import lizandra from "/imagens/colaboradores/lizandra.png";
import eloyse from "/imagens/colaboradores/eloyse.png";
import marcelo from "/imagens/colaboradores/marcelo.png";
import prof from "/imagens/colaboradores/prof.png";
import tiago from "/imagens/colaboradores/tiago.png";
import Botao from "../../components/Botao";
import iconeCoord from "/imagens/filtro-coordenacao-icon.png";
import iconeEdu from "/imagens/filtro-educacao-icon.png";
import iconeCom from "/imagens/filtro-comunicacao-icon.png";

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
    imagem: clarissa,
    lattes: "https://lattes.cnpq.br/2620267739353261",
  },
  {
    id: 5,
    imagem: clistenes,
    lattes: "http://lattes.cnpq.br/2562022438053334",
  },
  {
    id: 6,
    imagem: cybelle,
    lattes: "http://lattes.cnpq.br/2845272964420272",
  },
  {
    id: 7,
    imagem: fernando,
    lattes: "http://lattes.cnpq.br/4818569008052606",
  },
  {
    id: 8,
    imagem: flavio,
    lattes: "http://lattes.cnpq.br/7835564748504772",
  },
  {
    id: 9,
    imagem: gabriel,
    lattes: "http://lattes.cnpq.br/0023008602888331",
  },
  {
    id: 10,
    imagem: glevia,
    lattes: "http://lattes.cnpq.br/1630682584288719",
  },
  {
    id: 11,
    imagem: jean,
    lattes: "http://lattes.cnpq.br/5698373233632800",
  },
  {
    id: 12,
    imagem: jessica,
    lattes: "http://lattes.cnpq.br/1141310989027732",
  },
  {
    id: 13,
    imagem: julia,
    lattes: "http://lattes.cnpq.br/0784718955904957",
  },
  {
    id: 14,
    imagem: luis,
    lattes: "http://lattes.cnpq.br/3309448267226921",
  },
  {
    id: 15,
    imagem: luiz,
    lattes: "http://lattes.cnpq.br/2614964367896670",
  },
  {
    id: 16,
    imagem: paula,
    lattes: "http://lattes.cnpq.br/1779598476646308",
  },
  {
    id: 17,
    imagem: sheila,
    lattes: "http://lattes.cnpq.br/4097700872675583",
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
    imagem: adriana,
    lattes: "https://lattes.cnpq.br/9141816854544077",
    categoria: "educacao",
  },
  {
    id: 2,
    imagem: anthony,
    lattes: "http://lattes.cnpq.br/6495787794910741",
    categoria: "comunicacao",
  },
  {
    id: 3,
    imagem: antonio,
    lattes: "http://lattes.cnpq.br/1492501799980114",
    categoria: "educacao",
  },
  {
    id: 4,
    imagem: gabi,
    lattes: "https://lattes.cnpq.br/2076332146794589",
    categoria: "educacao",
  },
  {
    id: 5,
    imagem: geovana,
    lattes: "https://lattes.cnpq.br/4227537453498441",
    categoria: "comunicacao",
  },
  {
    id: 6,
    imagem: gil,
    lattes: "http://lattes.cnpq.br/4348590137271886",
    categoria: "educacao",
  },
  {
    id: 7,
    imagem: isadora,
    lattes: "https://lattes.cnpq.br/5301475110301032",
    categoria: "educacao",
  },
  {
    id: 8,
    imagem: lizandra,
    lattes: "http://lattes.cnpq.br/8260475667541184",
    categoria: "educacao",
  },
  {
    id: 9,
    imagem: eloyse,
    lattes: "http://lattes.cnpq.br/9000206461335481",
    categoria: "comunicacao",
  },
  {
    id: 10,
    imagem: marcelo,
    lattes: "http://lattes.cnpq.br/1718364944595251",
    categoria: "educacao",
  },
  {
    id: 11,
    imagem: prof,
    lattes: "http://lattes.cnpq.br/7832462604842279",
    categoria: "coordenacao",
  },
  {
    id: 12,
    imagem: tiago,
    lattes: "http://lattes.cnpq.br/3104295042201171",
    categoria: "comunicacao",
  },
];

function BolsistasTab() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const filtrarColaboradores = () => {
    if (filtroAtivo === "todos") {
      return colaboradores;
    }
    return colaboradores.filter(
      (colaborador) => colaborador.categoria === filtroAtivo
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
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-end">
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setFiltroAtivo(filtro.id)}
              className={`px-2 py-1 rounded-[25px] font-barlow text-xs sm:text-sm transition-colors duration-300 border-2 sm:border-4 border-brand-laranja text-white ${
                filtroAtivo === filtro.id
                  ? "bg-brand-laranja"
                  : "bg-transparent"
              }`}
            >
              {filtro.icone && (
                <img
                  src={filtro.icone}
                  alt={`${filtro.nome} icon`}
                  className="w-[15px] sm:w-[20px] inline-block mr-1 sm:mr-2"
                />
              )}
              {filtro.nome}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {filtrarColaboradores().map((colaborador) => (
          <div
            key={colaborador.id}
            className="flex flex-col items-center relative"
          >
            <img
              src={colaborador.imagem}
              alt={`Colaborador ${colaborador.id}`}
              className="w-full h-auto rounded-lg"
            />
            <Link
              to={colaborador.lattes}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute bottom-[6px] right-[7px] sm:bottom-[12px] md:bottom-[15px] sm:right-[10px] md:right-[12px]">
                <Botao
                  tamanhoFonte="text-xs sm:text-base md:text-lg"
                  paddingX="px-2 sm:px-4"
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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {voluntarios.map((voluntario) => (
          <div
            key={voluntario.id}
            className="flex flex-col items-center relative"
          >
            <img
              src={voluntario.imagem}
              alt={`Voluntário ${voluntario.id}`}
              className="w-full h-auto rounded-lg"
            />
            <Link
              to={voluntario.lattes}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute bottom-[7px] right-[7px] sm:bottom-[12px] md:bottom-[15px] sm:right-[10px] md:right-[12px]">
                <Botao
                  tamanhoFonte="text-xs sm:text-base md:text-lg"
                  paddingX="px-2 sm:px-4"
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
    <div className="py-5 px-3">
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
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Bolsistas" },
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
      <Apresentacao></Apresentacao>
      <section className="bg-brand-dark flex flex-col items-center py-12">
        <div className="flex items-center mb-14">
          <img src={colabIcon} className="w-6 mr-2" draggable="false" />
          <h2 className="text-brand-bege font-barlow-extrabold text-3xl">
            Nossos colaboradores
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="ml-5">
            {tabs.map((tab, index) => (
              <span
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-white font-barlow-semibold text-sm sm:text-xl rounded-[15px] pb-7 p-2 sm:p-4 sm:pb-7 cursor-pointer transition-colors duration-300 ml-1 ${
                  activeTab === index
                    ? "bg-brand-roxo border border-transparent border-[3px] border-b-0"
                    : "border border-brand-laranja border-[3px] border-b-0"
                }`}
              >
                {tab.name}
              </span>
            ))}
          </div>
          <div className="bg-brand-roxo mt-2 w-[310px] sm:w-[600px] md:w-[750px] rounded-[25px] p-4">
            {renderTabContent()}
          </div>
        </div>
      </section>
      <BarraVisita />
    </>
  );
}

import React, { useState } from "react";
import Apresentacao from "../../components/Apresentacao";
import Botao from "../../components/Botao";
import Modal from "../../components/Modal";
import { FaArrowDown } from "react-icons/fa";
import acervoImg from "/imagens/acervo-inicio-imagens.png";
import BarraVisita from "../../components/Barra-visita";
import imgesq from "/imagens/sobre-nos-esquerda.png";
import imgdir from "/imagens/sobre-nos-direita.png";
import imgColec from "/imagens/nossa-colecao-icon.png";
import estrelaEsq from "/imagens/estrela-esquerda.png";
import estrelaDir from "/imagens/estrela-direita.png";
import caixaSolos from "/imagens/caixa-solos.png";
import caixaRochas from "/imagens/caixa-rochas.png";
import caixaMinerais from "/imagens/caixa-minerais.png";
import MapaInterativo from "../../components/MapaInterativo";

export default function Acervo() {
  const [isSolosModalOpen, setIsSolosModalOpen] = useState(false);
  const [isRochasModalOpen, setIsRochasModalOpen] = useState(false);
  const [isMineraisModalOpen, setIsMineraisModalOpen] = useState(false);

  const scrollToColecao = () => {
    const colecaoSection = document.getElementById("colecao-section");
    if (colecaoSection) {
      colecaoSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <Apresentacao
        imagem={acervoImg}
        titulo={"Acervo"}
        descricao={
          "Atualmente, nosso acervo é composto por 35 monolitos (12 perfis da Zona da Mata, 11 perfis do Agreste e 12 perfis de solos do Sertão), e cerca de 200 exemplares de rochas e minerais."
        }
        tamanhoImagem={350}
        larguraTexto={310}
        ajusteBottom="mb-[20px] md:mb-[0px]"
      >
        <Botao onClick={scrollToColecao}>
          <FaArrowDown className="inline mr-2" />
          Conheça nosso acervo!
        </Botao>
      </Apresentacao>
      <section
        id="colecao-section"
        className="bg-brand-dark min-h-[400px] relative"
      >
        <img
          src={imgesq}
          alt="Imagem Esquerda"
          className="absolute bottom-0 w-14 md:w-16"
          draggable="false"
        />
        <img
          src={estrelaEsq}
          alt="Estrela Esquerda"
          className="absolute left-[8%] bottom-[300px] w-14 md:w-16 hidden lg:block"
          draggable="false"
        />
        <div className="flex flex-col items-center justify-center py-10">
          <div className="flex items-center">
            <img
              src={imgColec}
              alt="Ícone da Nossa Coleção"
              draggable="false"
              className="w-[25px] mr-2"
            />
            <h2 className="text-brand-bege font-barlow-extrabold text-3xl">
              Nossa coleção
            </h2>
          </div>
          <p className="text-brand-bege font-barlow mt-6 w-[300px] sm:w-[400px] md:w-[515px] text-[17px]">
            Explore nossa coleção abrangente, que inclui uma variedade de solos,
            rochas, minerais e fósseis. Confira o nosso acervo abaixo!
          </p>
          <div className="bg-brand-roxo flex flex-col md:flex-row items-center gap-8 p-5 mt-6 rounded-[10px] min-w-[300px] sm:min-w-[380px] md:min-w-[300px] mb-6">
            <div className="relative">
              <img
                src={caixaSolos}
                alt="Caixa de Solos"
                className="w-[280px] md:w-[200px]"
              />
              <span className="absolute bottom-[17px] right-[25px] md:bottom-[8px] md:right-[10px]">
                <Botao
                  tamanhoFonte="text-lg md:text-base"
                  onClick={() => setIsSolosModalOpen(true)}
                >
                  Ver lista
                </Botao>
              </span>
            </div>
            <div className="relative">
              <img
                src={caixaRochas}
                alt="Caixa de Rochas"
                className="w-[280px] md:w-[200px]"
              />
              <span className="absolute bottom-[17px] right-[25px] md:bottom-[8px] md:right-[10px]">
                <Botao
                  tamanhoFonte="text-lg md:text-base"
                  onClick={() => setIsRochasModalOpen(true)}
                >
                  Ver lista
                </Botao>
              </span>
            </div>
            <div className="relative">
              <img
                src={caixaMinerais}
                alt="Caixa de Minerais"
                className="w-[280px] md:w-[200px]"
              />
              <span className="absolute bottom-[17px] right-[25px] md:bottom-[8px] md:right-[10px]">
                <Botao
                  tamanhoFonte="text-lg md:text-base"
                  onClick={() => setIsMineraisModalOpen(true)}
                >
                  Ver lista
                </Botao>
              </span>
            </div>
          </div>
        </div>
        <img
          src={estrelaDir}
          alt="Estrela Direita"
          className="absolute right-[8%] bottom-[150px] w-14 md:w-16 hidden lg:block"
          draggable="false"
        />
        <img
          src={imgdir}
          alt="Imagem Direita"
          className="absolute top-0 right-0 w-14 md:w-16"
          draggable="false"
        />
      </section>
      <section className="bg-brand-bege min-h-[600px] flex items-center flex-col pt-4">
        <h2 className="text-2xl sm:text-3xl font-barlow-extrabold text-brand-dark mt-4 mb-8 md:mb-6">
          Mapa Interativo - Perfis de Solo
        </h2>
        <div className="w-full px-4 md:pt-2 pb-6 md:pb-8">
          <MapaInterativo />
        </div>
      </section>
      <BarraVisita />

      {/* Modais */}
      <Modal
        isOpen={isSolosModalOpen}
        onClose={() => setIsSolosModalOpen(false)}
        title="Acervo de solos (monolitos)"
      >
        <div className="mx-5">
          <div className="flex flex-col items-center md:grid md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Zona da Mata
              </h3>
              <p className="text-gray-600 font-barlow">
                1. ARGISSOLO VERMELHO-AMARELO (Distrófico típico)
                <br />
                2. ARGISSOLO AMARELO (Distrocoeso típico)
                <br />
                3. ESPODOSSOLO HUMILÚVICO (Órtico espessarênico)
                <br />
                4. ARGISSOLO VERMELHO-AMARELO (Distrófico típico)
                <br />
                5. CHERNOSSOLO ARGILÚVICO (Órtico típico)
                <br />
                6. LATOSSOLO AMARELO (Distrocoeso típico)
                <br />
                7. NITOSSOLO VERMELHO (Distróférrico típico)
                <br />
                8. ARGISSOLO VERMELHO (Eutrófico Nitossólico)
                <br />
                9. PLINTOSSOLO ARGILÚVICO (Distrófico Abrúptico)
                <br />
                10. ARGISSOLO AMARELO (Distrófico típico)
                <br />
                11. ORGANOSSOLO HÁPLICO (Hêmico típico)
                <br />
                12. GLEISSOLO HÁPLICO Ta (Eutrófico Típico)
                <br />
              </p>
              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Agreste
              </h3>
              <p className="text-gray-600 font-barlow">
                1. NEOSSOLO REGOLÍTICO (Distrófico típico)
                <br />
                2. PLANOSSOLO HÁPLICO (Eutrófico solódico)
                <br />
                3. PLANOSSOLO HÁPLICO (Eutrófico solódico)
                <br />
                4. ARGISSOLO VERMELHO (Eutrófico típico)
                <br />
                5. NEOSSOLO REGOLÍTICO (Distrófico léptico)
                <br />
              </p>
            </div>

            <div className="space-y-2 sm:ml-6">
              <p className="text-gray-600 font-barlow">
                6.ARGISSOLO AMARELO (Distrófico abrúptico)
                <br />
                7. PLANOSSOLO NÁTRICO (Sálico típico)
                <br />
                8. LATOSSOLO VERMELHO-AMARELO (Distrófico húmico)
                <br />
                9. ARGISSOLO VERMELHO-AMARELO (Eutrófico abrúptico)
                <br />
                10. ARGISSOLO AMARELO (Distrófico típico)
                <br />
                11. NEOSSOLO LITÓLICO (Eutrófico típico)
                <br />
              </p>

              <h3 className="font-barlow-bold text-xl text-black mt-4 mb-2">
                Sertão
              </h3>
              <p className="text-gray-600 font-barlow">
                1. ARGISSOLO AMARELO (Eutrófico abrúptico plintossólico)
                <br />
                2. PLANOSSOLO NÁTRICO (Sálico típico)
                <br />
                3. NEOSSOLO QUARTZARENICO (Órtico típico)
                <br />
                4. NEOSSOLO FLÚVICO (Sódico sálico)
                <br />
                5. NEOSSOLO FLÚVICO (Sódico salino)
                <br />
                6. NEOSSOLO QUARTZARENICO (Órtico típico)
                <br />
                7. LUVISSOLO CRÔMICO (Órtico solódico)
                <br />
                8. LATOSSOLO AMARELO (Distrófico argissólico)
                <br />
                9. CAMBISSOLO HÁPLICO Tb (Eutrófico latossólico)
                <br />
                10. VERTISSOLO HÁPLICO (Órtico solódico)
                <br />
                11. ARGISSOLO AMARELO (Eutrófico solódico)
                <br />
                12. NEOSSOLO LITÓLICO (Eutrófico típico)
                <br />
              </p>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isRochasModalOpen}
        onClose={() => setIsRochasModalOpen(false)}
        title="Acervo de rochas"
        larguraModal="w-[60%] md:w-[600px]"
      >
        <div className="mx-5">
          <div className="flex flex-col items-center md:grid md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Rochas Magmáticas
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Gabro <br />
                2. Granodiorito
                <br />
                3. Granodiorito Porfirítico
                <br />
                4. Traquito
                <br />
                5. Riolito Porfírico
                <br />
                6. Riolito
                <br />
                7. Pegmatito
                <br />
                8. Granito
                <br />
                9. Basalto
              </p>
              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Rochas Metamórficas
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Mármore Bandado <br />
                2. Ardósia
                <br />
                3. Mármore
                <br />
                4. Filito Grafitoso
                <br />
                5. Filito
                <br />
                6. Gnaisse
                <br />
                7. Quartzito
                <br />
                8. Anfibolito
                <br />
                9. Xisto
              </p>
            </div>

            <div className="space-y-2 sm:ml-6 md:mt-[-299px]">
              <h3 className="font-barlow-bold text-xl text-black mt-4 mb-2">
                Rochas Sedimentares
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Evaporito <br />
                2. Calcário
                <br />
                3. Folhelho Betuminoso
                <br />
                4. Calcário Laminado
                <br />
                5. Argilito
                <br />
                6. Conglomerado
                <br />
                7. Calcarenito
                <br />
                8. Argilito
              </p>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isMineraisModalOpen}
        onClose={() => setIsMineraisModalOpen(false)}
        title="Acervo de minerais"
        larguraModal="w-[70%] md:w-[800px]"
      >
        <div className="mx-5">
          <div className="flex flex-col items-center md:grid md:grid-cols-2 md:ml-[120px]">
            <div className="space-y-2">
              <h3 className="font-barlow-bold text-xl text-black mb-2 md:mt-[-224px]">
                Elementos Nativos
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Antimônio <br />
                2. Diamante <br />
                3. Enxofre/Galena <br />
                4. Grafita <br />
                5. Cobre <br />
                6. Enxofre <br />
                7. Ouro
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Sulfetos
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Calcopirita <br />
                2. Realgar <br />
                3. Bornita <br />
                4. Pirita 1 <br />
                5. Galena 1 <br />
                6. Galena 2 <br />
                7. Molibdenita 1 <br />
                8. Molibdenita 2 <br />
                9. Pirita 3 <br />
                10. Pirita 4
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Óxidos e Hidróxidos
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Pirolusita 1 <br />
                2. Pirolusita 2 <br />
                3. Martita <br />
                4. Hematita 1 <br />
                5. Goethita <br />
                6. Magnetita 1 <br />
                7. Polianita <br />
                8. Hematita 2 <br />
                9. Magnetita 2 <br />
                10. Limonita <br />
                11. Cassiterita <br />
                12. Rutilo <br />
                13. Ilmenita <br />
                14. Psilomelana <br />
                15. Espinélio <br />
                16. Coríndon <br />
                17. Gibbsita
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Halogenetos
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Fluorita 1 <br />
                2. Fluorita 2 <br />
                3. Halita
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Carbonatos
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Calcita 1 <br />
                2. Calcita 2 <br />
                3. Calcita 3 <br />
                4. Calcita 4 <br />
                5. Calcita 5 <br />
                6. Calcita 6 <br />
                7. Calcita 7 <br />
                8. Calcita 8 <br />
                9. Calcita 9 <br />
                10. Calcita 10 <br />
                11. Calcita/Pirita <br />
                12. Aragonita 1 <br />
                13. Aragonita 2 <br />
                14. Aragonita 3 <br />
                15. Aragonita 4 <br />
                16. Dolomita <br />
                17. Rodocrosita <br />
                18. Malaquita <br />
                19. Calcita com Dique
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Fosfatos
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Apatita 1 <br />
                2. Apatita 2 <br />
                3. Apatita 3 <br />
                4. Ambligonita <br />
                5. Lazulita <br />
                6. Trifilita/Litofilita
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Cromatos
              </h3>
              <p className="text-gray-600 font-barlow">1. Crocoita</p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Vanadatos
              </h3>
              <p className="text-gray-600 font-barlow">1. Vanadinita</p>
            </div>

            <div className="space-y-2 ml-[15px] md:ml-6">
              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Sulfatos
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Gipsita 1 <br />
                2. Gipsita 2 <br />
                3. Gipsita 3 <br />
                4. Gipsita 4 <br />
                5. Gipsita 5 <br />
                6. Calcantita <br />
                7. Gipsita 6 <br />
                8. Barita 1 <br />
                9. Barita 2 <br />
                10. Celestita
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Tungstatos
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Scheelita <br />
                2. Wolframita
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2">
                Silicatos
              </h3>
              <h4 className="font-barlow-semibold text-lg text-black mb-1">
                Neossilicatos
              </h4>
              <p className="text-gray-600 font-barlow">
                1. Granada 1 <br />
                2. Granada 2 <br />
                3. Topázio <br />
                4. Fenaquita <br />
                5. Sillimanita <br />
                6. Andaluzita <br />
                7. Cianita <br />
                8. Topázio 2 <br />
                9. Granada 3
              </p>

              <h4 className="font-barlow-semibold text-lg text-black mb-1">
                Sorossilicatos
              </h4>
              <p className="text-gray-600 font-barlow">
                1. Epidoto <br />
                2. Epidoto/Calcita/Pirita
              </p>

              <h4 className="font-barlow-semibold text-lg text-black mb-1">
                Ciclossilicatos
              </h4>
              <p className="text-gray-600 font-barlow">
                1. Turmalina 1 <br />
                2. Turmalina 2 <br />
                3. Turmalina 3 <br />
                4. Berilo 1 <br />
                5. Berilo 2 <br />
                6. Turmalina 4
              </p>

              <h4 className="font-barlow-semibold text-lg text-black mb-1">
                Inossilicatos
              </h4>
              <p className="text-gray-600 font-barlow">
                1. Espodumênio <br />
                2. Espodumênio 2 <br />
                3. Tremolita
              </p>

              <h4 className="font-barlow-semibold text-lg text-black mb-1">
                Filossilicatos
              </h4>
              <p className="text-gray-600 font-barlow">
                1. Muscovita <br />
                2. Lepidolita 1 <br />
                3. Lepidolita 2 <br />
                4. Garnierita <br />
                5. Biotita/Muscovita <br />
                6. Vermiculita <br />
                7. Serpentina <br />
                8. Talco <br />
                9. Clorita <br />
                10. Fuchsita <br />
                11. Sericita <br />
                12. Caulinita
              </p>

              <h4 className="font-barlow-semibold text-lg text-black mb-1">
                Tectossilicatos
              </h4>
              <p className="text-gray-600 font-barlow">
                1. Quartzo 1 <br />
                2. Quartzo 2 <br />
                3. Estilbita <br />
                4. Quartzo 3 <br />
                5. Quartzo 4 <br />
                6. Sodalita <br />
                7. Calcedônia <br />
                8. Clinoplotita <br />
                9. Calcedônia 2 <br />
                10. Opala <br />
                11. Albita <br />
                12. Opala 2 <br />
                13. Plagioclásio <br />
                14. Ortoclásio <br />
                15. Plagioclásio 2 <br />
                16. Microclina <br />
                17. Microclina (Amazonita)
              </p>

              <h3 className="font-barlow-bold text-xl text-black mb-2 mt-4">
                Frações de Minerais Maiores
              </h3>
              <p className="text-gray-600 font-barlow">
                1. Turmalina <br />
                2. Cianita em Pegmatito <br />
                3. Quartzo <br />
                4. Calcita <br />
                5. Berilo <br />
                6. Fluorita <br />
                7. Granada <br />
                8. Quartzo <br />
                9. Amianto
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

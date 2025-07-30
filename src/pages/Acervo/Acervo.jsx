import Apresentacao from "../../components/Apresentacao";
import Botao from "../../components/Botao";
import { FaArrowDown } from "react-icons/fa";
import acervoImg from "/imagens/acervo-inicio-imagens.png";

export default function Acervo() {
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
          "Atualmente, nosso acervo é composto por 35 monolitos (12 perfis da Zona da Mata, 11 perfis do Agreste e 12 perfis de solos do Sertão), e cerca de 200 exemplares de rochas, minerais e fósseis."
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
    </>
  );
}

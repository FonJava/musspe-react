import Apresentacao from "../../components/Apresentacao";
import BarraVisita from "../../components/Barra-visita";
import mzinho from "/imagens/mzinho-alt.png";
import Botao from "../../components/Botao";
import { FaArrowDown } from "react-icons/fa";
import ContainerNoticia from "../../components/Container-noticia";
import imgN4 from "/imagens/noticias/n2/3k-imagem.jfif";

export default function Noticias() {
  const scrollToNoticias = () => {
    const noticiasSection = document.getElementById("noticias-section");
    if (noticiasSection) {
      noticiasSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Apresentacao
        tamanhoImagem={400}
        imagem={mzinho}
        titulo={"Fique por dentro das novidades do MUSSPE!"}
        descricao={
          "Saiba em primeira mão das nossas coletas, oficinas, exposições e muito mais. Aqui você encontra tudo sobre as iniciativas científicas e culturais do Museu de Solos de Pernambuco."
        }
      >
        <Botao
          tamanhoFonte="text-[18px] sm:text-[20px] py-[2.5px] md:text-[16px] lg:text-[20px]"
          paddingY="md:py-[1.5px] lg:py-[2.5px]"
          onClick={scrollToNoticias}
        >
          <FaArrowDown className="inline mr-2" />
          Fique por dentro!
        </Botao>
      </Apresentacao>
      <section
        id="noticias-section"
        className="bg-brand-dark py-[80px] min-h-[700px]"
      >
        <ContainerNoticia />
        <ContainerNoticia />
        <ContainerNoticia />
        <ContainerNoticia
          data={"07/04/2025"}
          titulo={
            "Museu de Solos de Pernambuco Alcança 3 mil Seguidores em Seu Perfil Oficial no Instagram"
          }
          resumo={
            "No dia 07 de abril de 2025, o Museu de Solos de Pernambuco atingiu a marca de 3000 seguidores em seu perfil oficial no Instagram. O canal compartilha regularmente fotografias detalhadas de solos, rochas e minerais, registros das expedições de campo, convites para visitas guiadas e cobertura de oficinas e eventos educativos. Essa conquista evidencia o engajamento crescente de estudantes, pesquisadores e do público em geral nas questões geoambientais. A equipe do MUSSPE agradece o apoio de todos e convida novos seguidores a conhecerem de perto os solos pernambucanos por meio de nossas publicações."
          }
          imagem={imgN4}
          link={
            "https://www.instagram.com/museudesolospe/p/DIKN0Ggyhw8/?hl=pt-br"
          }
        />
        <ContainerNoticia />
      </section>
      <BarraVisita />
    </>
  );
}

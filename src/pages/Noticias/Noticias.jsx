import Apresentacao from "../../components/Apresentacao";
import BarraVisita from "../../components/Barra-visita";
import mzinho from "/imagens/mzinho-alt.png";
import Botao from "../../components/Botao";
import { FaArrowDown } from "react-icons/fa";

export default function Noticias() {
  return (
    <>
      <Apresentacao
        imagem={mzinho}
        titulo={"Fique por dentro das novidades do MUSSPE!"}
        descricao={
          "Saiba em primeira mão das nossas coletas, oficinas, exposições e muito mais. Aqui você encontra tudo sobre as iniciativas científicas e culturais do Museu de Solos de Pernambuco."
        }
      >
        <Botao
          tamanhoFonte="text-[18px] sm:text-[20px] py-[2.5px] md:text-[16px] lg:text-[20px]"
          paddingY="md:py-[1.5px] lg:py-[2.5px]"
        >
          <FaArrowDown className="inline mr-2" />
          Fique por dentro!
        </Botao>
      </Apresentacao>
      <BarraVisita />
    </>
  );
}

import Apresentacao from "../../components/Apresentacao";
import BarraVisita from "../../components/Barra-visita";
import mzinhoJogos from "/imagens/mzinho-jogo.webp";
import Botao from "../../components/Botao";
import { FaArrowDown } from "react-icons/fa";
import ContainerJogo from "../../components/Container-jogo";
import anagrama from "/imagens/jogos/anagrama.png";
import caçaPalavras from "/imagens/jogos/caca-palavras.png";
import classGrupos from "/imagens/jogos/class-grupos.png";
import persegLab from "/imagens/jogos/perseg-lab.png";
import pratConserv from "/imagens/jogos/prat-conserv.png";
import questionario from "/imagens/jogos/questionario.png";
import quiz from "/imagens/jogos/quiz.png";
import vf from "/imagens/jogos/vf.png";

export default function Jogos() {
  const scrollToJogos = () => {
    const jogosSection = document.getElementById("jogos-section");
    if (jogosSection) {
      jogosSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Apresentacao
        tamanhoImagem={320}
        imagem={mzinhoJogos}
        titulo={"Jogos Educativos!"}
        descricao={
          "Explore nossas atividades interativas sobre solos, minerais e geodiversidade. Descubra, aprenda e divirta-se com experiências educativas cheias de curiosidades e desafios!"
        }
      >
        <Botao
          tamanhoFonte="text-[18px] sm:text-[20px] py-[2.5px] md:text-[16px] lg:text-[20px]"
          paddingY="md:py-[1.5px] lg:py-[2.5px]"
          onClick={scrollToJogos}
          ariaLabel="Ir para a seção de jogos educativos"
          className="mb-16 md:mb-0"
        >
          <FaArrowDown className="mr-2 inline" />
          Descubra agora!
        </Botao>
      </Apresentacao>
      <section
        id="jogos-section"
        className="min-h-[700px] bg-brand-dark py-[40px] sm:py-[80px]"
      >
        <ContainerJogo
          titulo={"Perseguição no Labirinto: Conservação dos Solos"}
          ano={"(2025)"}
          desenvolvedores={
            "Gabriel R C Leão, Glévia K. Lima, Anthony Guerra e Gabriel Henrique (MUSSPE/UFRPE/UAST)"
          }
          imagem={persegLab}
          link={"https://wordwall.net/play/91771/646/910"}
        />

        <ContainerJogo
          titulo={"Associação: Práticas conservacionistas do solo"}
          ano={"(2025)"}
          desenvolvedores={
            "Gabriel R C Leão, Glévia K. Lima, Anthony Guerra e Gabriel Henrique (MUSSPE/UFRPE/UAST)"
          }
          imagem={pratConserv}
          link={"https://wordwall.net/play/89914/615/580"}
        />

        <ContainerJogo
          titulo={"Anagrama: Processos de degradação dos solos"}
          ano={"(2025)"}
          desenvolvedores={
            "Gabriel R C Leão, Glévia K. Lima, Anthony Guerra e Gabriel Henrique (MUSSPE/UFRPE/UAST)"
          }
          imagem={anagrama}
          link={"https://wordwall.net/play/91187/195/315"}
        />

        <ContainerJogo
          titulo={"Verdadeiro/Falso: Conservação dos solos"}
          ano={"(2025)"}
          desenvolvedores={
            "Gabriel R C Leão, Glévia K. Lima, Anthony Guerra e Gabriel Henrique (MUSSPE/UFRPE/UAST)"
          }
          imagem={vf}
          link={"https://wordwall.net/play/89885/602/241"}
        />

        <ContainerJogo
          titulo={"Quiz Show: Funções do solo"}
          ano={"(2024)"}
          desenvolvedores={
            "Carlos A C C Silva e Glêvia K. Lima (MUSSPE/UFRPE/UAST)"
          }
          imagem={quiz}
          link={"https://wordwall.net/play/13918/281/888"}
        />

        <ContainerJogo
          titulo={"Caça-Palavras: Minerais primários e secundários"}
          ano={"(2024)"}
          desenvolvedores={
            "Lucas V S Euclides e Glêvia K. Lima (MUSSPE/UFRPE/UAST)"
          }
          imagem={caçaPalavras}
          link={"https://wordwall.net/play/80298/652/309"}
        />

        <ContainerJogo
          titulo={"Classificação em grupos: Tipos de rochas"}
          ano={"(2024)"}
          desenvolvedores={
            "Lucas V S Euclides e Glêvia K. Lima (MUSSPE/UFRPE/UAST)"
          }
          imagem={classGrupos}
          link={"https://wordwall.net/play/79663/066/166"}
        />

        <ContainerJogo
          titulo={"Questionário: Tipos de solos"}
          ano={"(2025)"}
          desenvolvedores={
            "Gabriel R C Leão, Glévia K. Lima, Anthony Guerra, Gabriel Henrique e Geovana Gabrielli (MUSSPE/UFRPE/UAST)"
          }
          imagem={questionario}
          link={"https://wordwall.net/play/93957/780/121"}
        />
      </section>
      <BarraVisita />
    </>
  );
}

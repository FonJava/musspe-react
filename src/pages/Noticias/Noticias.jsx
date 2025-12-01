import Apresentacao from "../../components/Apresentacao";
import BarraVisita from "../../components/Barra-visita";
import mzinho from "/imagens/mzinho-alt.png";
import Botao from "../../components/Botao";
import { FaArrowDown } from "react-icons/fa";
import ContainerNoticia from "../../components/Container-noticia";
import imgN4 from "/imagens/noticias/n2/3k-imagem.jfif";
import n1Img1 from "/imagens/noticias/n5/nor4.jpeg";
import n1Img2 from "/imagens/noticias/n5/nor1.jpeg";
import n1Img3 from "/imagens/noticias/n5/nor3.jpeg";
import imgN2 from "/imagens/noticias/n3/coleta-condado.png";
import n3Img1 from "/imagens/noticias/n4/jogo1.png";
import n3Img2 from "/imagens/noticias/n4/jogo2.png";
import n3Img3 from "/imagens/noticias/n4/jogo3.png";
import n5Img1 from "/imagens/noticias/n1/n5-1.jpeg";
import n5Img2 from "/imagens/noticias/n1/n5-2.jpeg";
import n5Img3 from "/imagens/noticias/n1/n5-3.jpeg";
import n5Img4 from "/imagens/noticias/n1/n5-4.jpeg";
import n5Img5 from "/imagens/noticias/n1/n5-5.jpeg";
import expogeo from "/imagens/noticias/n8/expogeo.png";
import aniversario from "/imagens/noticias/n7/musspe-19-anos.png";
import emcena from "/imagens/noticias/n6/emcena.png";
import miniCurso from "/imagens/noticias/n9/mini-curso.png";

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

  const n1Imagens = [n1Img1, n1Img2, n1Img3];
  const n3Imagens = [n3Img1, n3Img2, n3Img3];
  const n3Links = [
    "https://wordwall.net/play/91771/646/449",
    "https://wordwall.net/play/89914/615/725",
    "https://wordwall.net/play/89885/602/883",
  ];
  const n5Imagens = [n5Img1, n5Img2, n5Img3, n5Img4, n5Img5];

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
          <FaArrowDown className="mr-2 inline" />
          Fique por dentro!
        </Botao>
      </Apresentacao>
      <section
        id="noticias-section"
        className="min-h-[700px] bg-brand-dark py-[80px]"
      >
      <ContainerNoticia
          titulo={
            "Ciência, aprendizado e solo fértil para o conhecimento!"
          }
          resumo={
            "No dia 29 de outubro, o Museu de Solos de Pernambuco recebeu o minicurso ministrado pela Dra. Clarissa Buarque Vieira e pelo Dr. Gabriel Henrique M. C. Silva, com o tema “Estoque de Carbono nos Solos de Referência de Pernambuco: Conceitos e Avaliação de Dados”, realizado durante a Semana de Engenharia Florestal (SEF 2025). Foram 8 horas de imersão científica, reunindo teoria e muita troca de experiências sobre a importância do carbono no solo."
          }
          data={"31/10/2025"}
          botao="Saiba mais"
          imagem={miniCurso}
          link={
            "https://www.instagram.com/p/DQepKCSjZlX/?img_index=1"
          }
          imgWidth="w-[90%] sm:w-[300px]"
          imgHeight="h-[90%] sm:h-[360px]"
          ajusteMt={"mt-[40px] md:mt-0"}
        />
      <ContainerNoticia
          titulo={
            "Museu de Solos de Pernambuco confirma presença na II EXPOGEO"
          }
          resumo={
            "Na II EXPOGEO, você vai viver experiências únicas: O Museu de Solos de Pernambuco (MUSSPE) estará presente trazendo ciência, conhecimento e interação para todos. O Projeto MASSAPÊ vai mostrar que o solo também pode ser divertido, educativo e surpreendente. Oficinas criativas e interativas para aprender com as mãos e descobrir que a ciência pode virar arte! E tem muito mais! Vamos mostrar como os solos estão conectados aos Objetivos de Desenvolvimento Sustentável (ODS)."
          }
          data={"23/09/2025"}
          botao="Saiba mais"
          imagem={expogeo}
          link={
            "https://www.instagram.com/expogeo.ufrpe/p/DO9TDmREXAs/?img_index=1"
          }
          imgWidth="w-[90%] sm:w-[300px]"
          imgHeight="h-[90%] sm:h-[360px]"
          ajusteMt={"mt-[40px] md:mt-0"}
        />
        <ContainerNoticia
          titulo={
            "Museu de Solos de Pernambuco completa 19 anos de história"
          }
          resumo={
            "São 19 anos de história, aprendizado e serviços prestados aos diferentes públicos que visitam o MUSSPE! Hoje, 04 de setembro, o Museu de Solos de Pernambuco Professor Mateus Rosas Ribeiro completa 19 anos! A data faz referência ao aniversário do Professor Mateus Rosas Ribeiro, um dos fundadores do museu, a quem a instituição presta homenagem ao receber seu nome. A equipe do museu agradece a todos que caminharam conosco até aqui e reafirma: o Museu de Solos de Pernambuco estará sempre de portas abertas para você."
          }
          data={"04/09/2025"}
          botao="Confira agora"
          imagem={aniversario}
          link={
            "https://www.instagram.com/museudesolospe/p/DOL0F8zjQMy/?hl=pt-br&img_index=1"
          }
          imgWidth="w-[90%] sm:w-[300px]"
          imgHeight="h-[90%] sm:h-[360px]"
          ajusteMt={"mt-[40px] md:mt-0"}
        />
        <ContainerNoticia
          titulo={
            "Equipe do Museu de Solos de Pernambuco apresenta oficina Mãos na Terra"
          }
          resumo={
            "No dia 11/08, ocorreu a apresentação da oficina 'Mãos na Terra', conduzida por Adriana Alves, bolsista de Pedagogia do MUSSPE, projeto voltado para atividades educativas e sensoriais com crianças. Em seguida, tivemos a palestra com Débora do NACES, que abordou mediação inclusiva, destacando estratégias para acolher e conduzir visitas de pessoas com TEA, em um momento de aprendizado com toda a equipe do MUSSPE. Foi um dia de troca, vivências e aprendizado!"
          }
          data={"12/08/2025"}
          botao="Saiba mais"
          imagem={emcena}
          link={
            "https://www.instagram.com/museudesolospe/reel/DNRIRCMB-AX"
          }
          imgWidth="w-[90%] sm:w-[300px]"
          imgHeight="h-[90%] sm:h-[360px]"
          ajusteMt={"mt-[40px] md:mt-0"}
        />
        <ContainerNoticia
          titulo={
            "MUSSPE inicia levantamento de pontos de coleta de macromonolitos em Fernando de Noronha"
          }
          resumo={
            "Entre os dias 7 e 9 de maio, os pesquisadores, Dr. Flávio Marques (EMBRAPA-SOLOS), Prof. Dr. Mateus Ribeiro Filho (UFRPE), Profa. Dra. Paula Renata Araújo (UFPE) e Dr. Fernando Bruno da Silva realizaram a primeira visita na ilha de Fernando de Noronha. A visita tem por objetivo identificar os pontos de coleta dos macromonolitos para o MUSSPE. O trabalho está contando com a parceria do ICMBio Fernando de Noronha e CNPq. As próximas visitas ocorrerão ainda no próximo semestre."
          }
          data={"27/05/2025"}
          link={
            "https://www.instagram.com/museudesolospe/p/DKKPwtsNvqh/?hl=pt-br&img_index=1"
          }
          carrossel={true}
          carrosselImages={n1Imagens}
          carrosselWidth="w-[90%] sm:w-[350px]"
          carrosselHeight="h-[90%] sm:h-[470px]"
          ajusteMt={"md:mt-[-70px]"}
          ajusteMb={"mb-[-40px]"}
        />
        <ContainerNoticia
          titulo={
            "Equipe do MUSSPE e da Embrapa realizam coleta e classificação de solos e macromonolito em Condado - PE"
          }
          resumo={
            "Nos dias 9 e 16 de abril, os pesquisadores Dra. Clarissa B. Vieira (UFRPE), Dr. Gabriel Henrique Silva (UFRPE), Dr. Flávio Marques (EMBRAPA-SOLOS) e Prof. Dr. Mateus R. Ribeiro Filho (UFRPE), realizaram a classificação e coletas de amostras de solo e de macromonolito, no município de Condado-PE (Zona da Mata Norte). O solo foi previamente classificado como Argissolo Amarelo com caráter fragipânico, apresentando horizontes superficiais mais arenosos sobrejacentes a horizontes de acúmulo de argila com fragipã a partir de 100 cm de profundidade. Atualmente, na área coletada, o uso da terra é predominantemente o cultivo de cana-de-açúcar."
          }
          data={"29/04/2025"}
          botao="Confira agora"
          imagem={imgN2}
          link={
            "https://www.instagram.com/museudesolospe/reel/DJCMzGjt2vm/?hl=pt-br"
          }
          imgWidth="w-[90%] sm:w-[300px]"
          imgHeight="h-[90%] sm:h-[360px]"
          ajusteMt={"mt-[40px] md:mt-0"}
        />
        <ContainerNoticia
          titulo={
            "MUSSPE desenvolve jogos educativos com praticas de conservação do solo"
          }
          data={"15/04/2025"}
          resumo={
            "No dia 15 de abril, é celebrado o Dia Nacional da Conservação do Solo. Essa data tem como objetivo conscientizar a população da importância de preservar não somente o solo, mas também os ecossistemas e o meio ambiente como um todo. Para comemorar esse dia tão importante, a equipe do MUSSPE desenvolveu 3 jogos educativos envolvendo práticas de conservação do solo para mostrar que cuidar do nosso solo pode e deve ser divertido."
          }
          link={
            "https://www.instagram.com/museudesolospe/p/DIeEQzYOaeQ/?img_index=1"
          }
          carrossel={true}
          carrosselTemLink={true}
          carrosselImages={n3Imagens}
          carrosselLinks={n3Links}
          carrosselWidth="w-[90%] sm:w-[370px]"
          carrosselHeight="h-[90%] sm:h-[200px]"
        />
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
          ajusteMt={"mt-[40px] md:mt-0"}
        />
        <ContainerNoticia
          titulo={
            "MUSSPE inicia coleta de novos macromonolitos de solos de referência em Pernambuco"
          }
          data={"26/03/2025"}
          resumo={
            "Nos dias 26 e 27 de março, os então pesquisadores do MUSSPE: Dra. Clarissa Buarque, Dr. Flávio Marques, Dr. Gabriel Henrique, Dr. Luiz Henrique , Prof. Dr. Mateus Rosas, Profa Dra. Paula Renata, iniciaram as coletas dos novos macromonolitos dos solos de referência do estado de Pernambuco. O projeto tem por objetivo renovar macromonolitos do acervo do MUSSPE. A coleta iniciou-se na Zona da Mata Norte do estado, nos municípios de Goiana e Aliança, contando com a parceria do IPA. As microrregiões do agreste e sertão de Pernambuco também serão alvos de coleta, bem como a ilha de Fernando de Noronha, as quais serão realizadas em breve."
          }
          link={"https://www.instagram.com/p/DH_-A1myvsj/?img_index=1"}
          carrossel={true}
          carrosselImages={n5Imagens}
          carrosselWidth="w-[90%] sm:w-[270px]"
          carrosselHeight="h-[90%] sm:h-[350px]"
          ajusteMt={"mt-[20px] md:mt-[-40px]"}
        />
      </section>
      <BarraVisita />
    </>
  );
}

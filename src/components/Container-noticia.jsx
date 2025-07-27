import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import Botao from "./Botao";
import Carrossel from "./Carrossel";

export default function ContainerNoticia({
  data,
  titulo,
  resumo,
  imagem,
  imgHeight = "h-[350px]",
  imgWidth = "w-[250px]",
  link,
  botao = "Saiba mais",
  carrossel = false,
  carrosselImages = [],
  carrosselLinks = [],
  carrosselWidth = "w-[300px]",
  carrosselHeight = "h-[300px]",
  carrosselTemLink = false,
  ajusteMt,
  ajusteMb,
}) {
  return (
    <div className="bg-brand-roxo min-h-[200px] mx-auto w-[90%] lg:w-[800px] mt-[10px] mb-[30px] rounded-[20px] flex flex-col">
      <div>
        <span className="font-barlow-italic text-brand-bege float-right p-[20px]">
          {data}
        </span>
        <h3 className="font-barlow-extrabold text-brand-bege text-[24px] mb-0 p-[20px] text-justify mt-[40px] md:mt-0 mx-auto md:mx-0 w-[90%] md:w-[400px]">
          {titulo}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-[50%] p-[20px] flex flex-col">
          <p className="font-barlow text-brand-bege text-[18px] text-justify">
            {resumo}
          </p>
        </div>
        <div
          className={`order-1 md:order-2 flex flex-col items-center p-[20px] w-full md:w-[50%] ${ajusteMt} ${ajusteMb}`}
        >
          {carrossel ? (
            <Carrossel
              showArrows={false}
              images={carrosselImages}
              links={carrosselLinks}
              width={carrosselWidth}
              height={carrosselHeight}
              temLink={carrosselTemLink}
            />
          ) : (
            <img
              className={`mt-[-40px] ${imgWidth} ${imgHeight} rounded-[10px]`}
              src={imagem}
              alt={titulo}
              draggable="false"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-2 mt-2 items-end pr-4 mb-4">
        <a
          href="https://www.instagram.com/museudesolospe/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.youtube.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
        >
          <FaTiktok size={20} />
        </a>
        <a
          href="https://www.facebook.com/museudesolospe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
        >
          <FaFacebook size={20} />
        </a>
      </div>
      <div className="mx-auto mt-[-90px] mb-[50px]">
        <Link to={link}>
          <Botao tamanhoFonte="text-[25px]" paddingX="px-[30px]">
            {botao}
          </Botao>
        </Link>
      </div>
    </div>
  );
}

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
    <div className="mx-auto mb-[30px] mt-[10px] flex min-h-[200px] w-[90%] flex-col rounded-[20px] bg-brand-roxo lg:w-[800px]">
      <div>
        <span className="float-right p-[20px] font-barlow-italic text-brand-bege">
          {data}
        </span>
        <h3 className="mx-auto mb-0 mt-[40px] w-[90%] p-[20px] text-justify font-barlow-extrabold text-[24px] text-brand-bege md:mx-0 md:mt-0 md:w-[400px]">
          {titulo}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="order-2 flex w-full flex-col p-[20px] md:order-1 md:w-[50%]">
          <p className="text-justify font-barlow text-[18px] text-brand-bege">
            {resumo}
          </p>
        </div>
        <div
          className={`order-1 flex w-full flex-col items-center p-[20px] md:order-2 md:w-[50%] ${ajusteMt} ${ajusteMb}`}
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
      <div className="mb-4 mt-2 flex flex-col items-end space-y-2 pr-4">
        <a
          href="https://www.instagram.com/museudesolospe/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.youtube.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
        >
          <FaTiktok size={20} />
        </a>
        <a
          href="https://www.facebook.com/museudesolospe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bege transition-colors duration-200 hover:text-brand-laranja"
        >
          <FaFacebook size={20} />
        </a>
      </div>
      <div className="mx-auto mb-[50px] mt-[-90px]">
        <Link to={link}>
          <Botao tamanhoFonte="text-[25px]" paddingX="px-[30px]">
            {botao}
          </Botao>
        </Link>
      </div>
    </div>
  );
}

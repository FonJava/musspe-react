import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import Botao from "./Botao";

export default function ContainerNoticia({
  data,
  titulo,
  resumo,
  imagem,
  link,
}) {
  return (
    <div className="bg-brand-roxo min-h-[200px] mx-auto w-[800px] mt-[10px] mb-[30px] rounded-[20px] flex flex-col">
      <div>
        <span className="font-barlow-italic text-brand-bege float-right p-[20px]">
          {data}
        </span>
        <h3 className="font-barlow-extrabold text-brand-bege text-[24px] mb-0 w-[400px] p-[20px] text-justify">
          {titulo}
        </h3>
      </div>
      <div className="flex">
        <div className="w-[50%] p-[20px] flex flex-col">
          <p className="font-barlow text-brand-bege text-[18px] text-justify">
            {resumo}
          </p>
        </div>
        <div className="flex flex-col items-center p-[20px] w-[50%]">
          <img
            className="mt-[-40px] w-[250px] h-[350px] rounded-[10px]"
            src={imagem}
            alt={titulo}
            draggable="false"
          />
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
            Saiba mais
          </Botao>
        </Link>
      </div>
    </div>
  );
}

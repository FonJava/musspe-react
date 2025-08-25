import Botao from "../../components/Botao";
import { FaArrowDown, FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import visitaDesktop from "/imagens/imagem-visitas.png";
import visitaMobile from "/imagens/imagem-visitas2.png";

export default function Visita() {
  return (
    <section
      id="visitas-section"
      className="bg-[#FFDCD2] relative w-full h-[600px] md:h-[700px] overflow-hidden"
    >
      <div className="absolute left-6 top-6 z-10 hidden md:flex flex-col space-y-1">
        <a
          href="https://www.instagram.com/museudesolospe/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFDCD2] hover:text-brand-orange transition-colors duration-200"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://www.youtube.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFDCD2] hover:text-brand-orange transition-colors duration-220"
        >
          <FaYoutube size={22} />
        </a>
        <a
          href="https://www.tiktok.com/@museudesolospe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFDCD2] hover:text-brand-orange transition-colors duration-220"
        >
          <FaTiktok size={22} />
        </a>
        <a
          href="https://www.facebook.com/museudesolospe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFDCD2] hover:text-brand-orange transition-colors duration-220"
        >
          <FaFacebook size={22} />
        </a>
      </div>

      <img
        src={visitaDesktop}
        alt="Visita guiada ao museu"
        className="hidden md:block lg:w-full lg:h-800 md:w-full md:h-550 sm:w-full sm:h-550 object-cover lg:-mt-24 md:-mt-12"
        draggable="false"
      />
      
      <img
        src={visitaMobile}
        alt="Visita guiada ao museu"
        className="md:hidden w-full h-600 object-cover -mt-16 sm:-mt-20"
        draggable="false"
      />
    </section>
  );
}
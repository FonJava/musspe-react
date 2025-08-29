import {
  FaArrowDown,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import visitaDesktop from "/imagens/imagem-visitas.png";
import visitaMobile from "/imagens/imagem-visitas2.png";

export default function Visita() {
  return (
    <>
      <section className="mt-[-73px] bg-brand-dark">
        <div className="absolute left-4 top-[100px] z-10 hidden md:flex flex-col space-y-2">
          <a
            href="https://www.instagram.com/museudesolospe/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFDCD2] hover:text-brand-orange transition-colors duration-220"
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
          className="hidden md:block w-full my-[-4.5%]"
          draggable="false"
        />

        <img
          src={visitaMobile}
          alt="Visita guiada ao museu"
          className="md:hidden w-full my-[-6.8%]"
          draggable="false"
        />
      </section>
      <section className="h-[300px] bg-brand-bege"></section>
    </>
  );
}

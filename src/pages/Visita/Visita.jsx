import {
  FaClock,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import visitaDesktop from "/imagens/imagem-visitas.png";
import visitaMobile from "/imagens/imagem-visitas2.png";
import FormularioVisita from "../../components/FormularioVisita";
import imagemMaps from "/imagens/imagen-mapa.png";

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
      <section className="bg-brand-bege">
        <div className="flex pt-[100px] font-barlow-italic text-xl w-[670px] mx-auto items-center">
          <div className="w-[415px] text-start">
            <h2 className="font-barlow-bold text-brand-dark text-3xl mt-[-25px] lg:mt-0">
              Sua visita
            </h2>
            <span className="flex gap-2 my-4">
              <FaClock size={16} className="text-brand-laranja mt-1.5" />
              <p className="flex items-center gap-2">
                Segunda a sexta (13h às 17h)
              </p>
            </span>

            <span className="flex gap-1">
              <FaMapMarkerAlt size={19} className="text-brand-laranja mt-1" />
              <p className="flex gap-2">
                Rua Dom Manoel de Medeiros, s/n, Prédio
                <br /> Professor Mateus Rosas Ribeiro,
                <br /> Departamento de Agronomia, UFRPE, Dois
                <br />
                Irmãos, Recife - PE
              </p>
            </span>
          </div>
          <a href="https://maps.app.goo.gl/DzJmnuAaG8ijhjwm6">
            <img
              src={imagemMaps}
              className="w-[280px]"
              alt="Localização no Google Maps"
            />
          </a>
        </div>
        <div className="max-w-2xl mx-auto py-10 px-4">
          <FormularioVisita />
        </div>
      </section>
    </>
  );
}

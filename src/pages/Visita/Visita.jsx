import { useEffect, useState } from "react";
import {
  FaClock,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

import visitaDesktop from "/imagens/imagem-visitas.webp";
import visitaMobile from "/imagens/imagem-visitas2.webp";
import FormularioVisita from "../../components/FormularioVisita";
import imagemMaps from "/imagens/imagen-mapa.png";
import Modal from "../../components/Modal";

export default function Visita() {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  useEffect(() => {
    setAlertModalOpen(true);
  }, []);

  return (
    <>
      <Modal
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        title="Visitas suspensas temporariamente"
        larguraModal="w-[90%] md:w-[700px]"
        textoBotao="Entendi"
      >
        <div className="flex flex-col items-center gap-4 text-brand-dark">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-laranja/10 text-brand-laranja">
            <FaExclamationTriangle size={30} />
          </div>
          <p className="max-w-[520px] text-center font-barlow text-lg leading-relaxed text-brand-dark sm:text-xl">
            O MUSSPE está passando por reformas, por isso as visitas do museu
            estão suspensas por tempo indefinido.
          </p>
        </div>
      </Modal>

      <section className="mt-[-73px] bg-brand-dark">
        <div className="absolute left-4 top-[100px] z-10 hidden flex-col space-y-2 md:flex">
          <a
            href="https://www.instagram.com/museudesolospe/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-220 text-[#FFDCD2] transition-colors hover:text-brand-orange"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://www.youtube.com/@museudesolospe"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-220 text-[#FFDCD2] transition-colors hover:text-brand-orange"
          >
            <FaYoutube size={22} />
          </a>
          <a
            href="https://www.tiktok.com/@museudesolospe"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-220 text-[#FFDCD2] transition-colors hover:text-brand-orange"
          >
            <FaTiktok size={22} />
          </a>
          <a
            href="https://www.facebook.com/museudesolospe/"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-220 text-[#FFDCD2] transition-colors hover:text-brand-orange"
          >
            <FaFacebook size={22} />
          </a>
        </div>

        <img
          src={visitaDesktop}
          alt="Visita guiada ao museu"
          className="my-[-4.5%] hidden w-full md:block"
          draggable="false"
        />

        <img
          src={visitaMobile}
          alt="Visita guiada ao museu"
          className="my-[-6.8%] w-full md:hidden"
          draggable="false"
        />
      </section>
      <section className="bg-brand-bege">
        <div className="mx-auto items-center pl-2 pt-[70px] font-barlow-italic text-lg sm:text-xl md:flex md:w-[670px] md:pl-0 md:pt-[100px]">
          <div className="text-start md:w-[415px]">
            <h2 className="mt-[-25px] font-barlow-bold text-3xl text-brand-dark lg:mt-0">
              Sua visita
            </h2>
            <span className="my-4 flex gap-2">
              <FaClock size={16} className="mt-1.5 text-brand-laranja" />
              <p className="flex items-center gap-2">
                Segunda, Terça e Quinta (manhã e tarde)
              </p>
            </span>

            <span className="flex gap-1">
              <FaMapMarkerAlt size={19} className="mt-1 text-brand-laranja" />
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
              className="mt-4 w-[280px] sm:mx-auto md:mt-0"
              alt="Localização no Google Maps"
            />
          </a>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-10">
          <FormularioVisita />
        </div>
      </section>
    </>
  );
}

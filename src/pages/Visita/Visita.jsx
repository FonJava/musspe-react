import { useState, useEffect } from "react";
import {
  FaClock,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";

import visitaDesktop from "/imagens/imagem-visitas.png";
import visitaMobile from "/imagens/imagem-visitas2.png";
import FormularioVisita from "../../components/FormularioVisita";
import imagemMaps from "/imagens/imagen-mapa.png";
import Modal from "../../components/Modal";

export default function Visita() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("visitaHorarioModalSeen");
    if (!hasSeenModal) {
      setShowModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    sessionStorage.setItem("visitaHorarioModalSeen", "true");
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title="Aviso Importante"
        larguraModal="w-[90%] md:w-[600px]"
        textoBotao="Entendi"
      >
        <div className="text-center font-barlow-italic text-lg text-brand-dark">
          <div className="mb-4 flex items-center justify-center gap-2">
            <FaClock size={24} className="text-brand-laranja" />
            <h3 className="font-barlow-bold text-2xl text-brand-laranja">
              Horário Temporário
            </h3>
          </div>
          <p className="mb-4 leading-relaxed">
            Informamos que até o dia{" "}
            <span className="font-barlow-bold text-brand-laranja">
              6 de março de 2026
            </span>
            , nosso horário de visitação estará limitado:
          </p>
          <div className="mx-auto mb-4 w-fit rounded-lg bg-brand-bege px-6 py-4">
            <p className="font-barlow-bold text-xl text-brand-dark">
              Segunda, Terça e Quinta
            </p>
            <p className="font-barlow-bold text-2xl text-brand-laranja">
              8h às 13h
            </p>
          </div>
          <p className="text-base">
            Agradecemos a compreensão e esperamos sua visita!
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
                Segunda, Terça e Quinta (8h às 13h)
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

import { useState } from "react";

export default function ContainerJogo({
  titulo,
  ano = "(2025)",
  desenvolvedores,
  imagem,
  link,
  imgWidth = "w-[100px] sm:w-[120px] md:w-[130px] lg:w-[130px]",
  imgHeight = "h-[100px] sm:h-[120px] md:h-[130px] lg:h-[130px]",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (link) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="group mx-auto mb-[32px] mt-[2px] h-[170px] w-[88%] cursor-pointer overflow-hidden rounded-[20px] bg-brand-roxo p-[15px] transition-all duration-300 hover:scale-105 sm:h-auto sm:w-[90%] sm:p-[20px] md:h-auto lg:h-auto lg:w-[800px] lg:p-[25px]"
        onClick={handleClick}
      >
        <div className="flex h-full items-center gap-[15px] sm:gap-[20px]">
          <div>
            <img
              className={`${imgWidth} ${imgHeight} rounded-[8px] object-cover`}
              src={imagem}
              alt={titulo}
              draggable="false"
            />
          </div>

          <div className="flex-1">
            <h3 className="mb-[4px] font-barlow-extrabold text-[18px] leading-tight text-brand-bege sm:mb-[6px] sm:text-[26px] lg:mb-[8px] lg:text-[26px]">
              {titulo} {ano}
            </h3>
            <p className="font-barlow-normal mt-4 text-[12px] text-brand-bege sm:text-[20px] md:text-[20px] lg:text-[20px]">
              Desenvolvido por: {desenvolvedores}
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative h-[80%] w-[90%] max-w-6xl overflow-hidden rounded-lg bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Voltar */}
            <button
              onClick={closeModal}
              className="text-black-400 absolute right-5 top-4 z-10 text-lg font-normal transition-colors hover:text-gray-600"
            >
              Voltar →
            </button>

            {/* Iframe */}
            <iframe
              src={link}
              className="h-full w-full border-none"
              title={titulo}
            />
          </div>
        </div>
      )}
    </>
  );
}

import { useState } from 'react';

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
        className="bg-brand-roxo mx-auto w-[88%] sm:w-[90%] lg:w-[800px] h-[170px] sm:h-auto md:h-auto lg:h-auto mt-[2px] mb-[32px] rounded-[20px] p-[15px] sm:p-[20px] lg:p-[25px] hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden"
        onClick={handleClick}
      >
        <div className="flex items-center gap-[15px] sm:gap-[20px] h-full">
          <div>
            <img
              className={`${imgWidth} ${imgHeight} rounded-[8px] object-cover`}
              src={imagem}
              alt={titulo}
              draggable="false"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-barlow-extrabold text-brand-bege text-[18px] sm:text-[26px] lg:text-[26px] mb-[4px] sm:mb-[6px] lg:mb-[8px] leading-tight">
              {titulo} {ano}
            </h3>
            <p className="font-barlow-normal text-brand-bege text-[12px] sm:text-[20px] md:text-[20px] lg:text-[20px] mt-4">
              Desenvolvido por: {desenvolvedores}
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="relative w-[90%] max-w-6xl h-[80%] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Voltar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-5 text-black-400 hover:text-gray-600 text-lg font-normal z-10 transition-colors"
            >
              Voltar →
            </button>
            
            {/* Iframe */}
            <iframe
              src={link}
              className="w-full h-full border-none"
              title={titulo}
            />
          </div>
        </div>
      )}
    </>
  );
}
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import BotaoAlt from "./Botao-alt";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  larguraModal = "w-[80%] md:w-[800px]",
}) => {
  // Desativar scroll quando modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup: restaurar scroll quando componente for desmontado
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Função para fechar modal ao clicar no fundo
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-lg ${larguraModal} w-full mx-4 max-h-[100vh] overflow-y-auto shadow-xl`}
      >
        <div className="flex items-center justify-between p-6">
          <h2 className="mx-auto mt-4 text-[27px] sm:text-3xl font-barlow-bold text-black">
            {title}
          </h2>
        </div>
        <div className="mt-[-14px] p-6">{children}</div>
        <button
          onClick={onClose}
          className="flex mx-auto text-gray-500 hover:text-gray-700 transition-colors duration-200 mb-4"
        >
          <BotaoAlt>Fechar</BotaoAlt>
        </button>
      </div>
    </div>
  );
};

export default Modal;

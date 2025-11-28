import React, { useEffect, useState } from "react";
import BotaoAlt from "./Botao-alt";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  larguraModal = "w-[80%] md:w-[800px]",
  textoBotao = "Fechar",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsAnimating(true);

      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = "unset";
      setIsVisible(false);

      setTimeout(() => setIsAnimating(false), 300);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ease-in-out ${
        isVisible ? "bg-opacity-50" : "bg-opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`rounded-lg bg-white ${larguraModal} mx-4 max-h-[95vh] w-full transform overflow-y-auto shadow-xl transition-all duration-300 ease-in-out ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <h2 className="mx-auto mt-4 font-barlow-bold text-[27px] text-black sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-[-14px] p-6">{children}</div>
        <button
          onClick={onClose}
          className="mx-auto mb-4 flex text-gray-500 transition-colors duration-200 hover:text-gray-700"
          aria-label={textoBotao ? textoBotao : "Fechar modal"}
        >
          <BotaoAlt>{textoBotao}</BotaoAlt>
        </button>
      </div>
    </div>
  );
};

export default Modal;

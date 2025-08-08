import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import BotaoAlt from "./Botao-alt";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  larguraModal = "w-[80%] md:w-[800px]",
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
        className={`bg-white rounded-lg ${larguraModal} w-full mx-4 max-h-[100vh] overflow-y-auto shadow-xl transform transition-all duration-300 ease-in-out ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
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

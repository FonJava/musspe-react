import React from "react";

const Botao = ({
  children,
  tamanhoFonte = "text-lg",
  marginY = "",
  paddingX = "px-3",
  paddingY = "py-[1.5px]",
}) => (
  <button
    className={`inline-block bg-[#d37d46] text-white ${tamanhoFonte} font-barlow-medium ${paddingX} ${paddingY} ${marginY} rounded-full hover:bg-[#c66f39] transition-colors duration-200`}
  >
    {children}
  </button>
);

export default Botao;

import React from "react";

const Botao = ({
  children,
  tamanhoFonte = "text-lg",
  marginY = "",
  paddingX = "px-3",
  paddingY = "py-[1.5px]",
  onClick,
  ...rest
}) => (
  <button
    onClick={onClick}
    className={`inline-block bg-[#d37d46] text-white ${tamanhoFonte} font-barlow-medium ${paddingX} ${paddingY} ${marginY} rounded-full transition-colors duration-200 hover:bg-[#c66f39]`}
    {...rest}
  >
    {children}
  </button>
);

export default Botao;

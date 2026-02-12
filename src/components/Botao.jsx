import React from "react";

const Botao = ({
  children,
  tamanhoFonte = "text-lg",
  marginY = "",
  paddingX = "px-3",
  paddingY = "py-[1.5px]",
  onClick,
  disabled = false,
  ...rest
}) => (
  <button
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
    className={`inline-block ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#d37d46] hover:bg-[#c66f39]'} text-white ${tamanhoFonte} font-barlow-medium ${paddingX} ${paddingY} ${marginY} rounded-full transition-colors duration-200`}
    {...rest}
  >
    {children}
  </button>
);

export default Botao;

import React from "react";

const Botao = ({
  children,
  tamanhoFonte = "text-lg",
  marginY = "",
  paddingX = "px-3",
  paddingY = "py-[1.5px]",
  onClick,
  disabled = false,
  ariaLabel,
  className = "",
  ...rest
}) => (
  <button
    type="button"
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`inline-block ${disabled ? "cursor-not-allowed bg-gray-400" : "bg-[#d37d46] hover:bg-[#c66f39]"} text-white ${tamanhoFonte} font-barlow-medium ${paddingX} ${paddingY} ${marginY} rounded-full transition-colors duration-200 ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default Botao;

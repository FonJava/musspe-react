import React from "react";

const BotaoAlt = ({
  children,
  tamanhoFonte = "text-lg",
  marginY = "",
  paddingX = "px-5",
  paddingY = "py-[0px]",
  onClick,
  ariaLabel,
  className = "",
  ...rest
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className={`inline-block border-2 border-[#CC7042] bg-transparent text-[#CC7042] ${tamanhoFonte} font-barlow-medium ${paddingX} ${paddingY} ${marginY} rounded-full transition-colors duration-200 hover:border-[#CC7042] hover:bg-[#CC7042] hover:text-white ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default BotaoAlt;

import React from "react";

const BotaoAlt = ({
  children,
  tamanhoFonte = "text-lg",
  marginY = "",
  paddingX = "px-5",
  paddingY = "py-[0px]",
  onClick,
  ...rest
}) => (
  <button
    onClick={onClick}
    className={`inline-block bg-transparent border-2 border-[#CC7042] text-[#CC7042] ${tamanhoFonte} font-barlow-medium ${paddingX} ${paddingY} ${marginY} rounded-full hover:bg-[#CC7042] hover:text-white hover:border-[#CC7042] transition-colors duration-200`}
    {...rest}
  >
    {children}
  </button>
);

export default BotaoAlt;

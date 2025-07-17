import React from "react";
import Botao from "./Botao";
import { Link } from "react-router-dom";

export default function BarraVisita() {
  return (
    <section className="bg-cover bg-center bg-brand-orange bg-[url('/musspe-react/imagens/venha-conhecer-fundo.png')]">
      <h1 className="text-3xl md:text-4xl font-barlow-extrabold text-center pt-8 pb-4 text-brand-bege">
        Agende uma visita e venha conhecer os
        <br />
        solos pernambucanos!
      </h1>
      <div className="flex justify-center pb-6">
        <Link to="visita.html">
          <Botao tamanhoFonte="text-2xl" paddingY="py-1">
            Agende uma visita
          </Botao>
        </Link>
      </div>
    </section>
  );
}

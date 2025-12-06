/* Barra-visita */
import React from "react";
import Botao from "./Botao";
import { Link } from "react-router-dom";

export default function BarraVisita() {
  return (
    <section className="bg-brand-orange bg-[url('/imagens/venha-conhecer-fundo.png')] bg-cover bg-center">
      <h1 className="pb-4 pt-8 text-center font-barlow-extrabold text-3xl text-brand-bege md:text-4xl">
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

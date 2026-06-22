import React from "react";

export default function Spinner() {
  return (
    <div
      className="flex min-h-[50vh] w-full items-center justify-center px-4 py-12"
      role="status"
      aria-label="Carregando conteúdo"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-brand-laranja border-t-transparent" />
        <p className="font-barlow-medium text-[15px] text-brand-dark">
          Carregando...
        </p>
      </div>
    </div>
  );
}

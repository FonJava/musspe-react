import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Noticias from "./pages/Noticias/Noticias";
/*
import Acervo from "./pages/Acervo/Acervo";
import Colaboradores from "./pages/Colaboradores/Colaboradores";
import Visita from "./pages/Visita/Visita";
import Jogos from "./pages/Jogos/Jogos"; */
import NotFound from "./pages/NotFound/NotFound";

function AppWrapper() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const pathToPage = {
      "/musspe-react/": "home",
      "/musspe-react/noticias": "noticias",
      "/musspe-react/acervo": "acervo",
      "/musspe-react/jogos": "jogos",
      "/musspe-react/colaboradores": "colaboradores",
      "/musspe-react/visita": "visita",
    };
    const page = pathToPage[location.pathname] || "notfound";
    setActivePage(page);
  }, [location.pathname]);

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        <Routes>
          <Route path="/musspe-react/" element={<Home />} />
          <Route path="/musspe-react/noticias" element={<Noticias />} />
          {/*
          <Route path="/musspe-react/acervo" element={<Acervo />} />
          <Route path="/musspe-react/jogos" element={<Jogos />} />
          <Route path="/musspe-react/colaboradores" element={<Colaboradores />} />
          <Route path="/musspe-react/visita" element={<Visita />} />
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

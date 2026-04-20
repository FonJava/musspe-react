import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Noticias from "./pages/Noticias/Noticias";
import Acervo from "./pages/Acervo/Acervo";
import Colaboradores from "./pages/Colaboradores/Colaboradores";
import Jogos from "./pages/Jogos/Jogos";
import Visita from "./pages/Visita/Visita";
/*

 */
import NotFound from "./pages/NotFound/NotFound";

function AppWrapper() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const pathToPage = {
      "/": "home",
      "/noticias": "noticias",
      "/acervo": "acervo",
      "/jogos": "jogos",
      "/colaboradores": "colaboradores",
      "/visita": "visita",
    };
    const page = pathToPage[location.pathname] || "notfound";
    setActivePage(page);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/acervo" element={<Acervo />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/visita" element={<Visita />} />
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

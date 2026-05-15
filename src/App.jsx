import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "./assets/firebase";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Noticias from "./pages/Noticias/Noticias";
import Acervo from "./pages/Acervo/Acervo";
import Colaboradores from "./pages/Colaboradores/Colaboradores";
import Jogos from "./pages/Jogos/Jogos";
import Visita from "./pages/Visita/Visita";
import NotFound from "./pages/NotFound/NotFound";

function AppWrapper() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("home");
  const [visits, setVisits] = useState(0);

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

  useEffect(() => {
    const countVisit = async () => {
      try {
        const alreadyVisited = sessionStorage.getItem("visited");

        const ref = doc(db, "metrics", "visits");

        if (!alreadyVisited) {
          sessionStorage.setItem("visited", "true");

          const snap = await getDoc(ref);

          if (snap.exists()) {
            await updateDoc(ref, {
              count: increment(1),
            });
          } else {
            await setDoc(ref, {
              count: 1,
            });
          }
        }

        const updatedSnap = await getDoc(ref);

        if (updatedSnap.exists()) {
          setVisits(updatedSnap.data().count);
        }
      } catch (err) {
        console.error("Erro ao atualizar/ler contador de visitas:", err);
        setVisits("747");
      }
    };

    countVisit();
  }, []);

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
      <Footer visits={visits} />
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

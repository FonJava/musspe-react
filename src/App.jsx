import React, { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";

import { db, authReady } from "./assets/firebase";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";

const Home = lazy(() => import("./pages/Home/Home"));
const Noticias = lazy(() => import("./pages/Noticias/Noticias"));
const Acervo = lazy(() => import("./pages/Acervo/Acervo"));
const Colaboradores = lazy(() => import("./pages/Colaboradores/Colaboradores"));
const Jogos = lazy(() => import("./pages/Jogos/Jogos"));
const Visita = lazy(() => import("./pages/Visita/Visita"));

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

    const page = pathToPage[location.pathname] || "home";

    setActivePage(page);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const countVisit = async () => {
      try {
        await authReady;

        const alreadyVisited = sessionStorage.getItem("visited");

        const ref = doc(db, "metrics", "visits");

        if (!alreadyVisited) {
          sessionStorage.setItem("visited", "true");

          await setDoc(
            ref,
            {
              count: increment(1),
            },
            {
              merge: true,
            },
          );
        }

        const updatedSnap = await getDoc(ref);

        if (updatedSnap.exists()) {
          setVisits(updatedSnap.data().count);
        }
      } catch (err) {
        console.error("Erro ao atualizar/ler contador de visitas:", err);

        setVisits(0);
      }
    };

    countVisit();
  }, []);

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />

      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/acervo" element={<Acervo />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/colaboradores" element={<Colaboradores />} />
            <Route path="/visita" element={<Visita />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
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

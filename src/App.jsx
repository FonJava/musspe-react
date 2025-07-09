import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
/* import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer"; */

import "./assets/css/estilo.css";

import Home from "./pages/Home/Home";
/* import Noticias from "./pages/Noticias/Noticias";
import Acervo from "./pages/Acervo/Acervo";
import Colaboradores from "./pages/Colaboradores/Colaboradores";
import Visita from "./pages/Visita/Visita";
import Jogos from "./pages/Jogos/Jogos"; */
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Sidebar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/noticias" element={<Noticias />} />
          <Route path="/acervo" element={<Acervo />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/visita" element={<Visita />} />*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

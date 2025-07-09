import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Bem-vindo ao Museu do Super Mario</h1>
      <p>Explore o mundo mágico do Super Mario!</p>
      <nav>
        <ul>
          <li>
            <Link to="/noticias">Notícias</Link>
          </li>
          <li>
            <Link to="/acervo">Acervo</Link>
          </li>
          <li>
            <Link to="/jogos">Jogos</Link>
          </li>
          <li>
            <Link to="/colaboradores">Colaboradores</Link>
          </li>
          <li>
            <Link to="/visita">Visita</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

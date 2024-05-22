import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section class="container">
      <h1 className="titulo">
        Tecnico laboral como asistente en desarrollo de Software
      </h1>
      <section>
        <h1>1° nivel</h1>
        <Link to={"/introduccion"}>
          <button id="introduccion">Introducción a la programación</button>
        </Link>
        <Link to={"/logica"}>
          <button id="logica">Lógica de Programación</button>
        </Link>
        <Link to={"/bases-datos"}>
          <button id="metodologias">
            Gestión de bases de datos
          </button>
        </Link>
      </section>
      <section>
        <h1>2° nivel</h1>
        <Link to={"/web-l"}>
          <button id="web-l">Front 1</button>
        </Link>
        <Link to={"/moviles-l"}>
          <button id="moviles-l">Back 1</button>
        </Link>
        <Link to={"/metodologias"}>
          <button id="gestion">Metodologías ágiles</button>
        </Link>
      </section>
      <section>
        <h1>3° nivel</h1>
        <Link to={"/web-ll"}>
          <button id="web-ll">Front 2</button>
        </Link>
        <Link to={"/moviles-ll"}>
          <button id="moviles-ll">Back 2</button>
        </Link>
        <Link to={"/nuevas"}>
          <button id="nuevas">Nuevas tecnologías de la programación</button>
        </Link>
      </section>
    </section>
  );
};

export default Home;

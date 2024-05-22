import React from "react";
import { Link } from "react-router-dom";
const MovilesUno = () => {
  return (
    <section className="contenedor">
      <section className="nombre">
        <h1>Back 1</h1>
        <p>
          Módulo aplicado para que se adapte a cualquier lenguaje según sea la necesidad del mercado laboral
          La idea es empezar con Java, pero si la necesidad del mercado es mandejar C# o cualquier lenguaje orientado a objetos, se puede aplicar sin poblemas
        </p>

      </section>
      <section className="contenido">
      <h1>Temas sugeridos</h1>
        <ul>
          <li>POO</li>
          <li>Apache o Intellij</li>
          <li>Arquitectura MVC</li>
          <li>Buenas practicas (variables, archivos, carpetas)</li>
          <li>Sistema de control de versiones</li>
          <li>Persistencia de datos</li>
        </ul>
      </section>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </section>
  );
};

export default MovilesUno;

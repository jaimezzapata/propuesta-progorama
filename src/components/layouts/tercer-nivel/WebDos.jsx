import React from "react";
import { Link } from "react-router-dom";
const WebDos = () => {
  return (
    <section className="contenedor">
      <section className="nombre">
        <h1>Programación Web ii</h1>
        <p></p>
        <p>
          Los temas serían los mismos que se han manejado hasta el momento, donde se pueda consumir un back y resepresenatrse gráficamente
          Dependiendo de las necesidades del mercado se pdoría considerar el manejo de otras herramientas como Angular, Vue, etc.
        </p>
      </section>
      <section className="contenido">
        <ul>
          <li>React o Angular o Vue</li>
          <li>Rest Full</li>
          <li>Despliegue de proyectos en un servidor</li>
          <li>Consumo de una Api realziada en Back ll</li>
          <li>Fecth</li>
        </ul>
      </section>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </section>
  );
};

export default WebDos;

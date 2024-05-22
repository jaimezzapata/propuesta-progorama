import React from "react";
import { Link } from "react-router-dom";
const WebUno = () => {
  return (
    <section className="contenedor">
      <section className="nombre">
        <h1>Front 1</h1>
        <p>
          El módulo como tal solo cambia en cuanto a nombre, ya que el contenido se sería el mismo, enfocado en un proyecto web
        </p>
      </section>
      <section className="contenido">
        <h1>Temas sugeridos</h1>
        <ul>
          <li>Generalidades de JavaScript</li>
          <li>Manipulación del DOM</li>
          <li>Arquitectura MVC</li>
          <li>Buenas practicas (variables, archivos, carpetas)</li>
          <li>Despliegue de proyectos en un servidor</li>
          <li>Sistema de control de versiones</li>
          <li>Fecth</li>
          <li>Api</li>
        </ul>
      </section>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </section>
  );
};

export default WebUno;

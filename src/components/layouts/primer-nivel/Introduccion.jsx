import React from "react";
import { Link } from "react-router-dom";

const Introduccion = () => {
  return (
    <section className="contenedor">
      <section className="nombre">
        <h1>Introduccion al desarrollo Web</h1>
        <p>
          La idea de este módulo es poder abordar conceptos básicos de maquetación y diseño para crear buenas interfaces de usuario.
        </p>
      </section>
      <section className="contenido">
        <h1>Temas sugeridos</h1>
        <ul>
          <li>Semántica de HTML</li>
          <li>Profundicación en CSS puro</li>
          <li>Principio first Mobile</li>
          <li>Generalidades de UX/UI</li>
          <li>Buenas practicas (variables, archivos, carpetas)</li>
          <li>Sistema de control de versiones</li>
        </ul>
      </section>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </section>
  );
};

export default Introduccion;

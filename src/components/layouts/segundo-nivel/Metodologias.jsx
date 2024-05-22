import React from "react";
import { Link } from "react-router-dom";

const Metodologias = () => {
  return (
    <section className="contenedor">
      <section className="nombre">
        <h1>Metodologías Ágiles</h1>
        <p>
          Por nombre, este submodulo se da a entener que solo es el manejo del
          agilismo frente a los procesos de desarrollo, pero entrando a detalle,
          este submódulo ofrece conocimientos en todo lo que se relaciona a las
          fases del desarrollo de software
        </p>
      </section>
      <section className="contenido">
      <h1>Temas sugeridos</h1>
        <ul>
          <li>Levantamiento de requisitos</li>
          <li>Bases de BPMN (diagramación)</li>
          <li>Jira o Azure</li>
          <li>Ejercicios inmersivos a los Daily</li>
        </ul>
      </section>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </section>
  );
};

export default Metodologias;

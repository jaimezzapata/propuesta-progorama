import React from "react";
import { Link } from "react-router-dom";
import Introduccion from "./Introduccion";
const BasesDatos = () => {
  return (
    <section className="contenedor">
      <section className="nombre">
        <h1>Gestión de bases de datos</h1>
        <p>
          La idea del módulo es poder dejar unas bases solidas en todo lo que se
          refiere al manejo y manipulación de una base de dato.
        </p>
      </section>
      <section className="contenido">
      <h1>Temas sugeridos</h1>
        <ul>
          <li>Modelos SQL y NoSQL</li>
          <li>PostgreSLQ - MySQL - SQL Server</li>
          <li>DML-DDL</li>
          <li>Modelamiento de bases de datos</li>
        </ul>
      </section>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </section>
  );
};

export default BasesDatos;

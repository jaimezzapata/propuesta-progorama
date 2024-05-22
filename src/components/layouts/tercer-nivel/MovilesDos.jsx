import React from "react";
import { Link } from "react-router-dom";
const MovilesDos = () => {
  return (
    <section className="contenedor">
      <section className="nombre">
        <h1>Back 2</h1>
        <p>
          Este submódulo es el que representa el mayor cambio dentro del plan de estudios, desde el nombre hasta el contenido.
          Ya que la idea es poder crear un back para ser consumido desde un front, haciendo uso de algun framework
          Al igual que back 1, dependiendo de las necesidades particulares del mercado se podría aplicar algun Framework en relación al lenguaje visto en el módulo anterior a este
        </p>
      </section>
      <section className="contenido">
        <ul>
          <li>Spring Boot</li>
          <li>Micro Servicios</li>
          <li>Api</li>
          <li>Pruebas Unitarias</li>
          <li>Documentación</li>
          <li>Patrones de diseño</li>
        </ul>
      </section>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </section>
  );
};

export default MovilesDos;

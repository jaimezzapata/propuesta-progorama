import React from "react";
import { Link } from "react-router-dom";
const Logica = () => {
  return (
    <section className="contenedor">
      <section className="nombre">
        <h1>Lógica de programación</h1>
        <p>
          El submódulo en meción, es unode los temás de discución siempre en las empresas, pues dicen que los aprendices llegan con un nivel muy básico
        </p>
        <p>
          <strong>Desde Globant, Pragma y Ceiba</strong> me dejan como recomendación o sugerencia para la academia, que los aprendices aprendan la lógica haciendo uso de una tecnología para el trabajo (algún lenguaje de programación). El líder Cesar Hurtado de Globant, en la reunión que tuve de seguimiento de un aprendiz, me indagó sobre la tecnología en la que el CESDE enseñaba, e indica que considera que no tiene nada que ver con la formación para el trabajo
        </p>
        <p>La idea es poder trabajar con lengujes tipados que le permitan al aprendiz entender las bases para luego adaptarse a otro entorno (Java, C#, C++)</p>
      </section>
      <section className="contenido">
      <h1>Temas sugeridos</h1>
        <ul>
          <li>Pensamiento Lógico</li>
          <li>Manejo de un lenguaje de programación</li>
          <li>Bases sólidas en buenas practicas de código</li>
        </ul>
      </section>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </section>
  );
};

export default Logica;

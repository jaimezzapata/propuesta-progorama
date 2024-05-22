import React from "react";
import { Link } from "react-router-dom";
const NuevoPlan = () => {
  return (
    <main className="container">
      <section>
        <h1>1° nivel</h1>
        <Link>
          <button>Introducción al desarrollo Web</button>
        </Link>
        <Link>
          <button>Lógica de Programación</button>
        </Link>
        <Link>
          <button>Gestión de bases de datos</button>
        </Link>
      </section>
      <section>
        <h1>2° nivel</h1>
        <Link>
          <button>Desarrollo Front End l</button>
        </Link>
        <Link>
          <button>Desarrollo Back End l</button>
        </Link>
        <Link>
          <button>Nuevas tecnologías de la programación</button>
        </Link>
      </section>
      <section>
        <h1>3° nivel</h1>
        <Link>
          <button>Desarrollo Front End ll</button>
        </Link>
        <Link>
          <button>Desarrollo Back End ll</button>
        </Link>
        <Link>
          <button>Metodologías ágiles</button>
        </Link>
      </section>
      <aside className="descripcion">
        <p>
          Teniendo en cuenta la reducción de niveles del progama, que hoy son
          tres niveles, considero que lo mas prudente para los estudiantes,
          emrpesas y nosotros como docentes es adoptar una línea definida, así
          dejamos un concepto mas solido y no tan general
        </p>
        <p>
          En relación al desarrollo movil, que es una línea que se aborda hoy en
          día en el contenido didactico, siento que no se tiene el tiempo
          suficiente para dejar buenas bases de desarollo movil, razón por la
          cual propongo dejar una línea de desarrollo web
        </p>
      </aside>
      <Link className="regresar" to={"/"}>
        Regresar
      </Link>
    </main>
  );
};

export default NuevoPlan;

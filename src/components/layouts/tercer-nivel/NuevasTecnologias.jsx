import React from 'react'
import { Link } from 'react-router-dom'
const NuevasTecnologias = () => {
  return (
    <section className="contenedor">
    <section className="nombre">
      <h1>Nuevas tecnologías de la priogramación</h1>
      <p>
       Seguir dando el enfoque que se tiene con los contenidos que hoy en día se dan.
       Adicional, profundizar en el manejo de Git desde el trabajo colaborativo
      </p>
      <p>
        No se ha encontrado ningún hallazgo significativo del módulo. Lo ideal es seguir enfocando el módulo a la análitica de datos, para que los estudiantes tengan ese acercamiento
      </p>
    </section>
    <section className="contenido">
      <ul>
        <li>Git</li>
        <li>GitHub, GitLab, GitBucket</li>
        <li>GitFlow</li>
        <li>Phyton</li>
      </ul>
    </section>
    <Link className="regresar" to={"/"}>
      Regresar
    </Link>
  </section>
  )
}

export default NuevasTecnologias
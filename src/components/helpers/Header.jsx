import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <Link to={'/introduccion'}>Introducción</Link>
        <Link to={'/logica'}>Logica</Link>
        <Link to={'/bases-datos'}>Bases de datos</Link>
        <Link to={'/web-l'}>Web l</Link>
        <Link to={'/moviles-l'}>Moviles l</Link>
        <Link to={'/metodologias'}>Metodologias</Link>
        <Link to={'/nuevas'}>Nuevas Tecnologias</Link>
        <Link to={'/web-ll'}>Web ll</Link>
        <Link to={'/moviles-ll'}>Moviles ll</Link>
    </header>
  )
}

export default Header
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/helpers/Home'
import Introduccion from './components/layouts/primer-nivel/Introduccion'
import Logica from './components/layouts/primer-nivel/Logica'
import Metodologias from './components/layouts/segundo-nivel/Metodologias'
import BasesDatos from './components/layouts/primer-nivel/BasesDatos'
import WebUno from './components/layouts/segundo-nivel/WebUno'
import WebDos from './components/layouts/tercer-nivel/WebDos'
import MovilesUno from './components/layouts/segundo-nivel/MovilesUno'
import NuevoPlan from './components/helpers/NuevoPlan'
import MovilesDos from './components/layouts/tercer-nivel/MovilesDos'
import NuevasTecnologias from './components/layouts/tercer-nivel/NuevasTecnologias'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/introduccion',
    element: <Introduccion />
  },
  {
    path: '/metodologias',
    element: <Metodologias />
  },
  {
    path: '/logica',
    element: <Logica />
  },
  {
    path: '/web-l',
    element:<WebUno />
  },
  {
    path: '/moviles-l',
    element: <MovilesUno />
  },
  {
    path: '/bases-datos',
    element: <BasesDatos />
  },
  {
    path: '/web-ll',
    element: <WebDos />
  },
  {
    path: '/moviles-ll',
    element: <MovilesDos />
  },
  {
    path: '/nuevas',
    element: <NuevasTecnologias />
  },
  {
    path: '/nuevo-plan',
    element: <NuevoPlan />
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

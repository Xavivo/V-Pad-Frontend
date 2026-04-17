import { useEffect, useState } from 'react'
import './styles/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Carta from './pages/Carta'
import PedirAqui from './pages/PedirAqui'
import PedirADomicilio from './pages/PedirADomicilio'
import NuestrasRedes from './pages/NuestrasRedes'
import Contacto from './pages/Contacto'

const routes = {
  '/': <Home />,
  '/carta': <Carta />,
  '/pediraqui': <PedirAqui />,
  '/pediradomicilio': <PedirADomicilio />,
  '/nuestrasredes': <NuestrasRedes />,
  '/contacto': <Contacto />,
}

const normalizePath = (path) => {
  const clean = path.replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

const getRouteFromPath = () => normalizePath(window.location.pathname)

function App() {
  const [route, setRoute] = useState(getRouteFromPath())

  useEffect(() => {
    const onLocationChange = () => {
      setRoute(getRouteFromPath())
    }

    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className="page-content">
        {routes[route] ?? <Home />}
      </main>
    </>
  )
}

export default App

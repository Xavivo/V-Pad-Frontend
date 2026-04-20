import { useEffect, useState } from 'react'
import './styles/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Carta from './pages/Carta'
import Pedir from './pages/Pedir'
import PedirAqui from './pages/PedirAqui'
import PedirADomicilio from './pages/PedirADomicilio'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'

const getRouteComponent = (path) => {
  const routes = {
    '/': <Home />,
    '/carta': <Carta />,
    '/pedir': <Pedir />,
    '/pedir/aqui': <PedirAqui />, // New sub-route
    '/pedir/adomicilio': <PedirADomicilio />, // New sub-route
    '/nosotros': <Nosotros />,
    '/contacto': <Contacto />,
  }
  return routes[path] ?? <Home />
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
        {getRouteComponent(route)}
      </main>
    </>
  )
}

export default App

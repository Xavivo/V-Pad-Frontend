import './App.css'
import Ingredients from './components/ingredients'
import Dishes from './components/dishes'
import Orders from './components/orders'

function App() {

  return (
    <>
      <h1>Bienvenido a VPad! funciona tela bien</h1>
      <p>Abajo tienen q salir los ingredientes:</p>
      <Ingredients />

      <p>Y ahora los platos:</p>
      <Dishes />

      <p>Y por último los pedidos:</p>
      <Orders />
    </>
  )
}

export default App

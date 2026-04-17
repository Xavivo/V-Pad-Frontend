import Ingredients from '../components/ingredients';
import Dishes from '../components/dishes';
import Orders from '../components/orders';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a VPad! Esto es una prueba de conexión con el Backend</h1>
      <p>Abajo tienen que salir los ingredientes:</p>
      <Ingredients />

      <p>Y ahora los platos:</p>
      <Dishes />

      <p>Y por último los pedidos:</p>
      <Orders />
    </div>
  );
};

export default Home;

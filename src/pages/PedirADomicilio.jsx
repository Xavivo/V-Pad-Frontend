import Ingredients from '../components/ingredients';
import Dishes from '../components/dishes';
import Orders from '../components/orders';

const PedirADomicilio = () => {
  return (
    <div>
      <fieldset className="game-card">
        <h2 className="game-title">Pedir a Domicilio</h2>
        <p className="game-description">Haz tu pedido a domicilio aquí y recibe la comida directamente en tu puerta.</p>
      </fieldset>

      <section className="ingredients-section">
        <h3>Ingredientes disponibles</h3>
        <Ingredients />
      </section>

      <section className="dishes-section">
        <h3>Platos disponibles</h3>
        <Dishes />
      </section>

      <section className="orders-section">
        <h3>Pedidos actuales</h3>
        <Orders />
      </section>
    </div>
  );
};

export default PedirADomicilio;

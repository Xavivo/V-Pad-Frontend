import Ingredients from '../components/ingredients';
import Dishes from '../components/dishes';
import Orders from '../components/orders';

const PedirAqui = () => {
  return (
    <div>
      <fieldset className="game-card">
        <h2 className="game-title">Pedir Aquí</h2>
        <p className="game-description">Elige tus platos favoritos y recógelo en el local.</p>
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

export default PedirAqui;

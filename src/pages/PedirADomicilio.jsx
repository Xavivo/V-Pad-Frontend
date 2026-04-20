import Ingredients from '../components/ingredients';
import Dishes from '../components/dishes';
import Orders from '../components/orders';

const PedirADomicilio = () => {
  const handleGoBack = () => {
    window.history.pushState({}, '', '/pedir');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div>
      <button className="back-button" onClick={handleGoBack}>← Volver</button>
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

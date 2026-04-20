import Ingredients from '../components/ingredients';
import Dishes from '../components/dishes';
import Orders from '../components/orders';

const PedirAqui = () => {
  const handleGoBack = () => {
    window.history.pushState({}, '', '/pedir');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div>
      <button className="back-button" onClick={handleGoBack}>← Volver</button>
      
      <div className="pedir-page-layout">
        <div className="pedir-dishes-container">
          <section className="ingredients-section">
            <h3>Ingredientes disponibles</h3>
            <Ingredients />
          </section>

          <section className="dishes-section">
            <h3>Platos disponibles</h3>
            <Dishes />
          </section>
        </div>

        <div className="pedir-cart-container">
          <section className="orders-section">
            <Orders />
          </section>
        </div>
      </div>
    </div>
  );
};

export default PedirAqui;

import { useState, useEffect } from "react";
import axios from "axios";

const Carta = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [, setItemType] = useState(null);
  const [searchDishId, setSearchDishId] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const dishesRes = await axios.get('http://localhost:8080/api/dishes');
        setDishes(dishesRes.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Ha habido un error al cargar la carta. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dishId = params.get('dishId');
    setSearchDishId(dishId);
  }, []);

  useEffect(() => {
    if (!searchDishId || dishes.length === 0) return;
    const selectedDish = dishes.find((dish) => String(dish.id) === String(searchDishId));
    if (selectedDish) {
      setProductoSeleccionado(selectedDish);
      setItemType('dish');
    }
  }, [searchDishId, dishes]);

  const retryFetch = () => {
    setLoading(true);
    setError(null);
    const fetchAllData = async () => {
      try {
        const dishesRes = await axios.get('http://localhost:8080/api/dishes');
        setDishes(dishesRes.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Ha habido un error al cargar la carta. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  };

  if (loading) {
    return (
      <fieldset className="menu-fieldset">
        <h2 className="menu-title">Carta</h2>
        <div className="menu-scroll">
          <p>Cargando menú...</p>
        </div>
      </fieldset>
    );
  }

  if (error) {
    return (
      <fieldset className="menu-fieldset">
        <h2 className="menu-title">Carta</h2>
        <div className="menu-scroll">
          <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>
          <button onClick={retryFetch} className="retry-btn">Intentar de nuevo</button>
        </div>
      </fieldset>
    );
  }

  const categorias = {
    tostas: dishes.filter(d => d.id >= 1 && d.id <= 4),
    ensaladillas: dishes.filter(d => d.id >= 5 && d.id <= 8),
    entrantes: dishes.filter(d => d.id >= 9 && d.id <= 15),
    hamburguesas: dishes.filter(d => d.id >= 16 && d.id <= 21),
    entrePanes: dishes.filter(d => d.id >= 22 && d.id <= 26),
    postres: dishes.filter(d => d.id >= 27 && d.id <= 31),
    extras: dishes.filter(d => d.id >= 32)
  };

  const renderCategoria = (titulo, items) => (
    items.length > 0 && (
      <section className="category">
        <h3 className="category-title">{titulo}</h3>
        <div className="products-grid">
          {items.map((dish) => (
            <div
              key={dish.id}
              className="product-card"
              onClick={() => {
                setProductoSeleccionado(dish);
                setItemType('dish');
              }}
            >
              <img src={dish.image || '/imagenTemporal.avif'} alt={dish.name} className="product-img" />
              <div className="card-info">
                <h4>{dish.name}</h4>
                <p className="product-price">${dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  );

  return (
    <fieldset className="menu-fieldset">
      <h2 className="menu-title">Carta</h2>

      <div className="menu-scroll">
        {renderCategoria("Tostas", categorias.tostas)}
        {renderCategoria("Ensaladillas y fríos", categorias.ensaladillas)}
        {renderCategoria("Entrantes", categorias.entrantes)}
        {renderCategoria("Hamburguesas", categorias.hamburguesas)}
        {renderCategoria("Entre panes", categorias.entrePanes)}
        {renderCategoria("Postres", categorias.postres)}
        {renderCategoria("Extras", categorias.extras)}
      </div>

      {productoSeleccionado && (
        <div className="modal-overlay" onClick={() => {
          setProductoSeleccionado(null);
          setItemType(null);
        }}>
          <div className="modal modal-expanded" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => {
              setProductoSeleccionado(null);
              setItemType(null);
            }}>✕</button>

            <img
              src={productoSeleccionado.image || '/imagenTemporal.avif'}
              alt={productoSeleccionado.name}
              className="modal-img-large"
            />

            <div className="modal-content">
              <h3 className="modal-title">{productoSeleccionado.name}</h3>

              {productoSeleccionado.description && (
                <p className="modal-description">{productoSeleccionado.description}</p>
              )}

              <p className="modal-price">${productoSeleccionado.price || 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </fieldset>
  );
};

export default Carta;

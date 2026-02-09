import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/components.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  // useStates to handle new orders
  const [dishes, setDishes] = useState([]);
  const [selectedDishId, setSelectedDishId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        setOrders(Array.isArray(response.data) ? response.data : []); // To make sure we have an array
      } catch (err) {
        setError("No se cargaron los pedidos.");
        console.error(err);
      }
    };

    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/dishes');
        setDishes(Array.isArray(response.data) ? response.data : []); // To make sure we have an array
      } catch (err) {
        console.error("Error cargando los platos:", err);
      }
    };

    fetchOrders();
    fetchDishes();

  }, []);

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:8080/api/orders/${id}`);
    setOrders(orders.filter(order => order.id !== id));
  };

  const addToCart = () => {
    if (!selectedDishId) return;
    const dish = dishes.find(d => d.id === parseInt(selectedDishId));

    setCart(prev => [
      ...prev,
      {
        dishId: dish.id,
        name: dish.name,
        price: dish.price,
        quantity: quantity
      }
    ]);
    
    setSelectedDishId("");
    setQuantity(1);
  };

  const createOrderFromCart = async () => {
    if (cart.length === 0) return;

    const newOrder = {
      items: cart.map(item => ({
        dishId: item.dishId,
        quantity: item.quantity
      }))
    };

    await axios.post("http://localhost:8080/api/orders", newOrder);

    // Fetch orders again to see the new order in the list
    const response = await axios.get("http://localhost:8080/api/orders");
    setOrders(Array.isArray(response.data) ? response.data : []);
    setCart([]);
  }


  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <div>
        <h3>Crear pedido</h3>
        <div id='selectDish'>
          <select value={selectedDishId} onChange={(e) => setSelectedDishId(e.target.value)}>
            <option value="">Selecciona un plato de la carta</option>
            {dishes.map(dish => (
              <option key={dish.id} value = {dish.id}>
              {dish.name} - {dish.price}€
              </option>
            ))}
          </select>

          <input
            type='number'
            min='1'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            id='orderQuantity'
            />
            
            <button onClick={addToCart} id='addCart'>
              Añadir al carrito
            </button>
        </div>

        <h4>Carrito</h4>
        <ul>
          {cart.map((item, index) => (
            <li key = {index}>
              {item.name} x {item.quantity} — {item.price * item.quantity}€
            </li>
          ))}
        </ul>
        <button onClick = {createOrderFromCart} disabled = {cart.length === 0} id='createOrder' style={{backgroundColor: cart.length === 0? "#888" : "#4caf50"}}>
          Crear pedido
        </button>
      </div>
      <h2>Historial de Pedidos</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {orders.map((order) => (
            <div key={order.id} style={{ border: '1px solid #444', padding: '15px', borderRadius: '10px' }}>
              <p><strong>Pedido ID:</strong> {order.id}</p>
              <p><strong>Fecha:</strong> {new Date(order.date).toLocaleString()}</p>
              <p><strong>Estado:</strong> {order.status}</p>

              <div style={{ marginLeft: '20px', fontSize: '0.9em', color: '#666' }}>
                <strong>Productos:</strong>
                <ul>
                  {(order.details || []).map((detail, index) => (
                    <li key={index}>
                      {detail.dish.name || `Plato ID: ${detail.dishId}`} - Cantidad: {detail.quantity}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => deleteOrder(order.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px"
                  }}
                >
                  Eliminar
                </button>

              </div>

              <p><strong>Total:</strong> {order.total}€</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
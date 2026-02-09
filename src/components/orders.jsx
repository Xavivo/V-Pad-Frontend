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

  const createTestOrder = async () => {
    try {
      const newOrder = {
        items: [
          { dishId: 1, quantity: 1 } // Can be adjusted based on actual dish IDs in the database later on
        ]
      };

      await axios.post("http://localhost:8080/api/orders", newOrder);

      // Fetch orders again to see the new order in the list
      const response = await axios.get("http://localhost:8080/api/orders");
      setOrders(Array.isArray(response.data) ? response.data : []);

    } catch (err) {
      console.error("Error creando pedido:", err);
    }
  };

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:8080/api/orders/${id}`);
    setOrders(orders.filter(order => order.id !== id));
  };


  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <div>
        <button id='btnCreateOrder' onClick={createTestOrder} > Crear pedido de prueba </button>
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
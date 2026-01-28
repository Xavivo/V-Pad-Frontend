import { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        setOrders(Array.isArray(response.data) ? response.data : []); // To make sure we have an array
        console.log("Pedidos recibidos:", response.data);
      } catch (err) {
        setError("No se cargaron los pedidos.");
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  if (error) return <p style={{color: 'red'}}>{error}</p>;

  return (
    <div>
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
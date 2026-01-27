import { useEffect, useState } from 'react';
import axios from 'axios';

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/dishes');
        setDishes(response.data); 
      } catch (err) {
        setError("No se cargaron los platos.");
        console.error(err);
      }
    };

    fetchDishes();
  }, []);

  if (error) return <p style={{color: 'red'}}>{error}</p>;

  return (
    <div>
      <h2>Lista de Platos</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            {dish.name} - Descripción: {dish.description} - Precio: ${dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dishes;
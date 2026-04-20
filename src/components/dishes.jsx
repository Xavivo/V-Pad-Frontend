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
    <div className="dishes-grid">
      {dishes.map((dish) => (
        <div key={dish.id} className="dish-card">
          <h4>{dish.name}</h4>
          <div className="dish-price">${dish.price}</div>
          <p className="dish-description">{dish.description}</p>
          <div className="dish-ingredients">
            <span className="dish-ingredients-label">Ingredientes:</span>
            <span>{dish.ingredients || 'No especificados'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dishes;
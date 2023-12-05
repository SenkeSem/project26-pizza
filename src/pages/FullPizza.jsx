import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function FullPizza() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();

  React.useEffect(() => {
    async function getPizzas() {
      try {
        const { data } = await axios.get(
          `https://65166a9f09e3260018c9bd8a.mockapi.io/items/${id} `,
        );
        setPizza(data);
      } catch (error) {
        alert('При получении пиццы проишощла ошибка');
        navigate('/');
      }
    }
    getPizzas();
  }, []);

  if (!pizza) {
    return <h1>Идёт загрузка пиццы....</h1>;
  }

  return (
    <div>
      <img width={450} height={450} src={pizza.imageUrl} />
      <p>{pizza.title}</p>
      <h3>от {pizza.price} ₽</h3>
    </div>
  );
}

export default FullPizza;

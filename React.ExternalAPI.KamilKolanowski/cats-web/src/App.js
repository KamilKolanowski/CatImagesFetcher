import './App.css';
import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id} style={{
    color: product.isFruit ? 'magenta' : 'darkgreen'
  }}>
    {product.title}
  </li>
)

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <div>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
        <ul>
          {listItems}
        </ul>
      </div>
  );
}

function MyButton({ count, onClick }) {
  return (
      <>
        <button onClick={onClick}>Clicked {count} times.</button>
      </>
  )
}
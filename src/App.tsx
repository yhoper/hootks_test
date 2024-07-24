import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const products = [
    { title: "Col", isFruit: false, id: 1 },
    { title: "Ajo", isFruit: false, id: 2 },
    { title: "Manzana", isFruit: true, id: 3 },
  ];

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));

  const handleClick = () => setCount(count + 1);
  return (
    <>
      <ul>{listItems}</ul>
      <hr />
      <button onClick={handleClick}> Hazme click</button>
      <>Has presionado el boton {count}</>
    </>
  );
}

export default App;

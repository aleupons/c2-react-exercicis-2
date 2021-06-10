import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);
  const incrementa = () => {
    if (valor < 10) {
      setValor(valor + 1);
    }
  };
  const decrementa = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  };
  return (
    <div className="contenidor">
      <button onClick={decrementa}>-</button>
      <input type="number" value={valor} readOnly></input>
      <button onClick={incrementa}>+</button>
    </div>
  );
}

export default App;

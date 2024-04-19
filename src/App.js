import { useState } from "react";
let rasmlar = [
  "./assets/photo0.jpg",
  "./assets/photo1.jpg",
  "./assets/photo2.jpg",
  "./assets/photo3.jpg",
];

function App() {
  const [counter, setCounter] = useState(rasmlar.length - 1);
  const back = () => {
    if (counter>0) {
      setCounter(counter-1);
    } else {
      setCounter(rasmlar.length - 1);
    }
  };
  const next = () => {
    if (counter < rasmlar.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="card">
      <img src={`assets/photo${counter}.jpg`} width={600} height={500}></img>
      <button onClick={() => back()}>Back</button>
      <button onClick={() => next()}>Next</button>

      {/* <h1>{counter}</h1> */}
      {/* <button onClick={() => setCounter(counter + 1)}>+</button> */}
      {/* <button onClick={() => setCounter(counter- 1)}>-</button> */}
      {/* <button onClick={() => setCounter(Math.trunc(Math.random()*100)+1)}>random</button> */}
    </div>
  );
}

export default App;


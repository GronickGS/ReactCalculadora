import "./App.css";
import { Boton } from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs"; //npm install mathjs

import gronickLogo from "./img/gronickLogo.png";

function App() {
  const [input, setImput] = useState(""); // crea,os el estado

  const addInput = (val) => {
    setImput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setImput(evaluate(input));
    } else {
      alert("Ingrese valores");
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <div className="marca">
        <div className="gs-logo-contenedor">
            <img src={gronickLogo} className="gs-logo" alt="Logo de GS" />
          </div>
          <h1>Gr6systems</h1>
          
        </div>

        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={addInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setImput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

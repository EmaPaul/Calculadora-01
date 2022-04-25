import './App.css';
import React,{useState} from "react"


function App() {

  const [numero1, setNumero1]=useState("");
  const [numero2, setNumero2]=useState("");
  const [currentOperation, setCurrentOperation]=useState("");
  const [result,setResult]=useState(0);

  function click(valor){
    if(currentOperation===""){// si no hay un numero
      setNumero1(numero1+valor);// entonces setea un valor 
    }else{// caso contrario de que no este vacio
      setNumero2(numero2+valor);// entonces setea otro valor 
    }
    
  }

  function clickOP(valor){
    setCurrentOperation(valor);
  }

  function resultado(){
    switch(currentOperation){
      case"+":
      setResult(Number(numero1)+Number(numero2))
      break;
      case"-":
      setResult(Number(numero1)-Number(numero2))
      break;
      case"*":
      setResult(Number(numero1)*Number(numero2))
      break;
      case"/":
      setResult(Number(numero1)/Number(numero2))
      break;
    }
  }

  function clear(){
    setNumero1("");
    setNumero2("");
    setCurrentOperation("");
    setResult("");
  }

  function Delete(){
    if(currentOperation===""){
      setNumero1(numero1.toString().slice(0,-1));
    }else{
      setNumero2(numero2.toString().slice(0,-1))
    }
  }
  /*
  slice:El método slice() devuelve una copia de una parte del array dentro de un nuevo array
   empezando por inicio hasta fin (fin no incluido).  
  */
  return (
    <div className="App">
        <h1 className="title">CALCULATOR!!!</h1>
    <div className="calculator-grid">{/*operacion*/}
      <div className="output">{/*respuesta*/}
        <div className="previous-operand">{ currentOperation? numero1 + currentOperation:""}</div>{/*operador previo*/} 
        <div className="current-operand">{ result ? result:(!currentOperation? numero1: numero2)}</div>{/*operador siguiente*/}
      </div>
      <button onClick={clear} className="span-two">AC</button>
      <button onClick={Delete}>DEL</button>
      <button onClick={()=>{clickOP("/")}}>/</button>
      <button onClick={()=>{click(7)}}>7</button>
      <button onClick={()=>{click(8)}}>8</button>
      <button onClick={()=>{click(9)}}>9</button>
      <button onClick={()=>{clickOP("*")}}>*</button>
      <button onClick={()=>{click(4)}}>4</button>
      <button onClick={()=>{click(5)}}>5</button>
      <button onClick={()=>{click(6)}}>6</button>
      <button onClick={()=>{clickOP("+")}}>+</button>
      <button onClick={()=>{click(1)}}>1</button>
      <button onClick={()=>{click(2)}}>2</button>
      <button onClick={()=>{click(3)}}>3</button>
      <button onClick={()=>{clickOP("-")}}>-</button>
      <button onClick={()=>{click(".")}}>.</button>
      <button onClick={()=>{click(0)}}>0</button>
      <button onClick={resultado} className="span-two">=</button>
    </div>
    </div>
  );
}

export default App;


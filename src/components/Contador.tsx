import { useState } from "react";

export const Contador = () => {

const [valor,setValor] = useState(0);
const contador = (num:number) => {
    setValor(valor+num);
}

const contador2 = (num:number) => {
    setValor(valor-num);
}






  return (
    <div>
        <h3>Contador</h3>
        <button className="btn btn-primary" onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className="btn btn-primary" onClick={()=>contador2(1)}>-1</button>
    </div>
    
  )
}

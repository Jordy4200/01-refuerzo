import { useCounter } from "../hooks/useCounter";

export const ContadorCustomHook = () => {

  const {valor,contador} = useCounter(20);

  return (
    <div>
        <h3>Contador con Hook: <small>{valor}</small> </h3> 
        <button className="btn btn-primary" onClick={()=>contador(2)}>+1</button>
        <button className="btn btn-primary" onClick={()=>contador(-1)}>-1</button>
    </div>
    
  )
}

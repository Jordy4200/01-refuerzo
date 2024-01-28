import { useState } from "react";

export const useCounter = (InicioContador = 0) => {
const [valor,setValor] = useState(InicioContador);

const contador = (num:number) => {
    setValor(valor+num);
};
return {
    valor:valor,
    contador : contador
}
};

import React, { useEffect, useState } from 'react'

export const ComponenteHook = () => {
     const [valor,setValor] =useState(false);

    const  cambiarValor=()=>{
        setValor(!valor);
    }



    useEffect(()=> {

        console.log('Desde Efecct')
    },[valor] )

  return (
    <div>
        <h3>Hook - UseEfect</h3>
        <button onClick={cambiarValor}>Cambiar</button>
    </div>
  )
}

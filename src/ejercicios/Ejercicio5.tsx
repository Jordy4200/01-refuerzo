import React, { useState } from 'react';

export const Ejercicio5 = () => {
  const [acumulador, setAcumulador] = useState(0);

  const incrementar = () => {
    setAcumulador(acumulador + 5);
  };

  const disminuir = () => {
    setAcumulador(acumulador - 5);
  };

  return (
    <div className='container'>
      <h3>Ejercicio 5</h3>
      <div>
      <p>{acumulador}</p>
      <button  className='btn btn-primary ' onClick={incrementar}>+5</button>
      <button  className='btn btn-danger'   onClick={disminuir}>-5</button>
      </div>
    </div>
  );
};

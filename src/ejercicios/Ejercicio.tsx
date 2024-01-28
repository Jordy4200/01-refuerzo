import React, { useState, useEffect } from 'react';

interface Cuadradolado {
  lado: number;
}

function calcularAreaCuadrado(lado: number): number {
  return lado * lado;
}

function Cuadrado({ lado }: Cuadradolado) {
  const [area, setArea] = useState<number>(0);

  useEffect(() => {
    const nuevaArea = calcularAreaCuadrado(lado);
    setArea(nuevaArea);
  }, [lado]);

  return (
    <div>
      <p>Lado del cuadrado: {lado}</p>
      <p>Área del cuadrado: {area}</p>
    </div>
  );
}

export function Ejercicio() {
  const ladoDelCuadrado = 5;

  return (
    <div>
      <h3 className='container'>Ejercicio 1</h3>
      <Cuadrado lado={ladoDelCuadrado} />
    </div>
  );
}

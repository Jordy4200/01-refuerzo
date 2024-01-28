export const Ejercicio3 = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const nuevoArreglo = arreglo.map((valor) => valor / 5);

  return (
    <div className='container'>
      <h3>Ejercicio 3</h3>
      <p>Arreglo original:</p>
      <ul>
        {arreglo.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
      <p>Arreglo dividido por 5:</p>
      <ul>
        {nuevoArreglo.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
    </div>
  );
};

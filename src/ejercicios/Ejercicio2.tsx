export function sumarElementos(arreglo: number[]): number {
  const suma = arreglo.reduce((total, elemento) => total + elemento, 0);
  return suma;
}

export const Ejercicio2 = () => {
  const arreglo = [1, 2, 3, 4, 5];
  const resultado = sumarElementos(arreglo);

  return (
    <div className='container'>
      <h3>Ejercicio 2</h3>
      <p>Arreglo:</p>
      <ul>
        {arreglo.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
      <p>Suma de arreglos en total  es: {resultado}</p>
    </div>
  );
};

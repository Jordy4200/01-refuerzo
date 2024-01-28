export const Ejercicio4 = () => {
  const alumnos = [
    {
      name: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      name: 'Wendy',
      edad: 20,
      calificacion: 8,
    },
    {
      name: 'Gerson',
      edad: 18,
      calificacion: 9,
    },
  ];
  const promedios = () => {
    if (alumnos.length === 0) {
      return 0;
    }

    const calificaciones = alumnos.map((alumno) => alumno.calificacion);

    const sumaCalificaciones = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    return sumaCalificaciones / alumnos.length;
  };

  return (
    <div className='container'>
      <h3>Ejercicio 4</h3>
      <p>Promedio de calificaciones: {promedios()}</p>
    </div>
  );
};

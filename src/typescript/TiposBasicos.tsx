 export const TiposBasicos = () =>{

    let nombre : string  ="Jordy";
    const edad : number  =21;
    const donanteOrganos : boolean = true;

    const poderes : string [] = ['velocidad','volar','invisible'];
    poderes.push('fuerza');



    return(
      <div>
        <h1>Tipos Basicos</h1>
        {nombre} ,  {edad} ,  {donanteOrganos? 'donante':  'no  donante'}
        <br />
        {poderes.join(', ')}
      </div>
  
    )
  }
 
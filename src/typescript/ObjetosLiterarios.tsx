export const ObjetosLiterarios = () =>{


    interface Persona {
        nombreCompleto : string;
        edad : number;
        direccion : Direccion


    }
    interface Direccion{
        pais : string;
        casaNumero : number;
    }  
    const persona: Persona= {
        nombreCompleto: 'Brad',
        edad:21,
        direccion:{
            pais: 'Ecuador',
            casaNumero: 658 
        }

    }


    return (
        <div>
            <h3>Objetos literarios</h3>
            <code>
                <pre>
                    {JSON.stringify(persona,null,2)}
                </pre>
            </code>
        </div>
    )
}
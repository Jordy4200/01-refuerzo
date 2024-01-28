import { act } from "@testing-library/react";
import { Fragment, useEffect, useReducer } from "react"

//interface 
interface ReduceState{
  valid: boolean;
  token: string | null;
  name: string;
  username: string;
  password: string;
}


const initialState: ReduceState={
  valid: true,
  token: null, //String si tiene valor, si no se genero es null
  name: '',
  username: '',
  password: ''
}

//interface para el  payload

type loginActionPayload={
    name: string,
    username:string,
    passwod: string
}

//definiendo el tipo de dato del action y sus acciones

type ReducerAction=
{type : 'logout'}
| {type:  'login' ,  payload: loginActionPayload };
//metodo reducer - cambio de estado

const authReducer =(state: ReduceState, action: ReducerAction) :  ReduceState=>{
  switch (action.type) {
    case 'logout':
      return {
        valid: false,
        token: null,
        name: '',
        username: '',
        password: ''

      }
      case 'login':
        const {name,username,passwod}=action.payload;
        return {
            valid: false,
            token: '655646546488855',
            name: name,
            username: username,
            password: passwod
    
          }
    default:
      return state;
  }
}

export const Login = () => {

  //hook - useReducer
  //desesctructurar
  const [{valid, token, name}, dispatch]=useReducer(authReducer,initialState);

  //Hook useEffect

  useEffect (()=>{
    //código a ejecutar
    setTimeout(()=>{  //función de tiempo
      //código a ejecutar
      dispatch({type:'logout'})

    },3000)

  }, [])

  //simular la validación
  if(valid){
    return(
    <Fragment>
    <h3>Login</h3>
    <div className="alert alert-info"> Validando...</div>
    </Fragment>
    )
  }

  const login=()=> {
    dispatch({
        type:'login',
        payload:{
            name:'Jordy Velasco',
            username:'Se',
            passwod:'123'
        }

    })
}
const logout = () => {
    dispatch({
        type:'logout',
    });
}
  return (
    <div>
        <h3>Login</h3>
        {(token==null)
        
        ?<div className="alert alert-danger"> {name} No Autenticado </div>
        :<div className="alert alert-success"> {name} Autenticado</div>
        }
       

       {(token==null)
       ? <button className="btn btn-primary" onClick={login}>Login</button>
       : <button className="btn btn-danger"  onClick={logout} >Logout</button>
       }
    </div>
  )
}

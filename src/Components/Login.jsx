import React, { useReducer } from 'react'
import { fakeLogin } from '../Data/fakeLogin'

const initialstate = {
    username:'',
    password:'',
    error:null,
    isLoading:false,
}

function reducer(state, action){
    switch(action.type){
        case 'before login':
            return{
                ...state,
                isLoading:true,
                error: null,
            }
        case 'success login':
            return{
                ...state,
                username:'',
                password:'',
                isLoading:false,
            }
        case 'error login':
            return{
                ...state,
                error:'Sorry, please try again!',
                password:'',
                isLoading:false,
            }
        case 'updated field':
            return{
               ...state,
             
               [action.field]:action.value,
            }
        default:
            return state;

    }
}

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const handleLogin=(e)=>{
       e.preventDefault();
       dispatch({type:'before login'})

    fakeLogin(state.username,state.password)
    .then(response=>{
        
        dispatch({type:'success login'})
        alert('Successsfully lloginned!')
    })
    .catch(error=>{
       dispatch({type:'error login'})
    })
  
    }

  return (
    <div>LoginPage
        <form  onSubmit={handleLogin} method='POST'>
            {state.error && <p>Error time</p>}
        <label htmlFor="username">UserName</label>
       <input type="text" id='username' value={state.username} onChange={e => dispatch({type:'updated field', field:'username', value:e.target.value})}/>
       <label htmlFor="password">Password</label>
       <input type="password" id='password' value={state.password} onChange={e => dispatch({type:'updated field', field:'password', value:e.target.value})}/>
       <button>Login</button>
       {state.isLoading && <p> Loading ....</p>}
        </form>
       
    </div>
  )
}

export default Login
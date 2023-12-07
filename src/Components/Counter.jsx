import { useReducer } from "react";

const initialstate = {
    count:0
}
function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count+1}
        case 'decrement':
            return {count: state.count -1}
        default:
            return state;
    }
}

export default function Counter(){
    const [state, dispatch] = useReducer(reducer,initialstate);
    return(
        <div>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <p>Count: {state.count}</p>
        </div>
    )
}
import { useReducer } from "react";

const User=()=>{
 const Reducerfunction=(state,counterAction)=>{
    switch (counterAction.type) {
        case "add":
            return{...state,count:state.count+1};
        case "minus":
            return{...state,count:state.count-1};
        case "reset":
            return{...state,count: 0}       
    
        default:
            return state;
    }



 }
 const initialvalue={
    count: 0
 }




   const [state,dispatch] = useReducer(Reducerfunction, initialvalue)

return(
        <div>

        <button onClick={()=>dispatch({type:"add"})}>ADD</button>
        <button onClick={()=>dispatch({type:"minus"})}>Minus</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        <p>{state.count}</p>
        </div>

    )
}
export default User
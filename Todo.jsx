// import react, { useState } from "react"
//  const Todo =()=>{
//     const [state,setState]=useState(0);

//         return(
//         <div 
//         style={{
//             // border:"2px solid",
//             textAlign:"center",
//             alignItems:"center",
//             display:"flex",
//             flexDirection:"column"
            
//         }}>
//             todo
//             <h1>{state}</h1>
//             <button onClick={()=>setState(state+1)}>increment</button>
//             <br/>
//             <button onClick={()=>setState(state-2)}>decrement</button>
//             <br/>
//             <button onClick={()=>setState(state-state)}>reset</button>
            

//             </div>

//     );
//  };
//  export default Todo;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store";
const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div
    style={{
        border:"2px solid black",
        width:"300px",
        height:"150px",
        textAlign:"center",
        justifyContent:"center",
        margin:"200px auto",
        padding:"20px",
        backgroundColor:"seagreen",
        boxShadow:"initial"
    }}
    >
      <div><h1>Count:{count}</h1></div>
      
      <button onClick={() => dispatch(increment())}>Increment</button>
      
      <button onClick={() => dispatch(decrement())}>decrement</button>
      
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default Todo;
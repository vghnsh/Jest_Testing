import { nanoid } from 'nanoid';
import React, { useReducer, useRef } from 'react';

function Todo() {
    const inputvalue = useRef();
    const [data,dispatch] = useReducer((state,action)=>{
        switch(action.type){
            
            case "add" :{
                return[
                    ...state,{
                        id:nanoid(),
                        name:action.name
                    }
                ]
                
            }
            case "remove":{
                return state.filter((f1)=>f1.id !== action.id)
            }
            default:{
                return state;
            }
            
        }
    },[]);
    const handle = () =>{
        dispatch({
            type:"add",
            name:inputvalue.current.value,
        })
        inputvalue.current.value = '';
    }
    
    return (
        <>
            <div>
                <input ref={inputvalue}></input>
                <button onClick={handle}>ADD</button>
                <ul>
                    {
                        data.map((m1,index)=>(
                            <li key={m1.id}>{m1.name}
                            <button onClick={()=>dispatch({type:'remove', id:m1.id})}>Remove</button></li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Todo

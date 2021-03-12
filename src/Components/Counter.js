import React, { useEffect, useState } from 'react';

function Counter(props) {
    const [count,setCount] = useState(0);
    const [state,setState] = useState(false);

    useEffect(()=>{
        if(count<1){
            setState(true)
        }
        else{
            setState(false)
        }
    },[count])
    
    return (
        <div>
            <h1 id='name'>{props.name}</h1>
            <h2 id='counter'>{count}</h2>
            <button id='incree' onClick={()=>setCount(count+1)}>UP</button>
            <button id='decree' disabled={state} onClick={()=>setCount(count-1)}>DOWN</button>
        </div>
    )
}

export default Counter;

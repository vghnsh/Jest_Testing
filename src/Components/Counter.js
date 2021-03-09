import React, { useEffect, useState } from 'react';

function Counter() {
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
            
            <h1 id='counter'>{count}</h1>
            <button id='incree' onClick={()=>setCount(count+1)}>Click</button>
            <button id='decree' disabled={state} onClick={()=>setCount(count-1)}>DOWN</button>
        </div>
    )
}

export default Counter;

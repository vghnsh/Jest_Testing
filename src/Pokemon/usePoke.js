import  { useEffect, useState } from 'react'

export function usePoke(pokname){
    const [poke,setpoke]=useState(null);
    const [isLoad,setisLoad] = useState(true);
    const [err,setErr] = useState(null);

    useEffect(()=>{
        const fetchdata = async()=>{
        setisLoad(true);
        try{
            const resp =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokname}`);
            const json = await resp.json();
            setpoke(json);
        }
        catch(e){
            setErr(e);
        }
        setisLoad(false);
        };
        fetchdata();
    },[pokname]);
    return {poke,isLoad,err}
}

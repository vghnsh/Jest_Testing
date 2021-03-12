import React from 'react'
import {usePoke} from './usePoke';

function Pokemon() {
    const {isLoad,poke,err}= usePoke('ditto');
    if(isLoad){
        return <>...loading</>
    }
    if(error){
        return <>Error</>
    }
    return (
        <>
            <img src={poke.sprites.front_default} alt="pokemon" />
            <h1>{poke.species.name}</h1>
        </>
    )
}

export default Pokemon

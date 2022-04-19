import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon=()=>{

    const [num,setNum] = useState();

    useEffect(()=>{
        // alert("hi");
        async function getdata(){
            // const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${{num}}`);
        }
    });

return(
    <>
        <h1>you choose {num} value</h1>
        <h1>Pokemon</h1>
        <select value={num} onChange={(event)=>{
            setNum(event.target.value);
        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </>
)
};

export default Pokemon;
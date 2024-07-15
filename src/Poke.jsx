import axios from "axios";
import { useEffect } from "react";

const Poke = () => {
    useEffect(()=>{

        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((res)=>{
            console.log(res.data.results[1]);  
        })
    },[])
    return (<></>  );
}
 
export default Poke;
import { useState, useContext } from "react";
import { Contador } from "./Contador";
import { miContexto } from "./CustomContext";



//Componente Padre
export const ItemDetail = (props) => {
    
    const [received, setReceived] = useState(false)
    const elValorDelContexto = useContext(miContexto)
    console.log("🚀 ~ ItemDetail ~ elValorDelContexto:", elValorDelContexto)

    const handle = (data) => {
        console.log(data)
        setReceived(true)
    }

    return (
        <div>
            <img
                src={props.pokemon.sprites?.front_default}
                alt={props.pokemon.name}
            />
            {props.pokemon.name}
            <Contador handle={handle} />
            <p>{received === true ? "Se recibio el 1 del contador" : "No se recibio nada aun"}</p>
        </div>
    )
}
import { useState } from "react"

//Hooks y ciclos de vida

import { Button } from "./Button";








export function ItemListContainer(props) {

    //Estados
    const [count, setCount] = useState(0)
    const [popupClass, setPopupClass] = useState("popup")


    //Acciones
    const handleClick = () => {
        console.log("Hola");
    }

    const handleIncrement = () => {

        /* count++
        count = count + 1
        count += 1 */

        //count++;
        //const parrafo = documenbt.querySelector("p")
        //parrafo.textContent = "Contador : " + count
        setCount(count + 1)
    }

    const handleDecrement = () => {
        //count--;
        setCount(count - 1)
    }

    const openPopup = () => {
        setPopupClass("popup popup_open")
    }

    const closePopup = () => {
        setPopupClass("popup")
    }

    //Vista
    return (
        <section>
            <h2>{props.mensaje}</h2>

            <div>
                <p>Contador: {count}</p>
                <button onClick={handleIncrement}>Incrementar</button>
                <button onClick={handleDecrement}>Decrementar</button>
            </div>

            <button onClick={popupClass === "popup" ? openPopup : closePopup}>
                {popupClass === "popup" ? "abrir" : "cerrar"} popup
            </button>

            <div className={popupClass}>
                <p onClick={handleClick}>Soy un popup</p>
                <Button nombre="Cerrar" icono="❌" />
            </div>

        </section>
    )
}
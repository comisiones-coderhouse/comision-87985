import { useState } from "react"

//Hooks y ciclos de vida

import { Button } from "./Button";








export function ItemListContainer(props) {

    //Variable comun (no actualiza la vista automaticamente)
    //let count = 0;

    //Variable estado (actualiza la vista automaticamente)
    //const [estado,setEstado] = useState(valorInicial)
    const [count, setCount] = useState(0)
    const [popupClass, setPopupClass] = useState("popup")
    //const [isOpen, setIsOpen] = useState(false)


    //acciones
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
    

    //vista
    return (
        <section>
            <h2>{props.mensaje}</h2>

            <div>
                <p>Contador: {count}</p>
                <button onClick={handleIncrement}>Incrementar</button>
                <button onClick={handleDecrement}>Decrementar</button>
            </div>

            <button onClick={openPopup}>abrir popup</button>

            <div className={popupClass}>
                <p onClick={handleClick}>Soy un popup</p>
                <Button nombre="Cerrar" icono="❌" />
            </div>

        </section>
    )
}




/* 

JS vanilla 


*/

//index.html
{/* <div className="popup">
    <p>Soy un popup</p>
    <Button nombre="Cerrar" icono="❌" />
</div>

//index.js
const popup = document.querySelector(".popup");
const button = document.querySelector("button");
const closeButton = document.querySelector(".close-button");

button.addEventListener("click", () => {
    popup.classList.add("show");
});


closeButton.addEventListener("click", () => {
    popup.classList.remove("show");
});
 */}





//contador.html
{/* <div>
    <p>Contador: 0</p>
    <button>Incrementar</button>
    <button>Decrementar</button>
</div>

//contador.js
const counter = document.querySelector("p");
const incrementButton = document.querySelector("button");
const decrementButton = document.querySelector("button");

let count = 0;

incrementButton.addEventListener("click", () => {
    count++;
    counter.textContent = `Contador: ${count}`;
});
 
 */}
import { createContext, useState } from "react";

//Este es el objeto contexto
export const CartContext = createContext()


//Este es el componente "envoltorio"
export function CartCustomProvider(props) {

    const [totalQuantity, setTotalQuantity] = useState(0)
    const [items, setItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = (quantity) => {
        const finalQuantity = totalQuantity + quantity
        setTotalQuantity(finalQuantity)
    }

    const removeItemFromCart = () => { }

    const clearCart = () => {
        setTotalQuantity(0)
        setItems([])
        setTotalPrice(0)
    }

    const elValorDelContexto = {
        //El array de productos agregados al carrito
        items: [],
        //El precio total de la compra
        totalPrice: 0,
        //La cantidad total de productos agregados al carrito
        totalQuantity: totalQuantity,
        addItemToCart,
        removeItemFromCart,
        clearCart,
    }

    return (
        <CartContext.Provider value={elValorDelContexto}>
            {props.children}
        </CartContext.Provider>
    )
}
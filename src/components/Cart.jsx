import toast from "react-hot-toast"
import { db } from "../firebaseConfig"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export function Cart() {

    const handlePrueba = () => {

        const nueva_orden = {
            usuario: {
                nombre: "Juan",
                email: "juan@gmail.com",
                telefono: "1234567890"
            },
            fecha_compra: serverTimestamp(),
            items: [/* aca tendria que ir lo que hay en el carrito, osea lo que hay en el contexto */]
        }

        const ordenesCollection = collection(db, "ordenes")

        toast.loading("Finalizando compra...")

        const consulta = addDoc(ordenesCollection, nueva_orden)

        consulta
            .then((response) => {
                toast.dismiss()
                toast.success("Compra finalizada correctamente. Su id de compra es : " + response.id)
            })
            .catch(() => {
                toast.dismiss()
                toast.error("Error al finalizar la compra")
            })

    }

    return (
        <main className="main">
            <section className="main__section">
                <h2 className="main__title">Carrito de compras</h2>
                <button onClick={handlePrueba}>Finalizar compra</button>
            </section>
        </main>
    )
}
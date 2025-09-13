import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import { Item } from "./Item"
import { collection, getDocs, query, where /* , orderBy,  startAfter , startAt , limit , endAt, endBefore  */ } from "firebase/firestore"
import { db } from "../firebaseConfig"


//Componente Padre
export function ItemListContainer() {

    const [pokemons, setPokemons] = useState([])
    const resultado = useParams()

    useEffect(() => {
        toast.loading("Cargando...")

        async function getData() {
            try {
                /* const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/")
                const resultado2 = await resultado.json()
                setPokemons(resultado2.results) */

                const productosCollection = collection(db, "productos")

                //SELECT * FROM productos
                const consulta = await getDocs(productosCollection)

                //Me creo un array para almacenar los productos ya "decodificados"
                const productos = []

                //Recorro el array de productos y "decodifico" cada producto
                consulta.docs.forEach((doc) => {
                    productos.push(doc.data())
                })

                setPokemons(productos)

                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar los datos")
            }
        }

        async function getDataByCategory() {
            try {

                const productosCollection = collection(db, "productos")

                const filtro = query(productosCollection, where("categoria", "==", "electronico"))

                //SELECT * FROM productos
                const consulta = await getDocs(filtro)

                //Me creo un array para almacenar los productos ya "decodificados"
                const productos = []

                //Recorro el array de productos y "decodifico" cada producto
                consulta.docs.forEach((doc) => {
                    productos.push(doc.data())
                })

                setPokemons(productos)

                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar los datos")
            }
        }

        //getData()
        getDataByCategory()
    }, [])


    //Vista
    return (
        <main className="main">
            <section className="main__section">
                {/* <h2 className="main__title">Soy el ItemListContainer</h2> */}
                <div className="products">
                    {pokemons.map((pokemon) => {
                        return (
                            <Item pokemon={pokemon} />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

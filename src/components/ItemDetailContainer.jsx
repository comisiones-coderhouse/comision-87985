import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { db } from "../firebaseConfig"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"

export function ItemDetailContainer() {

    const params = useParams() //{ id : "pikachu" }
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        toast.loading("Cargando...")
        async function getSingleProductByDoc() {
            try {
                /* const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
                const resultado2 = await resultado.json() */
                const productosCollection = collection(db, "productos")
                const filtro = doc(productosCollection, "h3kQPPmjpUuqPsiYofSv")
                const consulta = await getDoc(filtro)

                setPokemon(consulta.data())
                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar los datos")
            }
        }

        async function getSingleProductByDocs() {
            try {
                const productosCollection = collection(db, "productos")

                const filtro = query(productosCollection, where("id", "==", 1))

                const consulta = await getDocs(filtro)
                
                const producto = {}

                consulta.docs.forEach((doc) => {
                    const data = doc.data() //{ id : 1, nombre : "Producto 1", precio : 100 }
                    const keys = Object.keys(data) //[ "id", "nombre", "precio" ]
                    keys.forEach((key) => {
                        producto[key] = data[key]
                    })
                })

                setPokemon(producto)

                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar los datos")
            }
        }


        //getSingleProductByDoc()
        getSingleProductByDocs()
    }, [])

    //Vista
    return (
        <ItemDetail pokemon={pokemon} />
    )
}
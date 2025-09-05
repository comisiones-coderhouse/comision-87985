import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export function ItemDetailContainer() {

    const params = useParams() //{ id : "pikachu" }
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        toast.loading("Cargando...")
        async function getData() {
            try {
                const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
                const resultado2 = await resultado.json()
                setPokemon(resultado2)
                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar los datos")
            }
        }

        getData()
    }, [])

    //Vista
    return (
        <ItemDetail pokemon={pokemon}/>
    )
}
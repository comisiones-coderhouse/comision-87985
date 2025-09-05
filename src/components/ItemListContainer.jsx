import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import { Item } from "./Item"

export function ItemListContainer() {

    //Estados
    const [pokemons, setPokemons] = useState([])
    const resultado = useParams()

    //Efectos
    useEffect(() => {
        toast.loading("Cargando...")
        async function getData() {
            try {
                const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/")
                const resultado2 = await resultado.json()
                setPokemons(resultado2.results)
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
        <main className="main">

            <section className="main__section">
                {/* <h2 className="main__title">Soy el ItemListContainer</h2> */}
                <div className="products">
                    {pokemons.map((pokemon) => {
                        return (
                            <Item pokemon={pokemon}/>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

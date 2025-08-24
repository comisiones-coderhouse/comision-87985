import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { Link, useParams } from "react-router-dom"

export function ItemListContainer() {

    //Estados
    const [pokemons, setPokemons] = useState([])
    const resultado = useParams()
    console.log("🚀 ~ ItemDetailContainer ~ resultado:", resultado)

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
                <h2 className="main__title">Soy el ItemListContainer</h2>
                <div className="products">
                    {pokemons.map((pokemon) => {
                        return (
                            <article className="product">
                                <h3>{pokemon.name}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                                <Link to={`/pokemon/${pokemon.name}`}>ver detalle</Link>
                            </article>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

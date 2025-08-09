import { useState, useEffect } from "react"
import toast from "react-hot-toast"

export function ItemListContainer() {

    const [pokemons, setPokemons] = useState([])
    console.log("🚀 ~ ItemListContainer ~ pokemons:", pokemons)

    //El fetch con parentesis manda a hacer el pedido
    /* const resultado = fetch("https://pokeapi.co/api/v2/pokemon/")

    resultado
        .then((resultado) => {
            //La primera respuesta de un fetch es un objeto de tipo Response
            console.log(resultado)
            console.log("Salio todo bien")

            //El metodo json() convierte la respuesta en un objeto de tipo JSON
            const resultado2 = resultado.json()
            resultado2
                .then((resultado3) => {
                    console.log(resultado3)
                })
                .catch((error) => {
                    console.log(error)
                })
        })
        .catch(() => {
            console.log("Salio todo mal")
        }) */

    //useEffect(a,b)
    //useEffect(a:function,b:array)
    //useEffect(a:function,b:[])

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



    /* 
    
    THEN/CATCH/FINALLY : 

    Promise
    .then((resultado)=>{})
    .catch((error)=>{})
    .finally(()=>{})


    ASYNC/AWAIT : 

    async function miFuncion(){
        const resultado = await Promise
    }

    
    */


    //Vista
    return (
        <section>
            <p>Soy el ItemListContainer</p>
            {pokemons.map((pokemon) => {
                return <p>{pokemon.name}</p>
            })}
            {pokemons.map((pokemon) => <p>{pokemon.name}</p>)}
        </section>
    )
}



/* 


Array.forEach(a)
Array.forEach(a:function)
Array.forEach((item,index)=>{  })


Array.map(a)
Array.map(a:function)
Array.map((item,index)=>{ return ??? })

*/
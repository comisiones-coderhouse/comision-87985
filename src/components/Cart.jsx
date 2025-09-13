export function Cart() {

    const handlePrueba = () => {

        //3) Una referencia a la coleccion (existente o no) de firebase
        const productoCollection = collection(db, "productos")

        //4) Hago la consulta addDoc
        const consulta = addDoc(productoCollection, {
            id: 1,
            nombre: "Producto 1",
            precio: 100
        })

    }

    return (
        <main className="main">
            <section className="main__section">
                <h2 className="main__title">Carrito de compras</h2>
                <button onClick={handlePrueba}>Prueba</button>
            </section>
        </main>
    )
}
import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer"
import { Toaster } from "react-hot-toast"
import { Footer } from "./Footer"
import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { db } from "../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"


function App() {

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


  //vista
  return (
    <>
      <Navbar />
      <button onClick={handlePrueba}>Prueba</button>
      <Routes>
        {/* if(url === path) { return element } */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/about" element={<p>soy el about</p>} />
        <Route path="/contacto" element={<p>soy el contacto</p>} />
        {/* 
        <Route path="/pokemon-1" element={<ItemDetail/>} />
        <Route path="/pokemon-2" element={<ItemDetail/>} />
        <Route path="/pokemon-3" element={<ItemDetail/>} />
        <Route path="/pokemon-4" element={<ItemDetail/>} /> 
        */}
        <Route path="/pokemon/:id" element={<ItemDetailContainer />} />
      </Routes>
      {/* Aca termina el "condicional" */}

      <Footer />
      <Toaster />
    </>
  )
}


export default App
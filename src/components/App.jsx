import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer"
import { Toaster } from "react-hot-toast"
import { Footer } from "./Footer"
import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"

function App() {


  //vista
  return (
    <>
      <Navbar />

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
        <Route path="/pokemon/:id" element={<ItemDetailContainer/>} /> 
      </Routes>
      {/* Aca termina el "condicional" */}

      <Footer />
      <Toaster />
    </>
  )
}


export default App
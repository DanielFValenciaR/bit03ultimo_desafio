import { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { Buscador } from "./components/buscador/Buscador";
import { BotonProductos } from "./components/botonProductos/BotonProductos";
import { TarjetasContenedor } from "./components/tarjetas/TarjetasContenedor";
import { AgregarProductos } from "./components/mostrarProductos/AgregarProductos";

import './App.css'

function App() {
  const [articulos, setArticulos] = useState([]);
  const [valorBuscado, setValorBuscado] = useState("");
  const [productosAñadidos, setProductosAñadidos] = useState([]);
  const [mostrarProductosAñadidos, setMostrarProductosAñadidos] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>setArticulos(data))
  }, [])
  
  const filtroProductos = articulos.filter((articulo) =>
    articulo.title.toLowerCase().includes(valorBuscado.toLowerCase())
  );

  function cambiarDatosBusqueda(e) {
    setValorBuscado(e.target.value);
  }

  function añadirProducto(articulo) {
    articulo.addNumber = 1;
    const arregloArticulo = productosAñadidos;
    setProductosAñadidos([...arregloArticulo, articulo]);
    console.log(productosAñadidos);
  }

  function eliminarProducto(articulo) {
    const nuevosArticulos = productosAñadidos.filter((añadirProducto) => añadirProducto.id !== articulo.id);
    setProductosAñadidos(nuevosArticulos);
  }

  return (
    <div className="main-container">
        <div className="nav-container">
          <Header />
          <div className="nav-right">
            <Buscador 
              productos={articulos}
              value={valorBuscado}
              onChangeData={cambiarDatosBusqueda}
            />
            <div className="boton-container">
              <BotonProductos numero={productosAñadidos.length} click={setMostrarProductosAñadidos} />
            </div>
        </div>
      </div>
      {mostrarProductosAñadidos && (
        <AgregarProductos 
          productos={productosAñadidos}
          click={setMostrarProductosAñadidos}
          eliminarProducto={eliminarProducto}
          setProductoAñadido={setProductosAñadidos}
        />
      )}
      <TarjetasContenedor 
        productos={filtroProductos}
        añadirProducto={añadirProducto}
        eliminarProducto={eliminarProducto}
        productosAñadidos={productosAñadidos}
      />
    </div>
  )
}

export default App

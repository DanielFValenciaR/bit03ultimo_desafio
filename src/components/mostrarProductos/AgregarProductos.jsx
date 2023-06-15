import { useRef } from "react";
import { ListaProductos } from "./ListaProductos";

export const AgregarProductos = ({ productos, click, eliminarProducto, setProductoAñadido }) => {
    const total = productos.reduce((acumulador, valorActual) => {
        return acumulador + Number(valorActual.addNumber) * Number(valorActual.price);
    }, 0).toFixed(2);

    const mostrarDiv = useRef(null);

    return (
        <div ref={mostrarDiv} className="agregarProductos-container">
            <div className="izquierda-container">

            </div>
            <div className="desplegable-derecha-productos">
                <div className="desplegable-header">
                    <h1>
                    Tienes <span className="total-productos">{productos.length}</span> 
                    {productos.length < 1 || productos.length > 1
                        ? " productos"
                        : " producto"}
                    </h1>
                    <button
                    className="boton-salir"
                    onClick={() => {
                        mostrarDiv.current.classList.add("animate");
                        setTimeout(() => click(false), 230);
                    }}
                    >
                    ❌
                    </button>
                </div>
                <div className="desplegable-section">
                    {productos.map((producto, i, arregloProductos) => (
                    <ListaProductos
                        key={producto.id}
                        producto={producto}
                        eliminarProducto={eliminarProducto}
                        setProductoAñadido={setProductoAñadido}
                        arregloProductos={arregloProductos}
                    />
                    ))}
                </div>
                <div className="desplegable-footer">
                    <hr />
                    <div className="footer-info">
                        <h2>Total :</h2>
                        <h3>${total}</h3>
                    </div>
                    <div className="comprobar">
                        <button
                            className="boton-comprobar"
                            onClick={() => {
                            productos.length >= 1 && print();
                            }}
                        >
                            Comprobar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

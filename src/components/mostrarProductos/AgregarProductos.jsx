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
                <div className="comprobar-container">
                    <div className="imprimir-container">
                        <h1>La tienda de DANIEL</h1>
                        <h3>Productos comprados</h3>
                        <table>
                            {/* Encabezado de la tabla */}
                            <thead>
                            {/* Se define una fila en el encabezado de la tabla */}
                                <tr>
                                {/* Se define una celda de encabezado para cada uno*/}
                                    <th>No.</th>
                                    <th>Nombre del Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            {/* Se define el cuerpo de la tabla */}
                            <tbody>
                                {productos.map((producto, i) => (
                                    <tr key={producto.id}>
                                        {/* Se define una celda de datos para cada uno */}
                                        <td>{i+1}</td>
                                        <td>{producto.title}</td>
                                        <td>${producto.price}</td>
                                        <td>{producto.addNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                            {/* Se define el pie de la tabla */}
                            <tfoot>
                                <tr>
                                    {/* Ancho de columna extendido */}
                                    <td className="total" colSpan={2}>
                                        TOTAL
                                    </td>
                                    <td className="total" colSpan={2}>
                                        ${total}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <h4>Muchas gracias por tu compra!</h4>
                    </div>
                </div>
            </div>
            <div className="desplegable-productos">
                <div className="desplegable-header">
                    <h1>
                    Agregaste <span className="total-productos">{productos.length}</span> 
                    {productos.length < 1 || productos.length > 1
                        ? " productos"
                        : " producto"}
                    </h1>
                    <button
                    className="boton-salir"
                    onClick={() => {
                        mostrarDiv.current.classList.add("animate");
                        setTimeout(() => click(false), 200);
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

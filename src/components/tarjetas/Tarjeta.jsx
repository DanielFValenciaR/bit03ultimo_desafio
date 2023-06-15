import { useState, useEffect } from "react";

export const Tarjeta = ({ producto, añadirProducto, eliminarProducto, productosAñadidos }) => {
    const [agregado, setAgregado] = useState(true);
    const articulo = productosAñadidos.filter((productoAñadido) => productoAñadido.id == producto.id);

    useEffect(() => {
        articulo.length == 0 ? setAgregado(true) : setAgregado(false);
    }, [articulo]);

    return (
        <div className="tarjeta">
            <img className="imagen-tarjeta" src={producto.image} alt="Imagen del producto" />
            <div className="info-tarjeta">
                <h2>{producto.title}</h2>
                <h3>{producto.category}</h3>
                <p>{producto.description}</p>
            </div>
            <div className="precio-añadir-tarjeta">
                <span>Precio: ${producto.price}</span>
                <button
                    className={agregado ? "boton-añadir" : "boton-eliminar"}
                    onClick={() => {
                        agregado ? añadirProducto(producto) : eliminarProducto(producto);
                        setAgregado(!agregado);
                    }}
                >
                    {agregado ? "Añadir" : "Cancelar"}
                </button>
            </div>
        </div>
    );
};

import { Tarjeta } from "./Tarjeta";

export const TarjetasContenedor = ({ productos, añadirProducto, eliminarProducto, productosAñadidos }) => {
    productos.map((producto) => (producto.agregado = true));

    return (
        <div className="tarjetas-container">
            {productos.map((producto) => (
                <Tarjeta 
                    key={producto.id}
                    producto={producto}
                    añadirProducto={añadirProducto}
                    eliminarProducto={eliminarProducto}
                    productosAñadidos={productosAñadidos}
                />
                ))
            }
        </div>
    );
};

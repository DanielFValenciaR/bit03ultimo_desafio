import { useReducer, useEffect } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {...state, addNumber:state.addNumber + 1};
        case "decrement":
            if (state.addNumber == 1) {
                return state;
            }
            return {...state, addNumber:state.addNumber - 1};
        default:
            break;
    }
}

export const ListaProductos = ({ producto, eliminarProducto, setProductoAñadido, arregloProductos}) => {
    const [state, dispatch] = useReducer(reducer, producto);

    useEffect(() => {
        const nuevoArreglo = arregloProductos.map((arregloProducto) => {
            arregloProducto.id == producto.id && (producto.addNumber = state.addNumber);
            return arregloProducto;
        });
        setProductoAñadido(nuevoArreglo);
    }, [state]);
    
    return (
        <div className="lista-productos">
            <img className="lista-imagenes" src={producto.image} alt="Imagen del producto" />
            <button
                className="boton-borrar"
                onClick={() => {
                    document.querySelector(".lista-productos").classList.add("animate");
                    setTimeout(() => eliminarProducto(producto), 210);
                }}
            >
                🚫
            </button>
            <h3>{producto.title}</h3>
            <hr />
            <div className="precio-contador">
                <h4>Precio: ${producto.price}</h4>
                <div className="botones-contador">
                    <button
                        className="boton-menos"
                        onClick={() => {
                            dispatch({ type: "decrement"})
                        }}
                    >
                        -
                    </button>
                    <span className="numero-contador">{producto.addNumber}</span>
                    <button
                        className="boton-mas"
                        onClick={() => {
                            dispatch({ type: "increment"})
                        }}
                    >
                        +
                    </button> 
                </div>
            </div>
        </div>
    );
};



export const BotonProductos = ({ numero, click }) => {
    return (
        <button className="boton-header" onClick={() => click(true)}>
            Agregaste <span>{numero}</span> {numero<1 || numero>1 ? "productos" : "producto"}
        </button>
    )
}

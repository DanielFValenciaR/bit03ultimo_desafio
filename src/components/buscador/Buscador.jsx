export const Buscador = ({ value, onChangeData }) => {
    return (
        <div className="input-container">
            <input 
                className="input"
                placeholder="Introduzca un producto"
                type="text"
                value={value}
                onChange={onChangeData}
            />
        </div>
    )
}
import logo from "../../assets/react.svg";

export const Header = () => {
    return (
        <header>
            <img className='logo-header' src={logo} alt="Logo de react" />
            <h1>La tienda de DANIEL</h1>
        </header>
    )
}

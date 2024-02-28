import { NavLink } from "react-router-dom"
import Logo from "../../img/argentBankLogo.png";

function Header() {
    return (
        <header className="main-nav">
            <NavLink to="/" >
            <img className="main-nav-logo" src={Logo} alt="Logo Argent Bank"></img></NavLink>
            <NavLink to="/SignIn" className="main-nav_Signin"> Sign In</NavLink>
        </header>
    )
}

export default Header;
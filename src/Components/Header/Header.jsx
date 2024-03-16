import { NavLink } from "react-router-dom"
import Logo from "../../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const faProfil = <FontAwesomeIcon icon={faUser}/>
const faOut = <FontAwesomeIcon icon={faRightFromBracket}/>;

function Header() {
    return (
        <header className="main-nav">
            <NavLink to="/" ><img className="main-nav-logo" src={Logo} alt="Logo Argent Bank"></img></NavLink>
            <div className="main-nav_bar">
                <NavLink to="/SignIn" className="main-nav_Signin">{faProfil} Sign In</NavLink>
                <NavLink to="/" className="main-nav_Signin">{faOut} Sign Out</NavLink>
            </div>
        </header>
    )
}

export default Header;
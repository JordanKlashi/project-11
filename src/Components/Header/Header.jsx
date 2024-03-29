import { NavLink } from "react-router-dom";
import Logo from "../../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/userSlice.js"

const faProfil = <FontAwesomeIcon icon={faUser}/>;
const faOut = <FontAwesomeIcon icon={faRightFromBracket}/>;

function Header() {

    const dispatch = useDispatch()
    const userState = useSelector(state => state.user);

    const isLoggedIn = userState && userState.isLoggedIn;
    const currentUser = userState.currentUser

    const userLog = () => {
        return (`${currentUser.userName !== undefined  ? currentUser.userName : currentUser.firstName}`);
    };

    const signInLink = isLoggedIn ? userLog() : 'Sign In';
    const signOutLink = isLoggedIn ? <>{faOut} Sign Out</> : '';

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header className="main-nav">
            <NavLink to="/project-11/" ><img className="main-nav-logo" src={Logo} alt="Logo Argent Bank"></img></NavLink>
            <div className="main-nav_bar">
                <NavLink to={isLoggedIn ? "/project-11/Dashboard" : "/project-11/SignIn"} className="main-nav_Signin">{faProfil} {signInLink} </NavLink>               
                <NavLink to="/project-11/" className="main-nav_Signin" onClick={handleLogout}>{signOutLink} </NavLink>
            </div>
        </header>
    );
}

export default Header;

import ErreurLogo from "../img/erreur.jpg"
import { Link } from "react-router-dom";

function Erreur() {
  return (
    <main>
      <div className="Erreur">
        <p className="Erreur-Txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="Erreur-Link"><Link to="/">
          Retourner sur la page d'accueil
        </Link></p>
        <img src={ErreurLogo} alt="Erreur 404"/>
      </div>
    </main>
  );
}

export default Erreur;

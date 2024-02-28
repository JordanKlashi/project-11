

import { Link } from "react-router-dom";

function Erreur() {
  return (
    <main>
      <div className="Erreur">
        <p className="Erreur-Txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="Erreur-Link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
}

export default Erreur;

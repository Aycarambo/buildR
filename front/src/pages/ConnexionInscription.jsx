import React from "react";
import { Link } from "react-router-dom";
import logoUrl from "../assets/images/logo.svg";
import logoApple from "../assets/images/apple.svg";
import logoGoogle from "../assets/images/google.svg";
import logoFacebook from "../assets/images/facebook.svg";

const ConnexionInscription = () => {
  return (
    <main className="connexionInscription">
      <img
        src={logoUrl}
        alt="Logo Buildr"
        className="connexionInscription__logo"
      />

      <div>
        <ul className="connexionInscription__choises">
          <li className="connexionInscription__btn">
            <Link to="/connexion">
              <button className="btn btn--yellow">Connexion</button>
            </Link>
          </li>
          <li className="connexionInscription__btn">
            <Link to="/inscription">
              <button className="btn btn--border">Inscription</button>
            </Link>
          </li>
        </ul>

        <aside className="connexionInscription__with">
          <nav>
            <ul>
              <li>
                <button>
                  <img src={logoGoogle} alt="connexion avec Google" />
                </button>
              </li>
              <li>
                <button>
                  <img src={logoApple} alt="connexion avec Apple" />
                </button>
              </li>
              <li>
                <button>
                  <img src={logoFacebook} alt="connexion avec Apple" />
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <p className="connexionInscription__version">Version 1.0</p>
      </div>
    </main>
  );
};

export default ConnexionInscription;

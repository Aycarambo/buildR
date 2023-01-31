import React from "react";
import logoUrl from "../assets/images/logo.svg";
import logoAppleUrl from "../assets/images/logoApple.png";
import logoGoogleUrl from "../assets/images/logoGoogle.png";

const ConnexionInscription = () => {
  return (
    <main className="connexionInscription">
      <img src={logoUrl} alt="Logo Buildr" className="connexion__logo" />

      <div>
        <ul className="connexion__choises">
          <li className="connexion__btn">
            <button className="btn btn--yellow">Connexion</button>
          </li>
          <li className="connexion__btn">
            <button className="btn btn--border">Inscription</button>
          </li>
        </ul>

        <div className="connexion__with">
          <button>
            <img src={logoGoogleUrl} alt="connexion avec Google" />
          </button>
          <button>
            <img src={logoAppleUrl} alt="connexion avec Apple" />
          </button>
          <button>
              <img src={logoFacebook} alt="connexion avec Apple" />
          </button>
        </div>

        <p className="connexion__version">Version 1.0</p>
      </div>
    </main>
  );
};

export default ConnexionInscription;

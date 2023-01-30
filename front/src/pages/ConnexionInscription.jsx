import React from "react";
import logoUrl from "../assets/images/logo.svg";
import logoAppleUrl from "../assets/images/logoApple.png";
import logoGoogleUrl from "../assets/images/logoGoogle.png";

const ConnexionInscription = () => {
  return (
    <main className="connexion">
      <img src={logoUrl} alt="Logo Buildr" className="connexion__logo" />

      <ul className="connexion__choises">
        <li className="btn btn--yellow">
          <button>Connexion</button>
        </li>
        <li className="btn btn--border">
          <button>Inscriptions</button>
        </li>
      </ul>

      <div className="connexion__with">
        <button>
          <img src={logoGoogleUrl} alt="connexion avec Google" />
        </button>
        <button>
          <img src={logoAppleUrl} alt="connexion avec Apple" />
        </button>
      </div>

      <p className="connexion__version">Version 1.0</p>
    </main>
  );
};

export default ConnexionInscription;

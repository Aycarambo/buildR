import React from "react";
import logoAppleUrl from "../assets/images/logoApple.png";
import logoGoogleUrl from "../assets/images/logoGoogle.png";

const Connexion = () => {
  return (
    <>
    <header className="inscription__header">
      <button className="header__back"></button>
      <h1 className="header__title">Connexion</h1>
      <h2 className="header__subtitle">
        Tu nous as manqué !
      </h2>
    </header>
    <main className="authentification">
      <div className="authentification__email authentification__input">
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
      <div className="authentification__password authentification__input">
        <input type="password" name="password" id="password" placeholder="Mot de passe"/>
      </div>
      <button>Connexion</button>  
    </main>
    <aside className="authentification__other">
      <p className="or">Ou</p>
    </aside>
      <aside className="connexion__with">
        <p>Inscrivez-vous en un seul clic !</p>
          <nav>
            <ul>
              <li>
              <button>
                <img src={logoGoogleUrl} alt="connexion avec Google" />
              </button>
              </li>
              <li>
              <button>
                <img src={logoAppleUrl} alt="connexion avec Apple" />
              </button>
              </li>
              <li>
                {/* <button>
                  <img src={logoFacebookUrl} alt="connexion avec Apple" />
                </button> */}
              </li>
            </ul>
          </nav>
        </aside>
    </>
  );
};

export default Connexion;

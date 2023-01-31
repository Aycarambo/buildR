import React from "react";
import logoApple from "../assets/images/apple.svg";
import logoGoogle from "../assets/images/google.svg";
import logoFacebook from "../assets/images/facebook.svg";

const Connexion = () => {
  return (
    <>
    <header className="inscription-header">
      <button className="inscription-header__back">
      <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1.85718L1.5 7.00004M1.5 7.00004L6.5 12.1429M1.5 7.00004H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <h1 className="inscription-header__title">Connexion</h1>
      <h2 className="inscription-header__subtitle">
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
        <p>Connectez-vous en un seul clic !</p>
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
    </>
  );
};

export default Connexion;

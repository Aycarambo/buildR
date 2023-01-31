import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoApple from "../../assets/images/apple.svg";
import logoGoogle from "../../assets/images/google.svg";
import logoFacebook from "../../assets/images/facebook.svg";

const EmailEtMdp = (props) => {
  const { appendToState, changePage } = props;

  const [isValue, setisValue] = useState(false);

  const [dataConnexion, setDataConnexion] = useState({
    email: "",
    pwd: "",
  });

  useEffect(() => {
    checkIfValued();
  }, [dataConnexion]);

  const handleEmailChange = (e) => {
    setDataConnexion({
      ...dataConnexion,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setDataConnexion({
      ...dataConnexion,
      pwd: e.target.value,
    });
  };

  const checkIfValued = () => {
    if (dataConnexion.email !== "" && dataConnexion.pwd !== "") {
      setisValue(true);
    } else {
      setisValue(false);
    }
  };

  const handleClick = () => {
    appendToState(dataConnexion);
    changePage(2);
  };

  return (
    <>
      <header className="inscription__header">
        <Link to="/connexioninscription">
          <button className="header__back"></button>
        </Link>
        <h1 className="header__title">Inscription</h1>
        <h2 className="header__subtitle">
          Rencontre l'artisan qu'il te faut eheh
        </h2>
      </header>
      <main className="authentification">
        <div className="authentification__email authentification__input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={dataConnexion.email}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="authentification__password authentification__input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>

        {isValue && (
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Étape suivante
          </button>
        )}
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

export default EmailEtMdp;

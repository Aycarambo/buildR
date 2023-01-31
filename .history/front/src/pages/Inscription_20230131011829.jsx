import React, { useContext, useEffect, useState } from "react";
import EmailEtMdp from "./EtapesInscription/EmailEtMdp";
import { DirectusContext } from "../App";
import Jobs from "./EtapesInscription/Jobs";
import Budget from "./EtapesInscription/Budget";
import logoApple from "../assets/images/apple.svg";
import logoGoogle from "../assets/images/google.svg";
import logoFacebook from "../assets/images/facebook.svg";

const Inscription = () => {
  const directus = useContext(DirectusContext);
  const [state, setState] = useState({});

  // 1 : email et mdp
  // 2 : choix categories
  // 3 : budget
  // 4 : resume + desc projet
  const [currentRegistrationStep, setCurrentRegistrationStep] = useState(1);

  const appendToState = (obj) => {
    setState({ ...state, ...obj });
  };
  useEffect(() => {
    console.log(state);
  }, [state]);

  const changePage = (page) => {
    setCurrentRegistrationStep(page);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleRegister = async () => {
    // eslint-disable-next-line
    const user = await directus.users.createOne({
      email: state.email,
      password: state.pwd,
    });
  };

  return (
    <>
    <header className="inscription__header">
      <button className="header__back"></button>
      <h1 className="header__title">Inscription</h1>
      <h2 className="header__subtitle">Rencontre l’artisan qu’il te faut eheh</h2>
    </header>
    <main>
      {currentRegistrationStep === 1 && (
        <EmailEtMdp changePage={changePage} appendToState={appendToState} />
      )}
      {currentRegistrationStep === 2 && (
        <Jobs changePage={changePage} appendToState={appendToState} />
      )}
      {currentRegistrationStep === 3 && (
        <Budget changePage={changePage} appendToState={appendToState} />
      )}
      {/* <button onClick={handleRegister}>S'enregistrer</button> */}
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

export default Inscription;

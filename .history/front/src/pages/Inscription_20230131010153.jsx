import React, { useContext, useState } from "react";
import EmailEtMdp from "./EtapesInscription/EmailEtMdp";
import { DirectusContext } from "../App";
import React from "react";

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

  const handleRegister = async () => {
    // eslint-disable-next-line
    const user = await directus.users.createOne({
      email: state.email,
      password: state.pwd,
    });
  };

  return (
    <main>
      {currentRegistrationStep === 1 && (
        <EmailEtMdp appendToState={appendToState} />
      )}
      <button onClick={handleRegister}>S'enregistrer</button>
    </main>
  );
};

export default Inscription;

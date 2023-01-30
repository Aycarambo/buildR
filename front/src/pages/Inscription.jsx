import React, { useContext, useEffect, useState } from "react";
import EmailEtMdp from "./EtapesInscription/EmailEtMdp";
import { Directus } from "@directus/sdk";
import { DirectusContext } from "../App";

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

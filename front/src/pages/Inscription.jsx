import React, { useContext, useEffect, useState } from "react";
import EmailEtMdp from "./EtapesInscription/EmailEtMdp";
import { DirectusContext } from "../App";
import Jobs from "./EtapesInscription/Jobs";
import Budget from "./EtapesInscription/Budget";

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
  );
};

export default Inscription;

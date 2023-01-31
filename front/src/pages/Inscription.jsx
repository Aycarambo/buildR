import React, { useContext, useEffect, useState } from "react";
import EmailEtMdp from "./EtapesInscription/EmailEtMdp";
import { DirectusContext, UserContext } from "../App";
import Jobs from "./EtapesInscription/Jobs";
import Budget from "./EtapesInscription/Budget";
import Recapitulatif from "./EtapesInscription/Recapitulatif";
import { Navigate } from "react-router-dom";

const Inscription = () => {
  const directus = useContext(DirectusContext);
  const [state, setState] = useState({});
  const { user, actions } = useContext(UserContext);
  const { setUser } = actions;

  // 1 : email et mdp
  // 2 : choix categories
  // 3 : budget
  // 4 : resume + desc projet
  const [currentRegistrationStep, setCurrentRegistrationStep] = useState(1);

  const appendToState = (obj) => {
    setState({ ...state, ...obj });
  };

  const changePage = (page) => {
    setCurrentRegistrationStep(page);
  };

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  const handleRegister = async () => {
    let searchingForJobs = [];
    state.categories.forEach((job) => {
      searchingForJobs.push({ jobs_id: job.id });
    });

    const userInBdd = await directus.users.createOne({
      email: state.email,
      password: state.pwd,
      searching_for_jobs: searchingForJobs,
      budgetMin: state.budget.min,
      budgetMax: state.budget.max,
    });
    setUser({ ...user, connected: true, ...userInBdd });
  };

  return (
    <>
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
        {currentRegistrationStep === 4 && (
          <Recapitulatif
            changePage={changePage}
            appendToState={appendToState}
            inscriptionState={state}
            handleRegister={handleRegister}
          />
        )}
      </main>
      {user.connected && <Navigate to="/" replace />}
    </>
  );
};

export default Inscription;

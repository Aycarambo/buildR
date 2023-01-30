import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { DirectusContext } from "../../App";

const Jobs = (props) => {
  const { changePage } = props;

  const [jobs, setJobs] = useState(null);
  const directus = useContext(DirectusContext);

  useEffect(() => {
    async function fetchJobs() {
      const res = await directus.items("jobs").readByQuery({ limit: -1 });
      setJobs(res.data);
    }
    fetchJobs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="inscription__header">
        <button className="header__back"></button>
        <h1 className="header__title">Choisir vos catégories</h1>
        <h2 className="header__subtitle">
          Sélectionner les différents métiers
        </h2>
      </header>
      <main className="choiceCategory">
        {jobs ? (
          <ul className="categories">
            {jobs.map((job, idx) => {
              return (
                <li key={idx} className="category">
                  <button>
                    <img src="https://picsum.photos/200/300?random=2" alt="" />
                    <p>{job.label}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Pas de données</p>
        )}
        <button
          onClick={() => changePage(3)}
          className="btn choiceCategory__btn"
        >
          Suite
        </button>
      </main>
    </>
  );
};

export default Jobs;

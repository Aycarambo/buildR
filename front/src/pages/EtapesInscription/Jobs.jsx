import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { DirectusContext } from "../../App";

const Jobs = (props) => {
  const { appendToState, changePage } = props;
  const [jobs, setJobs] = useState(null);
  let selectedJobs = [];
  if (jobs) {
    jobs?.forEach((job) => {
      if (job.selected) {
        selectedJobs.push(job.label);
      }
    });
  }

  const directus = useContext(DirectusContext);

  useEffect(() => {
    async function fetchJobs() {
      const res = await directus.items("jobs").readByQuery({ limit: -1 });
      let tempJobs = [];
      res.data.map((job, index) => {
        tempJobs[index] = { index: index, label: job.label, selected: false };
      });
      setJobs(tempJobs);
    }
    fetchJobs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSelectJob = (job) => {
    const tempJobs = jobs;
    tempJobs[job.index].selected = !tempJobs[job.index].selected;
    setJobs([...tempJobs]);
  };

  const handleSubmit = () => {
    appendToState({ categories: selectedJobs });
    changePage(3);
  };

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
                <li key={idx} className={"category"}>
                  <button
                    onClick={() => toggleSelectJob(job)}
                    className={
                      "button" + (job.selected ? " button--active" : "")
                    }
                  >
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
        {selectedJobs.length > 0 && (
          <button
            onClick={() => handleSubmit()}
            className="btn choiceCategory__btn"
          >
            Suite
          </button>
        )}
      </main>
    </>
  );
};

export default Jobs;

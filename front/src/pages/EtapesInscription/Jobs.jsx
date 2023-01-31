import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DirectusContext } from "../../App";

const Jobs = (props) => {
  const { appendToState, changePage } = props;
  const [jobs, setJobs] = useState(null);
  let selectedJobs = [];
  if (jobs) {
    jobs?.forEach((job) => {
      if (job.selected) {
        selectedJobs.push({
          label: job.label,
          imageId: job.imageId,
          id: job.id,
        });
      }
    });
  }

  const directus = useContext(DirectusContext);

  useEffect(() => {
    async function fetchJobs() {
      const res = await directus.items("jobs").readByQuery({ limit: -1 });
      let tempJobs = [];
      res.data.map((job, index) => {
        tempJobs[index] = {
          index: index,
          label: job.label,
          imageId: job.image,
          selected: false,
          id: job.id,
        };
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
      <header className="inscription-header">
        <Link to="/connexioninscription">
        <button className="inscription-header__back"><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1.85718L1.5 7.00004M1.5 7.00004L6.5 12.1429M1.5 7.00004H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </Link>
        <h1 className="inscription-header__title">Choisir vos catégories</h1>
        <h2 className="inscription-header__subtitle">
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
                    <img src={"/assets/" + job.imageId + "?download"} alt="" />
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

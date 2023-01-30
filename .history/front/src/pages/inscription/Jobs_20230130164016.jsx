import React from "react";
import { useState, useEffect } from "react";

const Jobs = () => {
  const [jobs, getJobs] = useState(null);

  useEffect(() => {
    fetch("/items/jobs")
      .then((res) => res.json())
      .then((data) => {
        getJobs(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="choiceCategory">
      <header className="choiceCategory__header">
        <button className="header__back">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1.85742L1 7.00028M1 7.00028L6 12.1431M1 7.00028H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <h1 className="header__title">Choisir vos catégories</h1>
        <h2 className="header__subtitle">Sélectionner les différents métiers</h2>
      </header>
      {jobs ? (
        <ul>
          {jobs.map((job, idx) => {
            return (
              <li key={idx}>
                <button>
                  <img src="" alt="" />
                  <p>{job.label}</p>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Pas de données</p>
      )}
    </main>
  );
};

export default Jobs;

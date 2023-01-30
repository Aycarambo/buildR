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
    <>
      <header className="choiceCategory__header">
        <button className="header__back"></button>
        <h1 className="header__title">Choisir vos catégories</h1>
        <h2 className="header__subtitle">Sélectionner les différents métiers</h2>
      </header>
        <main className="choiceCategory">

      {jobs ? (
        <ul className="categories">
          {jobs.map((job, idx) => {
            return (
              <li key={idx} className="category">
                <button>
                <img src="https://picsum.photos/200/300?random=2"/>
                <p>{job.label}</p>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Pas de données</p>
      )}
      <button className="btn choiceCategory__btn">Suite</button>
    </main>
    </>

  );
};

export default Jobs;

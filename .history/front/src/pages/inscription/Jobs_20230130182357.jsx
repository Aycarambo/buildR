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

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
    <main>
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

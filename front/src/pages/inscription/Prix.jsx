import React from "react";

const Prix = () => {
  return (
    <main className="budget">
      <ul className="budget__list">
        <li className="budget__item">
          <button className="btn btn--border">500€ en -</button>
        </li>
        <li className="budget__item">
          <button className="btn btn--border">Entre 500€ et 1000€</button>
        </li>
        <li className="budget__item">
          <button className="btn btn--border">Entre 1000€ et 2000€</button>
        </li>
        <li className="budget__item">
          <button className="btn btn--border">2000€ et +</button>
        </li>
      </ul>
    </main>
  );
};

export default Prix;
